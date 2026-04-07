import { Box, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { AnimatePresence, motion } from "framer-motion";
import { initBg } from "./bg.js";
import { useEffect, useRef, useState } from "react";

const texts = [
  'The gateway to the Polkadot ecosystem',
  'Supported by Kusama Treasury'
]

const Polkagate = () => {
  const theme = useTheme();
  const bgRef = useRef();

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (bgRef.current) {
      const cleanup = initBg(bgRef.current, theme.palette.mode);
      return () => cleanup();
    }
  }, [theme.palette.mode]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % texts.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Grid
      id='polkagate'
      container
      alignItems='center'
      justifyContent="center"
      sx={{ height: window.innerHeight, position: 'relative', overflow: "hidden", backgroundColor: theme.palette.section.hero }}
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
          color={theme.palette.text.primary}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            fontWeight: 600,
            fontSize: { xs: '30px', md: '96px' },
            width: '100%',
            letterSpacing: { xs: '-0.02em', md: '-0.035em' },
            lineHeight: 0.95,
          }}
        >
          PolkaGate
        </Typography>

        <Box
          sx={{
            position: 'relative',
            width: '100%',
            minHeight: { xs: 30, md: 46 },
            mt: { xs: 1.25, md: 2 },
            overflow: 'hidden',
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -12, filter: 'blur(8px)' }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography
                color={theme.palette.text.secondary}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  fontWeight: 400,
                  fontSize: { xs: '14px', md: '22px' },
                  px: '10px',
                  textAlign: 'center',
                  width: '100%',
                  letterSpacing: '0.01em',
                  lineHeight: 1.2,
                  textShadow: theme.palette.mode === 'dark'
                    ? '0 0 18px rgba(0,0,0,0.35)'
                    : '0 0 14px rgba(255,255,255,0.18)',
                }}
              >
                {texts[index]}
              </Typography>
            </motion.div>
          </AnimatePresence>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Polkagate;
