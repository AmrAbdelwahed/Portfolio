import React from 'react';
import { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { motion } from "framer-motion";
import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import HomeImg from '../../images/amr.jpg';

const HomeContainer = styled.div`
  background: ${({ theme }) => theme.Bg};
  position: relative;
  height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
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

// Add ParticlesContainer to ensure particles are visible
const ParticlesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const ButtonWrapper = styled.div`
    
    display: flex;
    gap: 20px;  
`;


const Home = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesConfig = {
    fullScreen: true,
    particles: {
      number: {
        value: 100,  // Increased number of particles
        density: {
          enable: true,
          value_area: 1000
        }
      },
      color: {
        value: "#64ffda"
      },
      links: {
        enable: true,
        color: "#64ffda",
        opacity: 0.4,  // Increased opacity
        width: 1,
        distance: 150  // Increased distance between particles
      },
      move: {
        enable: true,
        speed: 2,  // Increased speed
        direction: "none",
        random: true,
        straight: false,
        outModes: {
          default: "bounce"
        }
      },
      size: {
        value: 2  // Slightly larger particles
      },
      opacity: {
        value: 0.8  // Increased opacity
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab"
        },
        onClick: {
          enable: true,
          mode: "push"
        }
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 1
          }
        },
        push: {
          quantity: 4
        }
      }
    },
    detectRetina: true
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <ParticlesContainer>
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesConfig}
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0
          }}
        />
      </ParticlesContainer>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <HomeContainer>
          <HomeInnerContainer>
            <HomeLeftContainer>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Subtitle>Hello, my name is<br /></Subtitle>
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
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <HomeButton href={Bio.resume} target='display'>View Resume</HomeButton>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <HomeButton href='mailto:amrabdelwahed00@gmail.com' target='display'>Contact Me</HomeButton>
                  </motion.div>
                </ButtonWrapper>
              </motion.div>
            </HomeLeftContainer>
            <HomeRightContainer>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Img src={HomeImg} alt="Home-image" />
              </motion.div>
            </HomeRightContainer>
          </HomeInnerContainer>
        </HomeContainer>
      </motion.div>
    </div>
  );
};

export default Home;