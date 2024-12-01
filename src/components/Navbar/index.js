import React from 'react'
import { Link as ScrollLink } from 'react-scroll';
import { FaBars } from 'react-icons/fa';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Icon } from '@iconify/react';
import styled, { useTheme } from 'styled-components'

const Nav = styled.div`
    background-color: ${({theme}) => theme.bg};
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    @media (max-width: 960px) {
        transtion: 0.8s all ease;
    }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

const NavLogo = styled.a`
    color: white;
    width: 80%;    
    padding: 0 6px;
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    @media (max-width: 640px) {
      padding: 0 0px;
  }
`;

const NavItems = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 48px;
    padding: 0 6px;
    list-style: none;
    font-size: 18px;

    @media screen and (max-width: 768px) {
      display: none;
    }
`;

const NavLink = styled(ScrollLink)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 400;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  width: 80%;  
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavIcon = styled.a`
  
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  color: ${({ theme }) => theme.white};
  background-color: transparent;
  cursor: pointer;
  font-weight: 300;
  text-decoration: none;
  transition: all 0.1s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  @media screen and (max-width: 768px) { 
  font-size: 14px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 24px;
`;

const CollapseIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

const CollapseMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    position: absolute;
    top: 80px;
    right: 0;
    width: 100%;
    padding: 12px 40px 24px 40px;
    background: ${({ theme }) => theme.bg+99};
    transition: all 0.6s ease-in-out;
    transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-100%)')};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    opacity: ${({ open }) => (open ? '100%' : '0')};
    z-index: ${({ open }) => (open ? '1000' : '-1000')};

`;

const CollapseMenuLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  text-align: center;
  width: 100%;
  padding: 10px 0;
  :hover {
    color: ${({ theme }) => theme.primary};
  }
  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  return (
    <Nav>
      <NavContainer>
        <NavLogo></NavLogo>
        <CollapseIcon>
          <FaBars onClick={() => setOpen(!open)} />
        </CollapseIcon>
        <NavItems>
        <NavLink
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={100}
        >
          Home
        </NavLink>
        <NavLink
          to="skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={100}
        >
          Skills
        </NavLink>
        <NavLink
          to="experience"
          spy={true}
          smooth={true}
          offset={-100}
          duration={100}
        >
          Experience
        </NavLink>
        <NavLink
          to="qualifications"
          spy={true}
          smooth={true}
          offset={-100}
          duration={100}
        >
          Qualifications
        </NavLink>
        <NavLink
          to="projects"
          spy={true}
          smooth={true}
          offset={-100}
          duration={100}
        >
          Projects
        </NavLink>
        </NavItems>
        <ButtonContainer>
          <ButtonWrapper>
            <NavIcon
              style={{
                padding: "24px 0px",
                textAlign: "center",
                width: "max-content",
                margin: "0 auto",
                display: 'flex',
                alignItems: 'center',
              }}
              href='https://github.com/amrabdelwahed'
              target='_blank'
            >
                <FaGithub style={{ fontSize: '24px' }} />
            </NavIcon>
            <NavIcon
              style={{
                padding: "24px 0px",
                textAlign: "center",
                width: "max-content",
                margin: "0 auto",
                display: 'flex',
                alignItems: 'center',
              }}
              href='https://www.linkedin.com/in/amrabdelwahed/'
              target='_blank'
            >
              <FaLinkedin style={{ fontSize: '24px' }} />
            </NavIcon>
          </ButtonWrapper>
        </ButtonContainer>
      </NavContainer>
      {
        open && (
          <CollapseMenu open={open}>
            <CollapseMenuLink
              href='#home'
              onClick={() => {
                setOpen(!open);
              }}
            >
              Home
            </CollapseMenuLink>
            <CollapseMenuLink
              href='#skills'
              onClick={() => {
                setOpen(!open);
              }}
            >
              Skills
            </CollapseMenuLink>
            <CollapseMenuLink
            href="#experience"
              onClick={() => {
                setOpen(!open);
              }}
            >
              Experience
            </CollapseMenuLink>
            <CollapseMenuLink
              href='#qualifications'
              onClick={() => {
                setOpen(!open);
              }}
            >
              Qualifications
            </CollapseMenuLink>
            <CollapseMenuLink
              href='#projects'
              onClick={() => {
                setOpen(!open);
              }}
            >
              Projects
            </CollapseMenuLink>
            <NavIcon
              style={{
                padding: "10px 0px",
                textAlign: "center",
                width: "max-content",
                margin: "0 auto",
                display: 'flex',
                alignItems: 'center',
              }}
              href='https://github.com/amrabdelwahed'
              target='_blank'
            >
                <FaGithub style={{ fontSize: '24px' }} />
            </NavIcon>
            <NavIcon
              style={{
                padding: "10px 0px",
                textAlign: "center",
                width: "max-content",
                margin: "0 auto",
                display: 'flex',
                alignItems: 'center',
              }}
              href='https://www.linkedin.com/in/amrabdelwahed/'
              target='_blank'
            >
              <FaLinkedin style={{ fontSize: '24px' }} />
            </NavIcon>
          </CollapseMenu>
      )}
    </Nav>
  );
};

export default Navbar