import React from 'react';
import styled from 'styled-components';
import { Bio } from '../../data/constants';
import HomeImg from '../../images/amr.jpg';

const Hero = styled.section`
  position: relative;
  isolation: isolate;
  min-height: min(820px, 100svh);
  padding: 112px 28px 72px;
  display: grid;
  align-items: center;
  overflow: hidden;
  background: ${({ theme }) => theme.bg};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    background-image: linear-gradient(rgb(100 255 218 / .035) 1px, transparent 1px), linear-gradient(90deg, rgb(100 255 218 / .035) 1px, transparent 1px);
    background-size: 56px 56px;
    mask-image: linear-gradient(to bottom, black, transparent 85%);
  }
  @media (max-width: 720px) { padding: 110px 22px 64px; min-height: auto; }
`;

const Inner = styled.div`
  width: min(1120px, 100%);
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1.25fr) minmax(230px, .75fr);
  align-items: center;
  gap: clamp(36px, 8vw, 112px);
  @media (max-width: 720px) { grid-template-columns: 1fr; gap: 34px; }
`;

const Copy = styled.div`max-width: 680px; order: 1; @media (max-width: 720px) { order: 2; }`;
const Eyebrow = styled.p`
  color: ${({ theme }) => theme.primary};
  font: 600 13px/1.4 'Courier New', monospace;
  letter-spacing: .12em;
  text-transform: uppercase;
  margin: 0 0 24px;
  display: flex; align-items: center; gap: 12px;
  &::before { content: ''; width: 28px; height: 1px; background: currentColor; }
`;
const Title = styled.h1`
  color: ${({ theme }) => theme.text_primary};
  font-size: clamp(48px, 7vw, 82px);
  letter-spacing: -.065em;
  line-height: .98;
  font-weight: 700;
  margin: 0;
  span { color: ${({ theme }) => theme.primary}; }
  @media (max-width: 420px) { font-size: 44px; }
`;
const Role = styled.p`
  margin: 24px 0 0;
  color: ${({ theme }) => theme.text_primary};
  font-size: clamp(19px, 2.4vw, 25px);
  line-height: 1.5;
  font-weight: 500;
  span { color: ${({ theme }) => theme.text_secondary}; font-weight: 400; }
`;
const Intro = styled.p`
  max-width: 58ch;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 16px;
  line-height: 1.8;
  margin: 18px 0 0;
`;
const Actions = styled.div`display: flex; flex-wrap: wrap; gap: 12px; margin-top: 30px;`;
const Action = styled.a`
  min-height: 48px;
  padding: 0 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ primary, theme }) => primary ? theme.primary : 'rgb(230 238 235 / .22)'};
  background: ${({ primary }) => primary ? 'rgb(100 255 218 / .08)' : 'transparent'};
  color: ${({ primary, theme }) => primary ? theme.primary : theme.text_primary};
  font-weight: 600;
  text-decoration: none;
  transition: background-color .18s ease, border-color .18s ease, transform .18s ease;
  &:hover { background: rgb(100 255 218 / .12); border-color: ${({ theme }) => theme.primary}; transform: translateY(-2px); }
  &:focus-visible { outline: 2px solid ${({ theme }) => theme.primary}; outline-offset: 4px; }
  @media (prefers-reduced-motion: reduce) { transition: none; &:hover { transform: none; } }
`;
const PortraitWrap = styled.div`
  width: min(100%, 320px);
  justify-self: end;
  position: relative;
  order: 2;
  &::before { content: ''; position: absolute; inset: 18px -18px -18px 18px; border: 1px solid rgb(100 255 218 / .55); z-index: -1; }
  @media (max-width: 720px) { width: min(220px, 65vw); justify-self: start; margin-left: 12px; order: 1; }
`;
const Portrait = styled.img`
  display: block; width: 100%; aspect-ratio: 1; object-fit: cover; object-position: center 35%;
  filter: saturate(.78); border: 1px solid rgb(100 255 218 / .24);
`;

const Home = () => (
  <Hero id="home" aria-labelledby="hero-title">
    <Inner>
      <Copy>
        <Eyebrow>Software · Data · Applied AI</Eyebrow>
        <Title id="hero-title">Hello, I’m<br /><span>{Bio.name}</span></Title>
        <Role>Engineer building reliable software<br /><span>and useful data products.</span></Role>
        <Intro>I’m a software and data engineer focused on turning complex problems into thoughtful, dependable products—from full-stack applications to machine learning systems.</Intro>
        <Actions>
          <Action primary href={Bio.resume} target="_blank" rel="noopener noreferrer">View résumé <span aria-hidden="true">↗</span></Action>
          <Action href={`mailto:${Bio.email || 'amrabdelwahed00@gmail.com'}`}>Get in touch <span aria-hidden="true">↗</span></Action>
        </Actions>
      </Copy>
      <PortraitWrap><Portrait src={HomeImg} alt="Amr Abdelwahed" /></PortraitWrap>
    </Inner>
  </Hero>
);

export default Home;
