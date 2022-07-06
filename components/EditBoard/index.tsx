import Header from '../../components/Header';
import { useCallback, useState } from 'react';
import Router, { useRouter } from 'next/router';
import { postFile, postModify } from '../../apis/post';
import { MdRemoveCircleOutline } from 'react-icons/md';
import { Block, ButtonBlock, Editor, ErrorMessage, FileBlock, Input, WirteActionButton } from '../WriteBoard/styles';
import TextEditor from '../WriteBoard/texteditor';
import React from 'react';
import { useQuery } from 'react-query';

export const EditBoard = () => {
  const router = useRouter();
  // @ts-ignore
  const { id, category }: { id: string; category: string } = router.query;
  const { error, data } = useQuery([category, id], { keepPreviousData: true });

  const filesData: Array<string> = [];
  const fileNameData: Array<object> = [];
  if (data.data.files.length > 0) {
    data.data.files.forEach((file) => {
      filesData.push(file._id);
      fileNameData.push({ name: file.filename, id: file._id });
    });
  }
  if (data.data.images.length > 0) {
    data.data.images.forEach((image) => {
      filesData.push(image._id);
      fileNameData.push({ name: image.filename, id: image._id });
    });
  }

  const [title, setTitle] = useState(data.data.title);
  const [content, setContent] = useState(data.data.content);
  const [files, setFiles] = useState(filesData);
  const [fileName, setFileName] = useState(fileNameData);

  const [TitleError, setTitleError] = useState(false);
  const [BodyError, setBodyError] = useState(false);
  const [allError, setAllError] = useState(false);

  const onChangeTitle = useCallback((e) => {
    setTitle(e.target.value);
  }, []);

  const onFileSubmit = useCallback(
    (e) => {
      if (e.target.files[0] !== undefined) {
        for (let i = 0; i < e.target.files.length; i++) {
          const formData = new FormData();
          formData.append('upload', e.target.files[i]);
          postFile(formData).then((response) => {
            if (response.status === 200) {
              setFiles((files) => files.concat(response.data.data._id));
              setFileName((fileName) => fileName.concat({ name: e.target.files[i].name, id: response.data.data._id }));
            } else if (response.status === 403) {
              alert('로그인 해주세요!');
              router.replace('/login');
            } else {
              alert('파일이 전송되지 않았습니다.');
            }
          });
        }
      } else if (e.target.files[0] == undefined) {
        setFiles([...files]);
        setFileName([...fileName]);
      }
    },
    [router, files, fileName],
  );

  const onRemoveFile = useCallback(
    (item) => {
      setFiles(files.filter((id) => id !== item.id));
      setFileName(fileName.filter((file) => file.name !== item.name));
    },
    [files, fileName],
  );

  const onModifySubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (title === '') {
        setAllError(true);
        setTitleError(true);
        setTimeout(() => setTitleError(false), 2000);
      } else if (content === null) {
        setAllError(true);
        setBodyError(true);
        setTimeout(() => setBodyError(false), 2000);
      } else {
        postModify(category, id, { title, content, files }).then((response) => {
          if (response.status === 403) {
            alert('로그인을 해주세요');
            router.replace('/login');
          } else if (response.status === 200) {
            Router.replace('/');
            alert('수정이 완료되었습니다.');
          } else alert('수정이 실패했습니다');
        });
      }
    },
    [title, content, category, id, files, router],
  );

  const onCancel = useCallback(() => {
    Router.replace('/');
  }, []);

  return (
    <>
      <Header />
      <Block>
        <Editor onSubmit={onModifySubmit}>
          <p className="title">글 작성하기</p>
          <hr />
          <p className="subtitle">제목</p>
          <Input placeholder="제목을 입력해주세요" onChange={onChangeTitle} value={title} />
          {TitleError && <ErrorMessage>제목을 입력해주세요</ErrorMessage>}
          <p className="subtitle">내용</p>
          <TextEditor content={content} setContent={setContent} />
          {BodyError && <ErrorMessage>내용을 입력해주세요</ErrorMessage>}
          <p className="filetitle">파일 업로드</p>

          <FileBlock>
            {fileName.length > 0 ? (
              <div className="file">
                {fileName.map((item) => (
                  <div className="removefile" key={item.id}>
                    <div className="item_name">{item.name}</div>
                    <div className="icon" onClick={() => onRemoveFile(item)}>
                      <MdRemoveCircleOutline />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="file">비어있습니다.</div>
            )}
            <label htmlFor="file">파일 찾기</label>
            <input type="file" id="file" onChange={onFileSubmit} multiple />
          </FileBlock>
          <ButtonBlock>
            <WirteActionButton type="submit">수정하기</WirteActionButton>
            <WirteActionButton onClick={onCancel}>취소</WirteActionButton>
          </ButtonBlock>
          {allError && <ErrorMessage>제목, 내용은 필수로 입력해주세요.</ErrorMessage>}
        </Editor>
      </Block>
    </>
  );
};

export default React.memo(EditBoard);
