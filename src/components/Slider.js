// Copyright 2019-2023 @polkadot/extension-polkagate authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Grid, Stack } from '@mui/material';
import { useTheme } from "@mui/material/styles";

const defaultImages = [
  "images/pg/1.png",
  "images/pg/2.png",
  "images/pg/3.png",
  "images/pg/4.png",
  "images/pg/5.png"
];

export default function ImageSlider({
  images = defaultImages,
  altPrefix = 'slide',
  aspectRatio = '16 / 10',
  transitionVariant = 'slide',
  imageFit = 'contain',
  imagePosition = 'center',
  imageScale = 1,
}) {
  const theme = useTheme();
  const controlBaseColor = theme.palette.mode === 'light'
    ? 'rgba(27,25,23,0.08)'
    : 'rgba(255,255,255,0.12)';
  const controlHoverColor = theme.palette.mode === 'light'
    ? 'rgba(231,49,136,0.16)'
    : 'rgba(231,49,136,0.22)';
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  const motionProps = transitionVariant === 'fade'
    ? {
        initial: { opacity: 0, scale: 0.985 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 1.015 },
        transition: { duration: 0.45, ease: 'easeInOut' },
      }
    : transitionVariant === 'lift'
      ? {
          initial: { opacity: 0, y: 18, scale: 1.03 },
          animate: { opacity: 1, y: 0, scale: 1 },
          exit: { opacity: 0, y: -14, scale: 1.02 },
          transition: { duration: 0.5, ease: 'easeInOut' },
        }
      : {
        initial: { opacity: 0, x: 50 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -50 },
        transition: { duration: 0.4 },
      };

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Stack spacing={2} alignItems="center" sx={{ maxWidth: 700, width: '100%', position: 'relative' }}>
        <div
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio,
            overflow: 'hidden',
            borderRadius: 36,
            backgroundColor: theme.palette.mode === 'light' ? '#f1ebe4' : '#101012',
            border: theme.palette.mode === 'light'
              ? '1px solid rgba(27,25,23,0.12)'
              : '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={images[current]}
              alt={`${altPrefix}-${current}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: imageFit,
                objectPosition: imagePosition,
                transform: `scale(${imageScale})`,
                borderRadius: 36,
                display: 'block',
                margin: '0 auto',
                backgroundColor: theme.palette.mode === 'light' ? '#f1ebe4' : '#101012',
                opacity: 1,
              }}
              {...motionProps}
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
              backgroundColor: controlBaseColor,
              color: theme.palette.text.primary,
              borderRadius: '50%',
              padding: 8,
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = controlHoverColor}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = controlBaseColor}
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
              backgroundColor: controlBaseColor,
              color: theme.palette.text.primary,
              borderRadius: '50%',
              padding: 8,
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = controlHoverColor}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = controlBaseColor}
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
                  backgroundColor: current === idx ? theme.palette.primary.main : theme.palette.mode === 'light' ? '#b7aea4' : '#666666',
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
