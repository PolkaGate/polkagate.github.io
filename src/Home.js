
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Box, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Features from "./Features";
import Team from "./Team";
import Footer from "./Footer";
import Header from "./Header";
import Pools from "./Pools";
import Extension from "./Extension";
import Polkagate from "./Polkagate";
import Snap from "./Snap";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import options from './particles/images'

const OVERLAY_DISTANCE = 160;

function OverlaySection({ children, isActive, dimAmount = 0, zIndex, wrapperRef, sentinelRef, disableOverlay = false, theme }) {
  const contentRef = useRef(null);
  const [contentMetrics, setContentMetrics] = useState({ height: 0, left: 0, width: 0, isDesktop: false });

  useEffect(() => {
    const updateMetrics = () => {
      const wrapperEl = wrapperRef.current;
      const contentEl = contentRef.current;

      if (!wrapperEl || !contentEl) {
        return;
      }

      const wrapperRect = wrapperEl.getBoundingClientRect();
      const contentRect = contentEl.getBoundingClientRect();

      setContentMetrics({
        height: contentEl.offsetHeight,
        left: wrapperRect.left,
        width: wrapperRect.width,
        isDesktop: window.innerWidth >= 900,
      });

      if (contentRect.height !== contentEl.offsetHeight) {
        setContentMetrics((prev) => ({
          ...prev,
          height: Math.max(contentEl.offsetHeight, contentRect.height),
        }));
      }
    };

    updateMetrics();

    const resizeObserver = new ResizeObserver(() => updateMetrics());
    if (wrapperRef.current) {
      resizeObserver.observe(wrapperRef.current);
    }
    if (contentRef.current) {
      resizeObserver.observe(contentRef.current);
    }

    window.addEventListener('resize', updateMetrics);
    window.addEventListener('scroll', updateMetrics, { passive: true });

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateMetrics);
      window.removeEventListener('scroll', updateMetrics);
    };
  }, [wrapperRef]);

  const desktopActive = contentMetrics.isDesktop && isActive && !disableOverlay;
  const desktopOverlayEnabled = contentMetrics.isDesktop && !disableOverlay;
  const clampedDim = Math.max(0, Math.min(1, dimAmount));
  const dimFilter = clampedDim > 0
    ? `brightness(${1 - clampedDim * 0.38}) saturate(${1 - clampedDim * 0.16})`
    : 'none';
  const dimOpacity = 1 - clampedDim * 0.16;
  const overlayAlpha = theme.palette.mode === 'light'
    ? 0.18 * clampedDim
    : 0.28 * clampedDim;

  return (
    <Box
      ref={wrapperRef}
      sx={{
        width: '100%',
        position: 'relative',
        zIndex,
        minHeight: desktopOverlayEnabled ? `${contentMetrics.height + OVERLAY_DISTANCE}px` : 'auto',
        pb: desktopOverlayEnabled ? `${OVERLAY_DISTANCE}px` : 0,
        marginTop: '-1px'
      }}
    >
      <Box
        sx={{
          width: '100%',
          minHeight: desktopOverlayEnabled ? `${contentMetrics.height}px` : 'auto',
          position: 'relative',
        }}
      >
        <Box
          ref={contentRef}
          sx={{
            width: '100%',
            position: desktopActive ? 'fixed' : 'relative',
            top: 'auto',
            bottom: desktopActive ? '0px' : 'auto',
            left: desktopActive ? `${contentMetrics.left}px` : 'auto',
            zIndex,
            overflow: 'hidden',
            ...(desktopActive
              ? {
                  width: `${contentMetrics.width}px`,
                }
              : {}),
            filter: dimFilter,
            opacity: dimOpacity,
            transition: 'filter 160ms linear, opacity 160ms linear',
            '&::after': clampedDim > 0
              ? {
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  pointerEvents: 'none',
                  background: theme.palette.mode === 'light'
                    ? `rgba(27,25,23,${overlayAlpha})`
                    : `rgba(0,0,0,${overlayAlpha})`,
                }
              : {},
          }}
        >
          {children}
        </Box>
      </Box>
      <Box ref={sentinelRef} sx={{ width: '100%', height: '1px' }} />
    </Box>
  );
}

const Home = () => {
  const theme = useTheme();
  const sectionRefs = useMemo(() => Array.from({ length: 6 }, () => React.createRef()), []);
  const sentinelRefs = useMemo(() => Array.from({ length: 6 }, () => React.createRef()), []);
  const overlayEnabled = useMemo(() => [false, true, true, false, false, false], []);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [dimLevels, setDimLevels] = useState(() => Array(6).fill(0));

  const particlesInit = useCallback(async engine => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    !!container && await console.log('particlesLoaded');
  }, []);

  useEffect(() => {
    const updateActiveSection = () => {
      if (window.innerWidth < 900) {
        setActiveIndex(-1);
        setDimLevels(Array(6).fill(0));
        return;
      }

      const viewportHeight = window.innerHeight;
      const scrollTop = window.scrollY;
      let nextActive = -1;
      const nextDimLevels = Array(6).fill(0);

      for (let i = 0; i < sectionRefs.length; i++) {
        if (!overlayEnabled[i]) {
          continue;
        }

        const wrapper = sectionRefs[i].current;

        if (!wrapper) {
          continue;
        }

        const wrapperTop = wrapper.getBoundingClientRect().top + scrollTop;
        const contentHeight = wrapper.firstElementChild?.offsetHeight || wrapper.offsetHeight;
        const triggerY = wrapperTop + contentHeight - viewportHeight;

        if (scrollTop >= triggerY && wrapperTop <= scrollTop) {
          nextActive = i;
        }
      }

      for (let i = 0; i < sectionRefs.length - 1; i++) {
        if (!overlayEnabled[i]) {
          continue;
        }

        const nextWrapper = sectionRefs[i + 1].current;

        if (!nextWrapper) {
          continue;
        }

        const nextTop = nextWrapper.getBoundingClientRect().top;
        const progress = (viewportHeight - nextTop) / Math.min(viewportHeight * 0.72, 520);
        nextDimLevels[i] = Math.max(0, Math.min(1, progress));
      }

      setActiveIndex(nextActive);
      setDimLevels(nextDimLevels);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, [overlayEnabled, sectionRefs, sentinelRefs]);

  return (
    <Grid
      container
      justifyContent='center'
      sx={{
        position: 'relative',
        m: 0,
        p: 0,
        bgcolor: theme.palette.section.hero,
      }}
    >
      <Particles
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
      />
      <Header />
      <Polkagate />
      <OverlaySection
        wrapperRef={sectionRefs[0]}
        sentinelRef={sentinelRefs[0]}
        isActive={activeIndex === 0}
        dimAmount={dimLevels[0]}
        zIndex={2}
        disableOverlay={!overlayEnabled[0]}
        theme={theme}
      >
        <Features />
      </OverlaySection>
      <OverlaySection
        wrapperRef={sectionRefs[1]}
        sentinelRef={sentinelRefs[1]}
        isActive={activeIndex === 1}
        dimAmount={dimLevels[1]}
        zIndex={3}
        disableOverlay={!overlayEnabled[1]}
        theme={theme}
      >
        <Extension />
      </OverlaySection>
      <OverlaySection
        wrapperRef={sectionRefs[2]}
        sentinelRef={sentinelRefs[2]}
        isActive={activeIndex === 2}
        dimAmount={dimLevels[2]}
        zIndex={4}
        disableOverlay={!overlayEnabled[2]}
        theme={theme}
      >
        <Snap />
      </OverlaySection>
      <OverlaySection
        wrapperRef={sectionRefs[3]}
        sentinelRef={sentinelRefs[3]}
        isActive={activeIndex === 3}
        dimAmount={dimLevels[3]}
        zIndex={5}
        disableOverlay={!overlayEnabled[3]}
        theme={theme}
      >
        <Pools />
      </OverlaySection>
      <OverlaySection
        wrapperRef={sectionRefs[4]}
        sentinelRef={sentinelRefs[4]}
        isActive={activeIndex === 4}
        dimAmount={dimLevels[4]}
        zIndex={6}
        disableOverlay={!overlayEnabled[4]}
        theme={theme}
      >
        <Team />
      </OverlaySection>
      <OverlaySection
        wrapperRef={sectionRefs[5]}
        sentinelRef={sentinelRefs[5]}
        isActive={activeIndex === 5}
        dimAmount={0}
        zIndex={7}
        disableOverlay={!overlayEnabled[5]}
        theme={theme}
      >
        <Footer />
      </OverlaySection>
    </Grid>
  );
}

export default Home;
