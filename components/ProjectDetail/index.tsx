import Link from 'next/link';
import PostHeader from '../PostHeader';
import { ProjectDetailBlock } from './styles';
import ImageSlider from '../ImageSlider';
import { FaGithubSquare } from 'react-icons/fa';
import { GiSpiderWeb } from 'react-icons/gi';

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
        <div className="projectdetail-subbodycontainer">
          <div className="projectdetail-subbodycontainer-top">
            <div className="projectdetail-subbodycontainer-topborder" />
          </div>
          <div className="projectdetail-subbodycontainer-year">{data.year}</div>

          <div className="projectdetail-subbodycontainer-content">{data.content}</div>
          {data.participants.length > 0 && (
            <div className="projectdetail-subbodycontainer-participants">
              제작:
              {data.participants.map((participant) => (
                <div key={participant._id} className="projectdetail-subbodycontainer-participant">
                  {participant.name}
                </div>
              ))}
            </div>
          )}

          {data.tags.length > 0 && (
            <div className="projectdetail-subbodycontainer-tags">
              {data.tags.map((tag, index) => (
                <div key={index.toString()} className="projectdetail-subbodycontainer-tag">
                  {tag}
                </div>
              ))}
            </div>
          )}
          <div className="projectdetail-subbodycontainer-link">
            {data.githubUrl && (
              <Link href={data.githubUrl}>
                <div className="projectdetail-subbodycontainer-link-githuburl">
                  <FaGithubSquare />
                </div>
              </Link>
            )}
            {data.projectUrl && (
              <Link href={data.projectUrl}>
                <div className="projectdetail-subbodycontainer-link-projecturl">
                  <GiSpiderWeb />
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    </ProjectDetailBlock>
  );
};

export default ProjectDetail;
