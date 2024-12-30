import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { FaBars, FaGithub, FaLinkedin } from 'react-icons/fa';
import styled from 'styled-components';

const NavbarContainer = styled(motion.nav)`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  background: ${({ scrolled }) => scrolled ? 'rgba(25, 25, 36, 0.9)' : 'transparent'};
  backdrop-filter: ${({ scrolled }) => scrolled ? 'blur(10px)' : 'none'};
  transition: background-color 0.3s ease, backdrop-filter 0.3s ease;
`;

const Nav = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  color: ${({ theme }) => theme.colors?.primary || '#64ffda'};
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 48px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(ScrollLink)`
  color: ${({ theme }) => theme.colors?.text || '#e6e6e6'};
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors?.primary || '#64ffda'};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors?.text || '#e6e6e6'};
  font-size: 1.5rem;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors?.primary || '#64ffda'};
  }
`;

const MenuButton = styled.button`
  display: none;
  color: ${({ theme }) => theme.colors?.text || '#e6e6e6'};
  font-size: 1.5rem;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors?.primary || '#64ffda'};
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  background: rgba(25, 25, 36, 0.95);
  backdrop-filter: blur(10px);
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const MobileLink = styled.a`
  color: ${({ theme }) => theme.colors?.text || '#e6e6e6'};
  font-size: 1rem;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors?.primary || '#64ffda'};
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = ['skills', 'experience', 'education', 'projects'];

  return (
    <NavbarContainer
      scrolled={scrolled}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Nav>   
      <Logo onClick={scrollToTop} style={{ cursor: 'pointer' }}>
      Back to Top
        </Logo>     
        <NavLinks>
          {navItems.map((item) => (
            <NavLink
              key={item}
              to={item}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </NavLink>
          ))}
        </NavLinks>

        <SocialLinks>
          <SocialLink 
            href="https://github.com/amrabdelwahed" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </SocialLink>
          <SocialLink 
            href="https://www.linkedin.com/in/amrabdelwahed/" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </SocialLink>
        </SocialLinks>

        <MenuButton onClick={() => setIsOpen(!isOpen)}>
          <FaBars />
        </MenuButton>
      </Nav>

      <AnimatePresence>
        {isOpen && (
          <MobileMenu
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {navItems.map((item) => (
              <MobileLink
                key={item}
                href={`#${item}`}
                onClick={() => setIsOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </MobileLink>
            ))}
            <SocialLink 
              href="https://github.com/amrabdelwahed" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </SocialLink>
            <SocialLink 
              href="https://www.linkedin.com/in/amrabdelwahed/" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </SocialLink>
          </MobileMenu>
        )}
      </AnimatePresence>
    </NavbarContainer>
  );
};

export default Navbar;