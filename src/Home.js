
import React, { useEffect, useState } from "react";
import Features from "./Features";
import Team from "./Team";
import Footer from "./Footer";
import Header from "./Header";
import Plus from "./Plus";
import Pools from "./Pools";
import Pg from "./Pg";
import { web3Accounts, web3Enable, web3FromAddress } from '@polkadot/extension-dapp';

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

  return (
    <>
      <Header />
      <Pg />
      <Features />
      {/* <Plus /> */}
      <Pools />
      <Team />
      <Footer />
    </>
  );
}

export default Home;
