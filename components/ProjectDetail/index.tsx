import Link from 'next/link';
import PostHeader from '../PostHeader';
import { ProjectDetailBlock } from './styles';
import ImageSlider from '../ImageSlider';
import { FaGithubSquare } from 'react-icons/fa';
import { GiSpiderWeb } from 'react-icons/gi';
import React from 'react';

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
      <div className="body">
        <div className="image">
          <ImageSlider data={data} />
        </div>
        <div className="explain">
          <div className="explain__top">
            <div className="explain__top--topborder" />
          </div>
          <div className="explain__year">{data.year}</div>

          <div className="explain__content">{data.content}</div>
          {data.participants.length > 0 && (
            <div className="explain__participants">
              {data.participants.map((participant) => (
                <div key={participant._id} className="explain__participant">
                  {participant.name}
                </div>
              ))}
            </div>
          )}

          {data.tags.length > 0 && (
            <div className="explain__tags">
              {data.tags.map((tag, index) => (
                <div key={index.toString()} className="explain__tag">
                  {tag}
                </div>
              ))}
            </div>
          )}
          <div className="explain__link">
            {data.githubUrl && (

              <Link href={data.githubUrl} passHref>
                <div className="explain__link--githuburl">
                  <FaGithubSquare />
                </div>
              </Link>
            )}
            {data.projectUrl && (
              <Link href={data.projectUrl} passHref>
                <div className="explain__link--projecturl">
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
