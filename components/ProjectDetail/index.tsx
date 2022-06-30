import Link from 'next/link';
import PostHeader from '../PostHeader';
import { ProjectDetailBlock } from './styles';

const ProjectDetail = ({ data }) => {
  console.log(data);

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
        {data.images.length > 0 && (
          <div className="projectdetail-bodycontainer-image">
            {data.images.map((image) => (
              <div key={image._id}>
                <img src={image.url} />
              </div>
            ))}
          </div>
        )}
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
        {data.githubUrl && (
          <div className="projectdetail-bodycontainer-githuburl">
            깃허브 링크:
            <Link href={data.githubUrl}>
              <div className="projectdetail-bodycontainer-githuburl-link">{data.githubUrl}</div>
            </Link>
          </div>
        )}
        {data.projectUrl && (
          <div className="projectdetail-bodycontainer-projecturl">
            프로젝트 링크:
            <Link href={data.projectUrl}>
              <div className="projectdetail-bodycontainer-projecturl-link">{data.projectUrl}</div>
            </Link>
          </div>
        )}
        <div className="projectdetail-bodycontainer-year">제작년도: {data.year}</div>
        {data.tags.length > 0 && (
          <div className="projectdetail-bodycontainer-tags">
            {data.tags.map((tag, index) => (
              <div key={index} className="projectdetail-bodycontainer-tag">
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
