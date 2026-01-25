import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: 'Open Sans, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          '&:hover': { boxShadow: 'none' },
          '&:active': { boxShadow: 'none' },
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#FF9700',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#019BDF',
    },
    text: {
      primary: '#546E7A',
      secondary: '#90A4AE',
    },
  },
});
