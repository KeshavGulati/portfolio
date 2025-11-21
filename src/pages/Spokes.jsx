import React from 'react';
import Flip from "../utils/Flip";
import FadeIn from '../utils/FadeIn';
import "../index.css";
import "./spokes.css"
import RingImg from "../assets/RingsImg.png";
import Navbar from '../components/Navbar';

function Spokes() {
  const spokesCardFront = <span className="project-span">In modern astronomy, we have a lot of images of Saturn, thanks to the Cassini spacecraft. With these images, we can get to see a lot of phenomena that take place on the rings of Saturn. One such phenomena that we notice is the presence of dust clouds, which seem to come and go, sometimes individually and sometimes in groups. These are called ‘spokes,’ and there are several theories about how they arise and what their significance is. Professor Hamilton has one such theory, which deals with electromagnetism, meteors, and other factors. He aims to solidify the proof for his theory via empirical means, mainly deep learning.</span>
  const spokesCardBack =
    <span className="project-description">
      Sike! Nothing to see here.
    </span>
  
  return (
    <div className="main">
      <div className="hero-nav-wrapper">
        <Navbar />
        <FadeIn className="hero-section">
          <p className="hero-text">
            <p className="spokes-heading">Research Fellow</p>
            <p className="bigthink-description">
              An Astronomy Research project led by
              <br /> Professor Douglas P. Hamilton
            </p>
          </p>
        </FadeIn>
      </div>
      <section className="work-section">
        <div className="work-header header">
          <h2>The Premise</h2>
        </div>
        <div className="work-main">
          <div className="ringImgDiv">
            <img src={RingImg} alt="An image of Saturn's rings" className='ringsImg' />
          </div>

          <Flip
            className="spokesCard"
            name="spokesCard"
            frontChild={spokesCardFront}
            backChild={spokesCardBack}
          >
          </Flip>

        </div>
      </section>
      <section className="myWorkSection">
        <div className="skills-header header">
          <h2>My Work</h2>
        </div>
        <FadeIn className="tools-main">
        <div className="myWorkText">
          My personal contributions to the project are mainly in the form on Deep Learning tasks. We have access to about 10,000 images of Saturn’s B-ring taken by Cassini, some of which are illuminated while others not as much. These images are projected using some mapping such that the 3 dimensional nature of the observations is better represented and seen in 2 dimensions. In these transformed images, we can clearly see the presence of spokes, which are our objects of interest.
          <br /><br />
          With access to a supercomputer, we are using a U-Net classifier to train and test a model to be able to detect these spokes in all 10,000 images. We also have a human designed algorithm, different from machine learning, that aims to do the same, and we hope to compare the results of both these approaches.
        </div>
        </FadeIn>
      </section>
      <section className="skillsSection">
        <div className="skills-header header">
          <h2>What I Used</h2>
        </div>
        <FadeIn className="tools-main">
        <ul className="tools-main__ul">
            <li className="tools-main__li">Python</li>
            <li className="tools-main__li">Tensorflow</li>
            <li className="tools-main__li">CUDA</li>
            <li className="tools-main__li">Bash Script</li>
          </ul>
        </FadeIn>
      </section>
    </div>

  )

}

export default Spokes;