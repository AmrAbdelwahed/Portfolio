import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { HiOutlineAcademicCap, HiCalendar } from 'react-icons/hi';

const Card = styled(motion.div)`
  width: 100%;
  max-width: 450px;
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
  background: ${({ theme }) => theme.surface};
  
  @media only screen and (max-width: 768px){
    padding: 12px;
    gap: 8px;
    width: 100%;
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

const Name = styled(motion.div)`
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

const Degree = styled(motion.div)`
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

const Achievements = styled(motion.ul)`
  list-style-type: none;
  padding: 0;
  margin: 8px 0 0 0;
`;

const Achievement = styled(motion.li)`
  font-size: 13px;
  color: ${({ theme }) => theme.text_secondary};
  margin: 4px 0;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:before {
    content: "•";
    color: ${({ theme }) => theme.primary};
  }
`;

const EducationCard = ({ education }) => {
  const cardVariants = {
    hover: {
      y: -5,
      transition: {
        duration: 0.2
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
          src={education.img}
          alt={education.school}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
        <Body>
          <Name>
            <HiOutlineAcademicCap size={20} color="#64ffda"/>
            {education.school}
          </Name>
          <Degree>
            {education.degree}
          </Degree>
          <Date>
            <HiCalendar size={14} />
            {education.date}
          </Date>
        </Body>
      </Top>

      {education.description && <Description>{education.description}</Description>}
      {education.achievements && (
          <Achievements>
            {education.achievements.map((achievement, index) => (
              <Achievement
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {achievement}
              </Achievement>
            ))}
          </Achievements>
        )}
    </Card>
  );
};

export default EducationCard;
