import React from 'react';
import { Link } from 'react-router-dom';
import Flip from "../utils/Flip";

const ProjectsSectionDesktop = () => {
  
  const ardourFront = <span className="project-span">RESEARCH PROJECT</span>
  const ardourBack =
    <span className="project-description"
    style={{fontSize: "0.9rem"}}
    >
      I am a part of a project under Dr. Douglas P. Hamilton, a professor of Astronomy at the University of Maryland. We have been using Deep Learning methodologies to analyze dust clouds found over the B-ring of Saturn. <br />
      <Link to={"/spokes"} className='spokesLink'>Read More</Link>

    </span>
  
  const testudoFront = <span className="project-span">GAME THEORY</span>
  const testudoBack =
    <span className="project-description"
      style={{fontSize: "0.9rem"}}
    >
      I worked on a  personal project where I replicated a very famous tournament in game theory called 'Axelrod's Tournament' to demonstrate the effectiveness of different strategies in an iterated prisoner's dilemma. <span> </span>
      <a href="https://github.com/KeshavGulati/Mini-Axelrod-Tournament" target='__blank' className="gameTheoryLink">Read More</a>
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
    <span className="project-description"
    style={{fontSize: "0.9rem"}}
    >
      This was one of the first projects I ever worked on, and I had to interact with different people on the team, which gave me my first professional experience. <br />
      <Link to="/bigthink" className='bigthink-link'>More Info</Link>
    </span>
  
  return (
    <section className="projects-section">
      <div className="projects-header header">
        <h2>Projects</h2>
      </div>
      <div className="projects-main">
        <Flip
          name="ardour"
          frontChild={ardourFront}
          backChild={ardourBack}
        >
        </Flip>

        <Flip
          name="testudo"
          frontChild={testudoFront}
          backChild={testudoBack}
        >
        </Flip>
        
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
      <span className="ps">P.S: Click the boxes for more info</span>
    </section>

  )
}

export default ProjectsSectionDesktop