import Header from '../../components/Header';
import {
  Block,
  TitleInput,
  Editor,
  BodyInput,
  FileBlock,
  ButtonBlock,
  WirteActionButton,
  ErrorMessage,
} from './styles';
import useInput from '../../hooks/useInput';
import { useCallback, useState } from 'react';
import Router from 'next/router';
import { postFile, postWrite } from '../../apis/post';

export const WriteBoard = () => {
  const [title, onChangeTitle] = useInput('');
  const [content, onChangeBody] = useInput('');
  const [fileName, onChangeFileName] = useState('');
  const [TitleError, setTitleError] = useState(false);
  const [BodyError, setBodyError] = useState(false);
  const [FileId, setFileId] = useState(null);

  const onFileSubmit = useCallback((e) => {
    if (e.target.files[0] !== undefined) {
      onChangeFileName(e.target.files[0].name);
      const formData = new FormData();
      formData.append('upload', e.target.files[0]);
      postFile(formData).then((response) => {
        if (response.status === 200) {
          setFileId(response.data.data._id);
        } else {
          console.log('파일 전송 실패');
        }
      });
    } else if (e.target.files[0] == undefined) {
      setFileId(null);
      onChangeFileName('');
    }
  }, []);

  const onWriteSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (title === '') {
        setTitleError(true);
        setTimeout(() => setTitleError(false), 2000);
      } else if (content === '') {
        setBodyError(true);
        setTimeout(() => setBodyError(false), 2000);
      } else {
        postWrite({ title, content }).then((response) => {
          if (response.status === 403) alert('로그인을 해주세요');
          else if (response.status === 200) {
            Router.replace('/');
            alert('작성이 완료되었습니다.');
          } else alert('작성이 실패했습니다');
        });
      }
    },
    [title, content],
  );

  const onCancel = useCallback(() => {
    Router.replace('/');
  }, []);

  return (
    <>
      <Header />
      <Block>
        <Editor onSubmit={onWriteSubmit}>
          <p className="title">글 작성하기</p>
          <hr />
          <p className="subtitle">제목</p>
          <TitleInput placeholder="제목을 입력하세요" onChange={onChangeTitle} value={title} />
          {TitleError && <ErrorMessage>제목을 입력해주세요</ErrorMessage>}
          <p className="subtitle">내용</p>
          <BodyInput onChange={onChangeBody} value={content} />
          {BodyError && <ErrorMessage>내용을 입력해주세요</ErrorMessage>}
          <p className="filetitle">파일 업로드</p>
          <FileBlock>
            {fileName ? <div>{fileName}</div> : <div>비어있습니다.</div>}
            <label htmlFor="file">파일 찾기</label>
            <input type="file" id="file" onChange={onFileSubmit} />
          </FileBlock>
          <ButtonBlock>
            <WirteActionButton type="submit">작성하기</WirteActionButton>
            <WirteActionButton onClick={onCancel}>취소</WirteActionButton>
          </ButtonBlock>
        </Editor>
      </Block>
    </>
  );
};

export default WriteBoard;
