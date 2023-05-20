import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
import { ThemeProvider } from 'styled-components';
const theme = {
  colors: {
    black: '#212121',
    white: '#fffff',
  },
  radius: {
    sm: '1px',
    md: '2px',
    lg: '3px',
  },
};
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
