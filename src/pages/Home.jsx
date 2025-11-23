import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Flip from "../utils/Flip";
import FadeIn from '../utils/FadeIn';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faFigma, faHtml5, faCss3Alt, faJs, faNode } from "@fortawesome/free-brands-svg-icons";
import umdImg from "../assets/umd-img.jpg";
import Navbar from '../components/Navbar';
import ProjectsSectionDesktop from '../components/ProjectsSectionDesktop.jsx';
import ProjectsSectionMobile from '../components/ProjectsSectionMobile.jsx';
import TypingText from "../components/ui/shadcn-io/typing-text/index.tsx";
import useMediaQuery from '../utils/useMediaQuery.jsx';

function App() {

  const isMobile = useMediaQuery("(max-width: 800px)");
  const heroTextList = isMobile ? ["Designer", "Developer", "Engineer"] : ["Front-End Designer", "Full-Stack Developer", "ML/DL Enthusiast"];

  return (
    <div className="main">
      <div className="hero-nav-wrapper">
        <Navbar />
        <FadeIn className="hero-section">
          <p className="hero-text">
            Hi, I'm Keshav, <br />
            A <span>  </span>
            <TypingText
              text={heroTextList}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              className="text-4l"
              textColors={[]}
              variableSpeed={{ min: 50, max: 120 }}
            />
          </p>
        </FadeIn>
      </div>
      { 
        isMobile ? <ProjectsSectionMobile />
          : <ProjectsSectionDesktop />
      }
      <section className="skills-section">
        <div className="skills-header header">
          <h2>What i work with</h2>
        </div>
        <div className="skills-main">
          <FadeIn className="skills__react">
            <FontAwesomeIcon className='icon' icon={ faReact } />
            <span>React</span>
          </FadeIn>
          <FadeIn className="skills__figma">
            <FontAwesomeIcon className='icon' icon={ faFigma } />
            <span>Figma</span>
          </FadeIn>
          <FadeIn className="skills__html">
            <FontAwesomeIcon className='icon' icon={ faHtml5 } />
            <span>HTML</span>
          </FadeIn>
          <FadeIn className="skills_css">
            <FontAwesomeIcon className='icon' icon={ faCss3Alt } />
            <span>CSS</span>
          </FadeIn>
          <FadeIn className="skills_js">
            <FontAwesomeIcon className='icon' icon={ faJs } />
            <span>Javascript</span>
          </FadeIn>
          <FadeIn className="skills__node">
            <FontAwesomeIcon className='icon' icon={ faNode } />
            <span>Node</span>
          </FadeIn>
        </div>
      </section>
      <section className="education-section">
        <div className="education-header header">
          <h2>education</h2>
        </div>
        <div className="education-main">
          <FadeIn className="education-text-wrapper">
            <h3 className='umdHeading'>University of Maryland, College Park</h3>
            <span className="bsc">Bachelor's of Science</span>
            <p className="education_p">
              Major: Computer Science <br />
              Minor: Statistics <br />
              Graduation: Spring '25
            </p>
          </FadeIn>
          {
            isMobile ? <></>
            :
            <FadeIn>
            <div className="education-img">
              <img src={ umdImg } alt="An image of mckeldin mall at the University of Maryland, College Park." />
            </div>
          </FadeIn>
          }
        </div>
      </section>
      <section className="contact-section">
        <div className="contact-header header">
          <h2>contact</h2>
          <div className="contact-main">
            <FadeIn>
              <span className="email">Email</span> <br />
              <span className="emailValue font-normal text-lg">keshavgulati785@gmail.com</span>
              <br />
              <br />
            </FadeIn>
          </div>
        </div>
      </section>
    </div>

  )

}

export default App
