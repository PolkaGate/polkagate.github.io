import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    // default body font
    fontFamily: '"DM Sans", system-ui, -apple-system, BlinkMacSystemFont, sans-serif',

    // titles
    h1: {
      fontFamily: '"DM Serif Display", serif',
    },
    h2: {
      fontFamily: '"DM Serif Display", serif',
    },
    h3: {
      fontFamily: '"DM Serif Display", serif',
    },
    h4: {
      fontFamily: '"DM Serif Display", serif',
    },
    h5: {
      fontFamily: '"DM Serif Display", serif',
    },
    h6: {
      fontFamily: '"DM Serif Display", serif',
    },

    // optional: subtitles still serif
    subtitle1: {
      fontFamily: '"DM Serif Display", serif',
    },
    subtitle2: {
      fontFamily: '"DM Serif Display", serif',
    },

    // body text (explicit, optional)
    body1: {
      fontFamily: '"DM Sans", system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
    },
    body2: {
      fontFamily: '"DM Sans", system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
    },

    button: {
      fontFamily: '"DM Sans", system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
      textTransform: 'none', // optional, Polkadot style
    },
  },
});

export default theme;