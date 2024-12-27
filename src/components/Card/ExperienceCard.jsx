import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { HiBriefcase, HiCalendar, HiChevronDown, HiDocument } from 'react-icons/hi';

const Card = styled(motion.div)`
  width: 450px;
  border-radius: 10px;
  border: 0.1px solid ${({ theme }) => theme.primary};
  box-shadow: 10px 10px 30px rgba(100, 255, 218, 0.05),
              -10px -10px 30px rgba(100, 255, 218, 0.05);
  padding: 16px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: ${({ theme }) => theme.Bg};
  
  @media only screen and (max-width: 768px){
    padding: 12px;
    gap: 8px;
    width: 300px;
  }
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
`;

const Image = styled(motion.img)`
  height: 60px;
  width: 60px;
  border-radius: 10px;
  margin-top: 4px;
  object-fit: cover;
  
  @media only screen and (max-width: 768px){
    height: 40px;
    width: 40px;
  }
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Position = styled(motion.div)`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.white};
  display: flex;
  align-items: center;
  gap: 8px;
  
  @media only screen and (max-width: 768px){
    font-size: 14px;
  }
`;

const Company = styled(motion.div)`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  display: flex;
  align-items: center;
  gap: 6px;
  
  @media only screen and (max-width: 768px){
    font-size: 12px;
  }
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  display: flex;
  align-items: center;
  gap: 4px;
  
  @media only screen and (max-width: 768px){
    font-size: 10px;
  }
`;

const Description = styled(motion.div)`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 8px;
  
  @media only screen and (max-width: 768px){
    font-size: 12px;
  }
`;

const Skills = styled(motion.div)`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 8px;
`;

const Skill = styled(motion.span)`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  background-color: ${({ theme }) => theme.card};
  padding: 4px 8px;
  border-radius: 8px;
`;

const Document = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  text-decoration: none;
  margin-top: 8px;
  
  &:hover {
    opacity: 0.8;
  }
`;

const ExpandButton = styled(motion.button)`
  background: none;
  border: none;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  font-size: 12px;
  margin-top: 8px;
  align-self: flex-end;
`;

const ExperienceCard = ({ experience }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const cardVariants = {
    hover: {
      y: -5,
      transition: {
        duration: 0.2
      }
    }
  };

  const expandButtonVariants = {
    initial: { rotate: 0 },
    expanded: { rotate: 180 }
  };

  const contentVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { 
      height: "auto",
      opacity: 1,
      transition: {
        height: {
          duration: 0.3
        },
        opacity: {
          duration: 0.3,
          delay: 0.1
        }
      }
    }
  };

  return (
    <Card
      variants={cardVariants}
      whileHover="hover"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      layout
    >
      <Top>
        <Image 
          src={experience.img}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          alt={experience.company}
        />
        <Body>
          <Position>
            <HiBriefcase size={20} color="#64ffda"/>
            {experience.position}
          </Position>
          <Company>
            {experience.company}
          </Company>
          <Date>
            <HiCalendar size={14} />
            {experience.date}
          </Date>
        </Body>
      </Top>

      <motion.div
        initial="hidden"
        animate={isExpanded ? "visible" : "hidden"}
        variants={contentVariants}
      >
        <Description>
          {experience.description}
        </Description>
        
        {experience.skills && (
          <Skills>
            {experience.skills.map((skill, index) => (
              <Skill
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {skill}
              </Skill>
            ))}
          </Skills>
        )}

        {experience.doc && (
          <Document 
            href={experience.doc}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 5 }}
          >
            <HiDocument size={14} />
            View Certificate
          </Document>
        )}
      </motion.div>
    </Card>
  );
};

export default ExperienceCard;