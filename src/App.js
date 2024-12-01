import './App.css';
import styled, { ThemeProvider } from 'styled-components'
import { darkTheme } from './utils/Themes.js';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Education from './components/Education';
import { BrowserRouter as Router } from 'react-router-dom';
import Projects from './components/Projects';
import Experience from './components/Experience';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Navbar />
        <Body>
          <Home />
            <Skills />
            <Experience />
            <Education />
            <Projects />
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
