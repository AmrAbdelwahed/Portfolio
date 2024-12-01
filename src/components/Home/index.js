import React from 'react'
import styled from 'styled-components'
import { Bio } from '../../data/constants';
import Typewriter from 'typewriter-effect';
import HomeImg from '../../images/amr.jpg'

export const HomeContainer = styled.div`
  background: ${({ theme }) => theme.Bg};
  display: flex;
  justify-content: center;
  position: relative;
  height: calc(100vh - 100px);
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640) {
    padding: 12px 6px;
  }
  z-index: 1;
`;

export const HomeBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

export const HomeInnerContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const HomeLeftContainer = styled.div`
  width: 100%;
  order: 1;
  margin-bottom: 100px;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 130px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1rem;
  }
`;

export const HomeRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  margin-bottom: 100px;
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
  }

  @media (max-width: 640px) {
    margin-bottom: 50px;
  }
`;

const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 350px;
  max-height: 350px;
  margin-right: 25px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.primary};
  box-shadow: 10px 10px 30px rgba(100, 255, 218, 0.075),
                -10px -10px 30px rgba(100, 255, 218, 0.075);

  @media (max-width: 768px) {
    max-width: 350;
    max-height: 350;
    margin: 0px;
  }

  @media (max-width: 640px) {
    max-width: 250px;
    max-height: 250px;
    margin: 0px;
  }
`;

const Subtitle = styled.div`
font-weight: 400;
font-size: 28px;
color: ${({ theme }) => theme.white};
line-height: 68px;
@media (max-width: 960px) {
  text-align: center;
}

@media (max-width: 640px) {
  font-size: 40px;
  line-height: 48px;
  margin-bottom: 8px;
}
@media (max-width: 360px) {
  font-size: 20px;
  line-height: 48px;
  margin-bottom: 8px;
}
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 64px;
  font-family: 'Cinzel', serif;
  margin: 10px 0px;
  color: ${({ theme }) => theme.primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
  @media (max-width: 360px) {
    font-size: 32px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

const TextLoop = styled.div`
  font-weight: 400;
  font-size: 28px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
  @media (max-width: 360px) {
    font-size: 16px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

const HomeButton = styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    text-align: center;
    padding: 12px 24px;
    margin-top: 20px;
    color: ${({ theme }) => theme.white};
    border-radius: 30px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 400;
    transition: all 0.2s ease-in-out !important;
    background: transparent;
    border: 2px solid #64ffda;
    box-shadow: 10px 10px 30px rgba(100, 255, 218, 0.075),
                -10px -10px 30px rgba(100, 255, 218, 0.075);
    transform-origin: center;
    &:hover {
        background: linear-gradient(225deg, #64ffda 0%, #64a4ff 100%);
        border: 2px solid transparent;
        transition: all 0.4s ease-in-out;
                    filter: brightness(1);
    }

    @media (max-width: 640px) {
        padding: 12px 24px;
        font-size: 18px;
    }
`;

const ButtonWrapper = styled.div`
    
    display: flex;
    gap: 20px;  
`;

const Home = () => {
  return (
      <div id="home">
          <HomeContainer>
              <HomeInnerContainer>
                  <HomeLeftContainer id="Left">
                      <Subtitle>Hello, my name is<br /> </Subtitle>
                      <Title>{Bio.name}</Title>
                      <TextLoop>
                          I am a
                          <Span>
                              <Typewriter
                                  options={{
                                      strings: Bio.roles,
                                      autoStart: true,
                                      loop: true,
                                  }}
                              />
                          </Span>
                      </TextLoop>
                      <ButtonWrapper>
                        <HomeButton href={Bio.resume} target='display'>View Resume</HomeButton>
                        <HomeButton href='mailto:amrabdelwahed00@gmail.com' target='display'>Contact Me</HomeButton>
                      </ButtonWrapper>
                      
                  </HomeLeftContainer>
                  <HomeRightContainer id="Right">
                    <Img src={HomeImg} alt="Home-image" />
                  </HomeRightContainer>
              </HomeInnerContainer>

          </HomeContainer>
      </div>
  )
}

export default Home