import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import ProjectCard from '../Card/ProjectCard'
import { projects } from '../../data/constants'

const Container = styled.section`
    background: ${({ theme }) => theme.bg};
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 48px 24px 24px;
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1120px;
    padding: 10px 0px 92px;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.h2`
font-size: clamp(34px, 5vw, 48px);
text-align: left;
align-self: flex-start;
font-weight: 650;
letter-spacing: -.045em;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

const ToggleButtonGroup = styled.div`
    display: flex;
    border: 1px solid rgb(230 238 235 / .18);
    color: ${({ theme }) => theme.white};
    font-size: 16px;
    border-radius: 4px;
    font-weight: 500;
    margin: 22px 0px;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`

const ToggleButton = styled.button`
    color: ${({ theme }) => theme.text_primary};
    font: inherit;
    border: 0;
    background: transparent;
    padding: 10px 24px;
    border-radius: 2px;
    cursor: pointer;
    ${({ $active, theme }) =>
        $active && `
    background: rgb(100 255 218 / .12);
    color: ${theme.primary};
    `
    }
    &:hover {
        background: rgb(100 255 218 / .08);
    }
    &:focus-visible { outline: 2px solid ${({ theme }) => theme.primary}; outline-offset: 2px; }
    @media (max-width: 768px) {
        padding: 8px 12px;
        border-radius: 4px;
    }
`
const Divider = styled.div`
    width: 1px;
    background: ${({ theme }) => theme.primary};
`


const CardContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 18px;
    @media (max-width: 720px) { grid-template-columns: 1fr; }
`;

const Projects = () => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <ToggleButtonGroup >
          <ToggleButton type="button" $active={toggle === 'all'} aria-pressed={toggle === 'all'} onClick={() => setToggle('all')}>All</ToggleButton>
          <Divider />
          <ToggleButton type="button" $active={toggle === 'web'} aria-pressed={toggle === 'web'} onClick={() => setToggle('web')}>Web</ToggleButton>
          <Divider />
          <ToggleButton type="button" $active={toggle === 'mobile'} aria-pressed={toggle === 'mobile'} onClick={() => setToggle('mobile')}>Mobile</ToggleButton>
        </ToggleButtonGroup>
        <CardContainer>
          {projects
            .filter((item) => toggle === 'all' || item.category === toggle)
            .map((project) => (
              <ProjectCard key={project.id} project={project}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects
