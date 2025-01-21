import React from "react";
import Grid from "../components/grid.jsx";
import HeroSection from "../components/heroSection.jsx";

function Home() {
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
