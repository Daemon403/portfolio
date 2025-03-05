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
import Experience from './components/Experience';
import GithubOverview from './components/GithubOverview';

export default function App() {
  return (
    <div>
      <Navbar />
      <GithubOverview />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Interests />
      <Contact />
      <Footer />  
    </div>

  )
}