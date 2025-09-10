import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useThemeStore } from "./store/themeStore";

// Layout Components
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import SplashCursor from './components/Layout/cursor'

// Section Components
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Education from './components/sections/Education';
import Achievements from './components/sections/Achievements';
import Contact from './components/sections/Contact';

function App() {

  const { isDark } = useThemeStore();

  useEffect(() => {
    // Apply theme to html element for consistent styling
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    // Smooth scrolling for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-300 ${
        isDark ? 'bg-gray-900' : 'bg-white'
      }`}>
        <Header />
        <SplashCursor />

        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Achievements />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;