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
    [
      { header: '1' },
      { header: '2' },
      { size: [] },
      'bold',
      'italic',
      'underline',
      'strike',
      'blockquote',
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
  ],
};

const formats = [
  'header',
  'size',
  'font',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
];

const TextEditor = ({ content, setContent }) => {
  return (
    <>
      <QuillWrapper theme={'snow'} value={content} modules={modules} formats={formats} onChange={setContent} />
    </>
  );
};

export default TextEditor;
