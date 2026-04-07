import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import smoothScrollPolyfill from 'smoothscroll-polyfill';
import App from './App';
import { getTheme } from './theme';
import { ColorModeContext } from './colorMode';
import './index.css';

smoothScrollPolyfill.polyfill();

function Root() {
  const [mode, setMode] = React.useState(() => localStorage.getItem('polkagate-color-mode') || 'dark');

  const colorMode = React.useMemo(() => ({
    mode,
    toggleColorMode: () => {
      setMode((prevMode) => {
        const nextMode = prevMode === 'dark' ? 'light' : 'dark';
        localStorage.setItem('polkagate-color-mode', nextMode);
        return nextMode;
      });
    },
  }), [mode]);

  const theme = React.useMemo(() => getTheme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
