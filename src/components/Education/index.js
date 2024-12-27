import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { education } from '../../data/constants';
import EducationCard from '../Card/EducationCard';
import { HiAcademicCap } from 'react-icons/hi';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 50px 0;
  
  @media (max-width: 960px) {
    padding: 30px 0;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 40px 0;
  gap: 12px;
  
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled(motion.div)`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.white};
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const TimelineSection = styled(motion.div)`
  width: 100%;
  max-width: 1000px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const TimelineLine = styled(motion.div)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 100%;
  background: ${({ theme }) => theme.primary};
  opacity: 0.2;

  @media (max-width: 768px) {
    left: 15px;
  }
`;

const TimelineItem = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: ${({ isEven }) => isEven ? 'flex-start' : 'flex-end'};
  padding: 20px;
  position: relative;
  
  @media (max-width: 768px) {
    justify-content: flex-start;
    padding-left: 45px;
  }
`;

const TimelineDot = styled(motion.div)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({ theme }) => theme.primary};
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  
  &:hover {
    transform: translateX(-50%) scale(1.2);
  }

  @media (max-width: 768px) {
    left: 15px;
  }
`;

const CardWrapper = styled(motion.div)`
  width: 45%;
  max-width: 450px;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Education = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Container id="education">
      <Wrapper ref={ref}>
        <Title
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <HiAcademicCap size={40} />
          Education
        </Title>
        
        <TimelineSection
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <TimelineLine
            initial={{ height: 0 }}
            animate={inView ? { height: "100%" } : { height: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
          
          <AnimatePresence>
            {education.map((item, index) => (
              <TimelineItem
                key={index}
                isEven={index % 2 === 0}
                variants={itemVariants}
              >
                <TimelineDot
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
                <CardWrapper
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <EducationCard
                    education={item}
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                  />
                </CardWrapper>
              </TimelineItem>
            ))}
          </AnimatePresence>
        </TimelineSection>
      </Wrapper>
    </Container>
  );
};

export default Education;