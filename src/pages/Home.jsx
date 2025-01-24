import React from "react";
import Grid from "../components/Grid.jsx";
import HeroSection from "../components/HeroSection.jsx";

const Home = () => {
  return (
    <>
      <HeroSection class="hero-home">
        <div className="hero-home-container">
          <h1 className="hero-home-heading">Chez vous, partout et ailleurs</h1>
        </div>
      </HeroSection>
      <Grid />
    </>
  );
}

export default Home;
