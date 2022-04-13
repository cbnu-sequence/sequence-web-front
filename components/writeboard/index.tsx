import Header from '../../components/Header';
import { TitleInput, Editor, BodyInput, FileBlock, ButtonBlock, WirteActionButton, ErrorMessage } from './styles';
import useInput from '../../hooks/useInput';
import { useCallback, useState } from 'react';
import Router from 'next/router';
import { file, write } from '../../apis/post';

export const BoardWrite = () => {
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
      file(formData).then((response_Id) => setFileId(response_Id));
    } else if (e.target.files[0] == undefined) {
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
        write({ title, content }).then((response_status) => {
          if (response_status === 200) alert('작성이 완료되었습니다.');
          else alert('작성이 실패했습니다');
        });
        Router.replace('/');
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
      <Editor onSubmit={onWriteSubmit}>
        <p className="title">글 작성하기</p>
        <hr />
        <p className="subtitle">제목</p>
        <TitleInput placeholder="제목을 입력하세요" onChange={onChangeTitle} value={title} />
        <p className="subtitle">내용</p>
        <BodyInput onChange={onChangeBody} value={content} />
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
        {TitleError && <ErrorMessage>제목을 입력해주세요ㅜ.ㅜ</ErrorMessage>}
        {BodyError && <ErrorMessage>내용을 입력해주세요ㅜ.ㅜ</ErrorMessage>}
      </Editor>
    </>
  );
};

export default BoardWrite;
