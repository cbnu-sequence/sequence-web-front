import Link from 'next/link';
import PostHeader from '../PostHeader';
import { ProjectDetailBlock } from './styles';
import ImageSlider from '../ImageSlider';
import { FaGithubSquare } from 'react-icons/fa';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';

const ProjectDetail = ({ data }) => {
  return (
    <ProjectDetailBlock>
      <PostHeader
        title={data.title}
        writerName={data.writer.name}
        writerRole={data.writer.role}
        createdAt={data.createdAt}
        updatedAt={data.updatedAt}
      />
      <div className="projectdetail-bodycontainer">
        <ImageSlider data={data} />
        <div className="projectdetail-bodycontainer-content">{data.content}</div>
        {data.participants.length > 0 && (
          <div className="projectdetail-bodycontainer-participants">
            제작:
            {data.participants.map((participant) => (
              <div key={participant._id} className="projectdetail-bodycontainer-participant">
                {participant.name}
              </div>
            ))}
          </div>
        )}
        <div className="projectdetail-bodycontainer-year">제작년도: {data.year}</div>
        <div className="projectdetail-bodycontainer-link">
          {data.githubUrl && (
            <Link href={data.githubUrl}>
              <div className="projectdetail-bodycontainer-link-githuburl">
                <FaGithubSquare />
              </div>
            </Link>
          )}
          {data.projectUrl && (
            <Link href={data.projectUrl}>
              <div className="projectdetail-bodycontainer-link-projecturl">
                <AiOutlineFundProjectionScreen />
              </div>
            </Link>
          )}
        </div>
        {data.tags.length > 0 && (
          <div className="projectdetail-bodycontainer-tags">
            {data.tags.map((tag, index) => (
              <div key={index.toString()} className="projectdetail-bodycontainer-tag">
                #{tag}
              </div>
            ))}
          </div>
        )}
      </div>
    </ProjectDetailBlock>
  );
};

export default ProjectDetail;
