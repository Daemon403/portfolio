// import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import GithubCalenderSection from './components/GithubCalenderSection';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer'; 
import Education from './components/Education';
import Interests from './components/Interests';
import Experience from './components/Experience';
import GithubOverview from './components/GithubOverview';
import SendMail from './components/EmailTest';
import  SocialLinks from './components/Socials';
export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <GithubCalenderSection username={"daemon403"}/>
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Interests />
      <GithubOverview />
      <Contact />
      <SendMail />
      <SocialLinks />
      <Footer />  
    </div>

  )
}