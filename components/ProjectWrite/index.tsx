import Router from 'next/router';
import { useCallback, useState } from 'react';
import { postFile, postProjectWrite } from '../../apis/post';
import useInput from '../../hooks/useInput';
import Header from '../Header';
import { Block, ErrorMessage, Editor, Input, ButtonBlock, WirteActionButton } from '../WriteBoard/styles';
import { AddButton, ImageBlock, ItemBlock, PreviewImageBlock, SecondInput } from './styles';
import { MdRemoveCircleOutline } from 'react-icons/md';
import router from 'next/router';
import React from 'react';

const ProjectWrite = () => {
  const [title, onChangeTitle] = useInput('');
  const [content, onChangeContent] = useInput('');
  const [githubUrl, onChangeGithubUrl] = useInput('');
  const [projectUrl, onChangeProjectUrl] = useInput('');
  const [year, onChangeYear] = useInput('');
  const [images, setImages] = useState([]);

  const [participants, setParticipants] = useState([]);
  const [participant, setParticipant] = useState('');
  const [tags, setTags] = useState([]);
  const [tag, setTag] = useState('');

  const [imageSrc, setImageSrc] = useState([]);

  const [titleError, setTitleError] = useState(false);
  const [contentError, setContentError] = useState(false);
  const [participantError, setParticipantError] = useState(false);
  const [tagError, setTagError] = useState(false);
  const [yearError, setYearError] = useState(false);
  const [allError, setAllError] = useState(false);

  const onChangeParticipant = useCallback((e) => {
    setParticipant(e.target.value);
  }, []);

  const onChangeTag = useCallback((e) => {
    setTag(e.target.value);
  }, []);

  const onAddParticipants = useCallback(
    (e) => {
      e.preventDefault();
      if (participant !== '') {
        if (participants.includes(participant) === true) {
          setParticipantError(true);
          setTimeout(() => setParticipantError(false), 1500);
        } else {
          setParticipants(participants.concat(participant));
          setParticipant('');
        }
      }
    },
    [participant, participants],
  );

  const onAddTags = useCallback(
    (e) => {
      e.preventDefault();
      if (tag !== '') {
        if (tags.includes(tag) === true) {
          setTagError(true);
          setTimeout(() => setTagError(false), 1500);
        } else {
          setTags(tags.concat(tag));
          setTag('');
        }
      }
    },
    [tag, tags],
  );

  const onRemoveTag = useCallback(
    (item) => {
      setTags(tags.filter((Tag) => Tag !== item));
    },
    [tags],
  );

  const onRemoveParticipant = useCallback(
    (item) => {
      setParticipants(participants.filter((Per) => Per !== item));
    },
    [participants],
  );

  const onRemoveImage = useCallback(
    (item) => {
      setImageSrc(imageSrc.filter((image) => image.id !== item.id));
      setImages(images.filter((id) => id !== item.id));
    },
    [images, imageSrc],
  );

  const onImageSubmit = useCallback((e) => {
    if (e.target.files[0] !== undefined) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        const formData = new FormData();
        formData.append('upload', e.target.files[0]);
        postFile(formData).then((response) => {
          if (response.status === 200) {
            setImageSrc((imageSrc) => imageSrc.concat({ id: response.data.data._id, src: reader.result }));
            setImages((images) => images.concat(response.data.data._id));
          } else if (response.status === 403) {
            alert('로그인 해주세요!');
            router.replace('/login');
          } else {
            alert('이미지가 전송되지 않았습니다');
          }
        });
      };
    }
  }, []);

  const onProjectSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (title === '') {
        setAllError(true);
        setTitleError(true);
        setTimeout(() => setTitleError(false), 2000);
      } else if (content === '') {
        setAllError(true);
        setContentError(true);
        setTimeout(() => setContentError(false), 2000);
      } else if (year === '') {
        setAllError(true);
        setYearError(true);
        setTimeout(() => setYearError(false), 2000);
      } else {
        postProjectWrite({ title, content, githubUrl, projectUrl, participants, tags, year, images }).then(
          (response) => {
            if (response.status === 200) {
              Router.replace('/');
              alert('작성이 완료되었습니다.');
            } else if (response.status === 400) {
              alert('권한이 없습니다.');
            } else if (response.status === 403) {
              alert('로그인을 해주세요.');
              router.replace('/login');
            } else alert('작성이 실패했습니다.');
          },
        );
      }
    },
    [title, content, githubUrl, projectUrl, participants, tags, year, images],
  );

  const onCancel = useCallback(() => {
    Router.replace('/');
  }, []);

  return (
    <>
      <Header />
      <Block>
        <Editor onSubmit={onProjectSubmit}>
          <p className="title">프로젝트 추가하기</p>
          <hr />
          <p className="subtitle">프로젝트 제목</p>
          <Input placeholder="제목을 입력해주세요" onChange={onChangeTitle} value={title} />
          {titleError && <ErrorMessage>제목을 입력해주세요</ErrorMessage>}
          <p className="subtitle">프로젝트 소개</p>
          <Input placeholder="간략한 소개를 해주세요" onChange={onChangeContent} value={content} />
          {contentError && <ErrorMessage>내용을 입력해주세요</ErrorMessage>}
          <p className="subtitle">Github 주소</p>
          <Input placeholder="https://github.com/example" onChange={onChangeGithubUrl} value={githubUrl} />
          <p className="subtitle">Project 주소</p>
          <Input placeholder="https://example.com" onChange={onChangeProjectUrl} value={projectUrl} />
          <p className="subtitle">년도</p>
          <Input placeholder="2022" onChange={onChangeYear} value={year} />
          {yearError && <ErrorMessage>년도을 입력해주세요</ErrorMessage>}
          <p className="subtitle">참여자 이메일</p>
          <SecondInput placeholder="example@naver.com" onChange={onChangeParticipant} value={participant} />
          <AddButton onClick={onAddParticipants}>추가</AddButton>
          {participantError && (
            <ErrorMessage style={{ textAlign: 'start', width: '99%', fontSize: '1rem', marginBottom: '1rem' }}>
              중복되어 있습니다
            </ErrorMessage>
          )}
          <ItemBlock>
            {participants.map((item) => (
              <div className="per_item" key={item} onClick={() => onRemoveParticipant(item)}>
                {item}
              </div>
            ))}
          </ItemBlock>
          <p className="subtitle">태그</p>
          <SecondInput placeholder="React" onChange={onChangeTag} value={tag} />
          <AddButton onClick={onAddTags}>추가</AddButton>
          {tagError && (
            <ErrorMessage style={{ textAlign: 'start', width: '99%', fontSize: '1rem', marginBottom: '1rem' }}>
              중복되어 있습니다
            </ErrorMessage>
          )}
          <ItemBlock>
            {tags.map((item) => (
              <div className="tag_item" key={item} onClick={() => onRemoveTag(item)}>
                #{item}
              </div>
            ))}
          </ItemBlock>
          <ImageBlock>
            <p className="subtitle">이미지 첨부</p>
            <label htmlFor="file">이미지 찾기</label>
            <input
              type="file"
              id="file"
              onChange={onImageSubmit}
              accept="image/gif, image/jpeg, image/png, image/jpg"
            />
          </ImageBlock>
          <PreviewImageBlock>
            {imageSrc.map((item) => (
              <div className="image" key={item.id}>
                <div className="img">
                  <img src={item.src} />
                </div>
                <div className="icon" onClick={() => onRemoveImage(item)}>
                  <MdRemoveCircleOutline />
                </div>
              </div>
            ))}
          </PreviewImageBlock>
          <ButtonBlock>
            <WirteActionButton type="submit">작성하기</WirteActionButton>
            <WirteActionButton onClick={onCancel}>취소</WirteActionButton>
          </ButtonBlock>
          {allError && <ErrorMessage>제목, 소개, 년도는 필수로 입력해주세요.</ErrorMessage>}
        </Editor>
      </Block>
    </>
  );
};

export default ProjectWrite;
