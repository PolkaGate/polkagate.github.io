// Copyright 2019-2023 @polkadot/extension-polkagate authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Grid, Stack } from '@mui/material';

// Put your Chrome Store image URLs here
const images = [
  "images/pg/1.png",
  "images/pg/2.png",
  "images/pg/3.png",
  "images/pg/4.png",
  "images/pg/5.png"
];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Add automatic slide change every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000); // 3000ms = 3 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Stack spacing={2} alignItems="center" sx={{ maxWidth: 700, width: '100%', position: 'relative' }}>
        <div style={{ position: 'relative', width: '110%', height: 500, overflow: 'hidden'}}>
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={images[current]}
              alt={`slide-${current}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                borderRadius: 16,
                display: 'block',
                margin: '0 auto',
              }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
            />
          </AnimatePresence>
          {/* Controls overlay */}
          <ChevronLeft
            onClick={prevSlide}
            style={{
              cursor: 'pointer',
              fontSize: 32,
              position: 'absolute',
              top: '50%',
              left: 0,
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(255,255,255,0.16)',
              borderRadius: '50%',
              padding: 8,
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.9)'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.5)'}
          />
          <ChevronRight
            onClick={nextSlide}
            style={{
              cursor: 'pointer',
              fontSize: 32,
              position: 'absolute',
              top: '50%',
              right: 0,
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(255,255,255,0.16)',
              borderRadius: '50%',
              padding: 8,
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.9)'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.5)'}
          />

          {/* Dot indicators positioned near bottom */}
          <div style={{
            position: 'absolute',
            bottom: 8,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 8,
          }}>
            {images.map((_, idx) => (
              <div
                key={idx}
                onClick={() => setCurrent(idx)}
                style={{
                  height: 12,
                  width: 12,
                  borderRadius: '50%',
                  backgroundColor: current === idx ? '#ffffff' : '#888888',
                  cursor: 'pointer',
                }}
              />
            ))}
          </div>
        </div>
      </Stack>
    </Grid>
  );
}