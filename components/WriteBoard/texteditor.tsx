import dynamic from 'next/dynamic';
import styled from '@emotion/styled';
import 'react-quill/dist/quill.snow.css';

const QuillNoSSRWrapper = dynamic(() => import('react-quill'), {
  ssr: false,
});

const QuillWrapper = styled(QuillNoSSRWrapper)`
  height: 300px;
  padding-bottom: 2rem;
  margin-bottom: 1rem;
`;

const modules = {
  toolbar: [
    [{ font: [] }, { size: [] }],
    [{ header: '1' }, { header: '2' }, 'bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ color: [] }, { background: [] }],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
    ['link'],
  ],
};

const formats = [
  'color',
  'background',
  'font',
  'size',
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'indent',
  'link',
];

const TextEditor = ({ content, setContent }) => {
  return (
    <>
      <QuillWrapper theme={'snow'} value={content} modules={modules} formats={formats} onChange={setContent} />
    </>
  );
};

export default TextEditor;
