import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from "framer-motion";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Flip from "../utils/Flip";
import FadeIn from '../utils/FadeIn';
// import '../App.css';
import "../index.css";
import "./bigthink.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faFigma, faHtml5, faCss3Alt, faJs, faNode } from "@fortawesome/free-brands-svg-icons";
import umdImg from "../assets/umd-img.jpg";
import myPhoto from "../assets/haha4(github).jpeg";
import Navbar from '../components/Navbar';
import useMediaQuery from '../utils/useMediaQuery';
import useEmblaCarousel from "embla-carousel-react";

function Bigthink() {
  const psRef = useRef(null);
  const psInView = useInView(psRef);

  const bigthinkoldFront = <span className="project-span">My Approach Then</span>
  const bigthinkoldBack =
    <span className="project-description">
      Since this was one of the first projects I made, I was not as well-versed with design and development as I am now, so the website was a very simple static website that informed you about the club.and gave you links to join it. Even so, the experience gave me the opportunity to actually test my skills in the real-world and build something that could be used by people.
      <br />
      <a href="https://keshavgulati.github.io/BigThink-AI/" className="bigthinkold-link" target='__blank'>Go To Site</a>
    </span>

  const bigthinknewFront = <span className="project-span">My Approach Now</span>
  const bigthinknewBack =
    <span className="project-description">
      There are several improvements that could be made to the original design, and I try to do that here. While making this, I realized that making the landing page for an app can be thought of as having a conversation with the consumer- you start with an intro, convey the bulk of the information, and slowly segue into an outro. I took a lot of inspiration for this design from stackoverflow’s landing page.
      <br />
      <a href="https://keshavgulati.github.io/bigthink-new/" className="bigthinknew-link" target='__blank'>Go To Site</a>
    </span>
  
  const isMobile = useMediaQuery("(max-width: 800px)");
  const [emblaRef] = useEmblaCarousel({ loop: false, dragFree: false });
  const cards = 
    [
      { 
        name: "bigthinkold",
        frontChild: bigthinkoldFront,
        backChild: bigthinkoldBack
      },
      {
        name: "bigthinknew",
        frontChild: bigthinknewFront,
        backChild: bigthinknewBack
      }
    ]

  return (
    <div className="main">
      <div className="hero-nav-wrapper">
        <Navbar />
        <FadeIn className="hero-section">
          <p className="hero-text">
            <p className="bigthink-heading">BigTh!nk AI</p>
            <p className="bigthink-description">
                A Machine Learning and Artifical Intelligence club at the University of Maryland, College Park.
            </p>
          </p>
        </FadeIn>
      </div>
      <section className="work-section">
        <div className="work-header header">
          <h2>The Work</h2>
        </div>
        {

          isMobile ?
          
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {cards.map((card, idx) => (
                <div key={idx} className="
                  flex-[0_0_100%] 
                  px-4 py-6 
                  flex justify-center items-center  
                ">
                  <Flip
                    name={card.name}
                    className={card.name}
                    frontChild={card.frontChild}
                    backChild={card.backChild}
                  >                
                  </Flip>
                </div>
              ))}
            </div>
          </div>

          :

          <div className="work-main">
            <Flip
              className="bigthinkold"
              name="bigthinkold"
              frontChild={bigthinkoldFront}
              backChild={bigthinkoldBack}
            >
            </Flip>

            <Flip
              className="bigthinknew"
              name="bigthinknew"
              frontChild={bigthinknewFront}
              backChild={bigthinknewBack}
            >
            </Flip>
          </div>

        }
        
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
      </section>
      <section className="skills-section">
        <div className="skills-header header">
          <h2>What i used</h2>
        </div>
        <FadeIn className="tools-main">
          <ul className="tools-main__ul">
            <li className="tools-main__li">
              REACT
              <ul className="react-list">
                <li>React Router</li>
                <li>Function Components</li>
                <li>Framer Motion</li>
                <li>Basic Hooks- useEffect, useRef</li>
              </ul>
            </li>
            <li className="tools-main__li">NODE</li>
            <li className="tools-main__li">HTML</li>
            <li className="tools-main__li">CSS</li>
          </ul>
        </FadeIn>
      </section>
    </div>

  )

}

export default Bigthink;
