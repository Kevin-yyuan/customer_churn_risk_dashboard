'use client';
import { createTheme } from '@mui/material/styles';
import { Playfair_Display, Lato } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00796b', // Teal
    },
    secondary: {
      main: '#ffc107', // Amber
    },
    background: {
      default: '#263238', // Dark Blue Grey
      paper: '#37474f',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0bec5',
    },
  },
  typography: {
    fontFamily: lato.style.fontFamily,
    h1: {
      fontFamily: playfair.style.fontFamily,
      fontWeight: 700,
    },
    h2: {
      fontFamily: playfair.style.fontFamily,
      fontWeight: 700,
    },
    h3: {
      fontFamily: playfair.style.fontFamily,
      fontWeight: 700,
    },
    h4: {
      fontFamily: playfair.style.fontFamily,
      fontWeight: 700,
    },
    h5: {
      fontFamily: playfair.style.fontFamily,
      fontWeight: 700,
    },
    h6: {
      fontFamily: playfair.style.fontFamily,
      fontWeight: 700,
    },
  },
});

export default theme;