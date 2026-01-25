import { createTheme } from '@mui/material';
import { blueGrey } from '@mui/material/colors';

export const theme = createTheme({
  typography: {
    fontFamily: 'Open Sans, sans-serif',
  },
  palette: {
    primary: {
      main: blueGrey[600],
    },
    divider: {
      main: blueGrey[100],
    },
  },
});
