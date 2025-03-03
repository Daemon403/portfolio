// import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer'; 
import Education from './components/Education';
import Interests from './components/Interests';

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Interests />
      <Contact />
      <Footer />  
    </div>

  )
}