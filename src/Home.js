
import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";

import Features from "./Features";
import Team from "./Team";
import Footer from "./Footer";
import Header from "./Header";
import Plus from "./Plus";
import Pools from "./Pools";
import Pg from "./Pg";
import { web3Accounts, web3Enable, web3FromAddress } from '@polkadot/extension-dapp';

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import options from './particles/images'

const Home = () => {
  // const [injected, setInjected] = useState();
  // const [accounts, setAccounts] = useState();

  // useEffect(() => {
  //   web3Enable('PolkaGate dapp').then((allInjected) => {
  //     console.log('allInjected:', allInjected)
  //     setInjected(allInjected)
  //   });
  // }, []);

  // useEffect(() => {
  //   injected?.length && web3Accounts().then((acc) => {
  //     console.log('acc:', acc)
  //     setAccounts(acc)
  //   });
  // }, [injected]);


  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

  return (
    <Grid container sx={{ position: 'relative', m: 0, p: 0 }}>
      <Particles
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
      />
      <Header />
      <Pg />
      <Features />
      <Pools />
      <Team />
      <Footer />
    </Grid>
  );
}

export default Home;
