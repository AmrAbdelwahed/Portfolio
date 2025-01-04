import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    display: none;
    width: 100%;
    padding: 10px;
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.text_black};
    font-size: 14px;
    font-weight: 700;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.8s ease-in-out;
`
const Card = styled.div`
    width: 350px;
    height: 650px;
    cursor: pointer;
    border: 0.1px solid ${({ theme }) => theme.white};
    border-radius: 10px;
    overflow: hidden;
    padding: 26px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.3s ease-in-out;
    &:hover {
        transform: translateY(-10px);
        border: 0.1px solid ${({ theme }) => theme.primary};
        box-shadow: 10px 10px 30px rgba(100, 255, 218, 0.05),
                -10px -10px 30px rgba(100, 255, 218, 0.05); 
        filter: brightness(1.1);
    }
    &:hover ${Button} {
        display: block;
    }
`

const Image = styled.img`
    width: 100%;
    height: 220px;
    object-fit: cover; /* Ensures the image covers the set dimensions */
    background-color: ${({ theme }) => theme.white};
    border-radius: 10px;
    box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
`;


const Tags = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
`

const Tag = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.white};
    border: 0.1px solid ${({ theme }) => theme.primary};
    padding: 4px 8px;
    border-radius: 10px;
`

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
    max-height: 500px; /* Example value */
`;

const Title = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.white};
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`

const Date = styled.div`
    font-size: 12px;
    margin-left: 2px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`


const Description = styled.div`
    font-weight: 400;
    color: ${({ theme }) => theme.white};
    overflow: hidden;
    margin-top: 12px;
    display: -webkit-box;
    max-width: 100%;
    max-height: none; /* No longer limit the height */
    line-height: 1.6; /* Slightly increase line height for better readability */
    -webkit-line-clamp: 9s; /* Remove clamping */
    -webkit-box-orient: vertical;
`;



const ProjectCard = ({ project }) => {
    const handleCardClick = () => {
        window.open(project.link, '_blank');
      };
    
    return (
        <Card onClick={handleCardClick}>
          <Image src={project.image} />
          <Tags>
            {project.tags?.slice(0, 9).map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
            ))}

          </Tags>
          <Details>
            <Title>{project.title}</Title>
            <Date>{project.date}</Date>
            <Description>{project.description}</Description>
          </Details>
        </Card>
    );
  };

export default ProjectCard