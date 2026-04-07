import React from 'react';

export const ColorModeContext = React.createContext({
  mode: 'dark',
  toggleColorMode: () => {},
});

export function useColorMode() {
  return React.useContext(ColorModeContext);
}
