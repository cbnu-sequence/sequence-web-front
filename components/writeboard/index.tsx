import Header from '../../components/Header';
import { TitleInput, Editor, BodyInput, FileInput, ButtonBlock, WirteActionButton } from './styles';
import useInput from '../../hooks/useInput';
import { useCallback, useState } from 'react';
import Router from 'next/router';

export const BoardWrite = () => {
  const [title, onChangeTitle] = useInput('');
  const [body, onChangeBody] = useInput('');
  const [file, onChangeFile] = useState(null);

  const handleChangeFile = useCallback(
    (e) => {
      onChangeFile(e.target.files);
    },
    [onChangeFile],
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(title);
      console.log(body);
      console.log(file);
      Router.replace('/');
    },
    [title, body, file],
  );

  const onCancel = useCallback(() => {
    Router.replace('/');
  }, []);

  return (
    <>
      <Header />
      <Editor onSubmit={onSubmit}>
        <p className="title">게시판 글 작성</p>
        <hr />
        <p className="subtitle">제목</p>
        <TitleInput placeholder="제목을 입력하세요" onChange={onChangeTitle} value={title} />
        <p className="subtitle">내용</p>
        <BodyInput onChange={onChangeBody} value={body} />
        <p className="filetitle">파일 업로드</p>
        <FileInput type="file" onChange={handleChangeFile} multiple />
        <ButtonBlock>
          <WirteActionButton type="submit">작성하기</WirteActionButton>
          <WirteActionButton onClick={onCancel}>취소</WirteActionButton>
        </ButtonBlock>
      </Editor>
    </>
  );
};

export default BoardWrite;
