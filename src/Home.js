
import React from "react";
import { Grid } from "@mui/material";

import Features from "./Features";
import Team from "./Team";
import Footer from "./Footer";
import Header from "./Header";
import Pools from "./Pools";
import Extension from "./Extension";
import Polkagate from "./Polkagate";
import Snap from "./Snap";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import options from './particles/images'

const Home = () => {

  const particlesInit = useCallback(async engine => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    !!container && await console.log('particlesLoaded');
  }, []);

  return (
    <Grid container justifyContent='center' sx={{ position: 'relative', m: 0, p: 0 }}>
      <Particles
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
      />
      <Header />
      <Polkagate />
      <Features />
      <Extension />
      <Snap />
      <Pools />
      <Team />
      <Footer />
    </Grid>
  );
}

export default Home;
