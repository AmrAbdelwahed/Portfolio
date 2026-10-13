import React from 'react';
import styled from 'styled-components';

const Card = styled.article`
  min-width: 0;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.surface};
  border: 1px solid ${({ theme }) => theme.border};
  transition: border-color .18s ease, transform .18s ease;
  &:hover { border-color: rgb(100 255 218 / .55); transform: translateY(-3px); }
  @media (prefers-reduced-motion: reduce) { transition: none; &:hover { transform: none; } }
`;

const Image = styled.img`
  display: block; width: 100%; aspect-ratio: 16 / 8.5; object-fit: cover;
  background: ${({ theme }) => theme.bg}; border-bottom: 1px solid ${({ theme }) => theme.border};
`;
const Content = styled.div`padding: 22px 24px 24px; display: flex; flex: 1; flex-direction: column; align-items: flex-start; @media (max-width: 480px) { padding: 18px; }`;
const Meta = styled.p`color: ${({ theme }) => theme.primary}; font: 12px/1.5 'Courier New', monospace; margin: 0 0 7px; letter-spacing: .035em;`;
const Title = styled.h3`color: ${({ theme }) => theme.text_primary}; font-size: 24px; letter-spacing: -.035em; margin: 0;`;
const Description = styled.p`color: ${({ theme }) => theme.text_secondary}; font-size: 14px; line-height: 1.75; margin: 12px 0 18px;`;
const Tags = styled.ul`list-style: none; margin: auto 0 20px; padding: 0; display: flex; flex-wrap: wrap; gap: 7px;`;
const Tag = styled.li`color: ${({ theme }) => theme.text_secondary}; font: 11px/1.2 'Courier New', monospace; padding: 5px 8px; border: 1px solid ${({ theme }) => theme.border};`;
const Link = styled.a`color: ${({ theme }) => theme.primary}; font-size: 13px; font-weight: 600; text-decoration: none; &:hover { text-decoration: underline; text-underline-offset: 4px; } &:focus-visible { outline: 2px solid ${({ theme }) => theme.primary}; outline-offset: 4px; }`;

const ProjectCard = ({ project }) => (
  <Card>
    <Image src={project.image} alt={`${project.title} project preview`} loading="lazy" />
    <Content>
      <Meta>{project.category === 'mobile' ? 'MOBILE APPLICATION' : 'WEB APPLICATION'} · {project.date}</Meta>
      <Title>{project.title}</Title>
      <Description>{project.description}</Description>
      <Tags aria-label={`${project.title} technologies`}>
        {project.tags?.map((tag) => <Tag key={tag}>{tag}</Tag>)}
      </Tags>
      <Link href={project.link} target="_blank" rel="noopener noreferrer">Explore project <span aria-hidden="true">↗</span></Link>
    </Content>
  </Card>
);

export default ProjectCard;
