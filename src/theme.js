import { createTheme } from '@mui/material/styles';

export function getTheme(mode = 'dark') {
  const isLight = mode === 'light';

  return createTheme({
    palette: {
      mode,
      primary: {
        main: '#e73188',
      },
      background: {
        default: isLight ? '#f4f1ea' : '#050505',
        paper: isLight ? '#fffdf8' : '#111113',
      },
      text: {
        primary: isLight ? '#1b1917' : '#f5f5f4',
        secondary: isLight ? 'rgba(27,25,23,0.72)' : 'rgba(245,245,244,0.72)',
      },
      divider: isLight ? 'rgba(27,25,23,0.12)' : 'rgba(229,231,235,0.15)',
      section: {
        hero: isLight ? '#f7f1ea' : '#050505',
        dark: isLight ? '#efe7de' : '#0f0f0f',
        muted: isLight ? '#e6ddd1' : '#1b1917',
        light: isLight ? '#fffdf8' : '#141416',
        card: isLight ? '#fffaf2' : '#18181b',
        header: isLight ? 'rgba(255,253,248,0.9)' : '#0f0f0f',
      },
    },
    typography: {
      fontFamily: '"DM Sans", system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
      h1: { fontFamily: '"DM Serif Display", serif' },
      h2: { fontFamily: '"DM Serif Display", serif' },
      h3: { fontFamily: '"DM Serif Display", serif' },
      h4: { fontFamily: '"DM Serif Display", serif' },
      h5: { fontFamily: '"DM Serif Display", serif' },
      h6: { fontFamily: '"DM Serif Display", serif' },
      subtitle1: { fontFamily: '"DM Serif Display", serif' },
      subtitle2: { fontFamily: '"DM Serif Display", serif' },
      body1: {
        fontFamily: '"DM Sans", system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
      },
      body2: {
        fontFamily: '"DM Sans", system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
      },
      button: {
        fontFamily: '"DM Sans", system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
        textTransform: 'none',
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: isLight ? '#f4f1ea' : '#050505',
            color: isLight ? '#1b1917' : '#f5f5f4',
          },
        },
      },
    },
  });
}
