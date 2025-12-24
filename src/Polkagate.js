import { Fade, Grid, Typography } from "@mui/material";
import { initBg } from "./bg.js";
import { useEffect, useRef, useState } from "react";

const texts = [
  'The gateway to the polkadot ecosystem.',
  'Supported by kusama treasury'
]

const Polkagate = () => {
  const bgRef = useRef();

  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true); // controls Fade in/out

  useEffect(() => {
    if (bgRef.current) {
      const cleanup = initBg(bgRef.current);
      return () => cleanup();
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(false); // fade out
      setTimeout(() => {
        setIndex(prev => (prev + 1) % texts.length); // change text
        setShow(true); // fade in
      }, 500); // match Fade timeout
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Grid
      id='polkagate'
      container
      alignItems='center'
      justifyContent="center"
      sx={{ height: window.innerHeight, position: 'relative', overflow: "hidden" }}
    >
      {/* Background canvas */}
      <div
        ref={bgRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      />

      <Grid container justifyContent="center" justifyItems='center' sx={{ position: 'relative' }}>
        <Typography
          variant='h1'
          color="#fff"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            fontWeight: 600,
            fontSize: { xs: '30px', md: '96px' },
            width: '100%'
          }}
        >
          PolkaGate
        </Typography>

        <Fade in={show} timeout={1000} key={index}>
          <Typography
            color="#ffffffb0"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              fontWeight: 200,
              fontSize: { xs: '14px', md: '25px' },
              px: '10px',
              textAlign: 'center',
              width: '100%',
            }}
          >
            {texts[index]}
          </Typography>
        </Fade>
      </Grid>
    </Grid>
  );
}

export default Polkagate;