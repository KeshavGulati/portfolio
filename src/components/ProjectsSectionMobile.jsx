import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Flip from "../utils/Flip";
import useEmblaCarousel from "embla-carousel-react";
import "../index.css";

const ProjectsSectionMobile = () => {

  const ardourFront = <span className="project-span">RESEARCH PROJECT</span>
  const ardourBack =
    <span className="project-description" style={{ fontSize: "0.9rem" }}>
      I am a part of a project under Dr. Douglas P. Hamilton, a professor of Astronomy at the University of Maryland. We have been using Deep Learning methodologies to analyze dust clouds found over the B-ring of Saturn. <br />
      <Link to={"/spokes"} className='spokesLink'>Read More</Link>
    </span>

  const testudoFront = <span className="project-span">GAME THEORY</span>
  const testudoBack =
    <span className="project-description" style={{ fontSize: "0.9rem" }}>
      I worked on a personal project where I replicated a very famous tournament in game theory called 'Axelrod's Tournament' to demonstrate the effectiveness of different strategies in an iterated prisoner's dilemma.{" "}
      <a href="https://github.com/KeshavGulati/Mini-Axelrod-Tournament" target='__blank' className="gameTheoryLink">Read More</a>
    </span>

  const nexusFront = <span className="project-span">NEXUS</span>
  const nexusBack =
    <span className="project-description">
      Nexus is a very big and ambitious project that I am a part of with a team. I am personally responsible for designing and developing large parts of an online IDE with features such as live collab and AI integration that set it apart. It took a lot of work to bring this project to life, and we are continuing to improve it to better suit our niche. It can be viewed at{" "}
      <a href="https://nexusdevops.com/" className="nexus-link" target='__blank'>nexusdevops.com</a>.
      <br />
    </span>

  const bigthinkFront = <span className="project-span">BIGTHINK AI</span>
  const bigthinkBack =
    <span className="project-description" style={{ fontSize: "0.9rem" }}>
      This was one of the first projects I ever worked on, and I had to interact with different people on the team, which gave me my first professional experience. <br />
      <Link to="/bigthink" className='bigthink-link'>More Info</Link>
    </span>

  const cards = [
    { name: "nexus", frontChild: nexusFront, backChild: nexusBack },
    { name: "ardour", frontChild: ardourFront, backChild: ardourBack },
    { name: "testudo", frontChild: testudoFront, backChild: testudoBack },
    { name: "bigthink", frontChild: bigthinkFront, backChild: bigthinkBack }
  ];

  // --- Embla setup ---
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  return (
    <section className="projects-section">
      <div className="projects-header header">
        <h2>Projects</h2>
      </div>

      {/* --- Carousel wrapper --- */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="flex-[0_0_100%] px-4 py-6 flex justify-center items-center"
            >
              <Flip
                name={card.name}
                frontChild={card.frontChild}
                backChild={card.backChild}
              />
            </div>
          ))}
        </div>
      </div>

      {/* --- Dots indicator --- */}
      <div className="flex justify-center mt-4 gap-2">
        {scrollSnaps.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi && emblaApi.scrollTo(i)}
            className={`
              w-3 h-3 rounded-full transition-all duration-300
              ${i === selectedIndex ? "bg-[#888]" : "bg-gray-300"}
            `}
          />
        ))}
      </div>

      <span className="ps text-center">P.S: Click the boxes for more info, and swipe for more</span>
    </section>
  );
};

export default ProjectsSectionMobile;
