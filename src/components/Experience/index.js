

import React from 'react'
import styled from 'styled-components'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { experience } from '../../data/constants';
import Experience from '../Card/ExperienceCard';
import ExperienceCard from '../Card/ExperienceCard';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding-top: 50px;
    @media (max-width: 960px) {
        padding: 0px;
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
    padding: 40px 0px 0px 0px;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.white};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

const TimelineSection = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;

    .MuiTimelineItem-root::before {
        content: none;
    }

    @media (max-width: 660px) {
        align-items: center;
    }
`;

const theme = createTheme({
  palette: {
    primary: {
      main: '#64ffda',
    },
  },
});

const index = () => {
    return (
        <Container id="experience">
            <Wrapper>
                <Title>Experience</Title>
                <TimelineSection>
                    <Timeline>
                        {experience.map((experience,index) => (
                            <TimelineItem >
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <ExperienceCard education={experience}/>
                                </TimelineContent>
                                <ThemeProvider theme={theme}>
                                  <TimelineSeparator>
                                      <TimelineDot variant="outlined" color="primary" />
                                      {index !== experience.length  && <TimelineConnector style={{ background: 'primary.light' }} />}
                                  </TimelineSeparator>
                                </ThemeProvider>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </TimelineSection>
            </Wrapper>
        </Container>
    )
}

export default index