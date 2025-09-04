import * as React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: `'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif`,
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route render={() => <Navigate to="/" />} />
      </Routes>
    </ThemeProvider>
  );
};