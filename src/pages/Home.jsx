import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Flip from "../utils/Flip";
import FadeIn from '../utils/FadeIn';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faFigma, faHtml5, faCss3Alt, faJs, faNode } from "@fortawesome/free-brands-svg-icons";
import umdImg from "../assets/umd-img.jpg";
import myPhoto from "../assets/haha(5).jpg";

function App() {
  const psRef = useRef(null);
  const psInView = useInView(psRef);
  
  const ardourFront = <span className="project-span">ARDOUR</span>
  const ardourBack =
    <span className="project-description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolor, possimus commodi ab impedit vel facilis. Et earum soluta veniam.
    </span>
  
  const testudoFront = <span className="project-span">TESTUDO</span>
  const testudoBack =
    <span className="project-description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dolor, possimus commodi ab impedit vel facilis. Et earum soluta veniam.
    </span>

  const nexusFront = <span className="project-span">NEXUS</span>
  const nexusBack = 
    <span className="project-description">
      Nexus is a very big and ambitious project that I am a part of with a team. I am personally responsible for designing and developing large parts of an online IDE with features such as live collab and AI integration that set it apart. It took a lot of work to bring this project to life, and we are continuing to improve it to better suit our niche. It can be viewed at 
          <a href="https://nexusdevops.com/" className="nexus-link" target='__blank'> nexusdevops.com</a>.
       <br />
    </span>

  const bigthinkFront = <span className="project-span">BIGTHINK AI</span>
  const bigthinkBack =
    <span className="project-description">
      This was one of the first projects I ever worked on, and I had to interact with different people on the team, which gave me my first professional experience. <br />
      <Link to="/bigthink" className='bigthink-link'>More Info</Link>
    </span>

  return (
    <div className="main">
      <div className="hero-nav-wrapper">
        <nav className="nav">
          <div className="img-div">
            <a href="https://www.linkedin.com/in/keshav-gulati/" target='__blank'>
              <img className='myPhoto' src={ myPhoto } alt="" />
            </a>
          </div>
        </nav>
        <FadeIn className="hero-section">
          <p className="hero-text">
            Hi, I'm Keshav <br />
            A frontend designer and developer
          </p>
        </FadeIn>
      </div>
      <section className="projects-section">
        <div className="projects-header header">
          <h2>Projects</h2>
        </div>
        <div className="projects-main">
          {/* <Flip
            name="ardour"
            frontChild={ardourFront}
            backChild={ardourBack}
          >
          </Flip> */}

          {/* <Flip
            name="testudo"
            frontChild={testudoFront}
            backChild={testudoBack}
          >
          </Flip> */}
          
            <Flip
              name="nexus"
              frontChild={nexusFront}
              backChild={nexusBack}
            ></Flip>

          <Flip
            name="bigthink"
            frontChild={bigthinkFront}
            backChild={bigthinkBack}
          >
          </Flip>
        </div>
          {/* <motion.span
            className="ps"
            initial={{
              opacity: 0,
              y: "50%",
              x: "-50%"
          }}
          animate={
              psInView? {opacity: 1, y: "0"}: {}}
          transition={{
              duration: 0.6,
              ease: "easeInOut",
              delay: 2
          }}
          ref={psRef}
          >
            P.S: Hover over the boxes for more info
          </motion.span> */}
          <span className="ps">P.S: Hover over the boxes for more info</span>
      </section>
      <section className="skills-section">
        <div className="skills-header header">
          <h2>What i work with</h2>
        </div>
        <div className="skills-main">
          <FadeIn className="skills__react">
            {/* <i className="fa-brands fa-react"></i> */}
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
            <h3>University of Maryland, College Park</h3>
            <span className="bsc">Bachelor's of Science</span>
            <p className="education_p">
              Major: Computer Science <br />
              Minor: Statistics <br />
              Graduation: Spring '25
            </p>
          </FadeIn>
          <FadeIn>
            <div className="education-img">
              <img src={ umdImg } alt="An image of mckeldin mall at the University of Maryland, College Park." />
            </div>
          </FadeIn>
        </div>
      </section>
      <section className="contact-section">
        <div className="contact-header header">
          <h2>contact</h2>
          <div className="contact-main">
            <FadeIn>
              <span className="email">Email</span> <br />
              keshavgulati785@gmail.com
              <br />
              <br />
              <span className="mobile">Mobile</span> <br />
              +1 (240) 886 8955
            </FadeIn>
          </div>
        </div>
      </section>
    </div>

  )

}

export default App
