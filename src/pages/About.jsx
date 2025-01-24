import React from "react";
import HeroSection from "../components/HeroSection";
import Collapse from "../components/Collapse";
import aboutContent from "../data/aboutContent.json";

const About = () => {
  return (
    <>
      <div className="container">
        <HeroSection class="hero-about" />
        {Object.keys(aboutContent).map((key) => (
          <Collapse key={key} id={key} title={aboutContent[key].title}>
            <p className="answer-collapse">{aboutContent[key].content}</p>
          </Collapse>
        ))}
      </div>
    </>
  );
}

export default About;