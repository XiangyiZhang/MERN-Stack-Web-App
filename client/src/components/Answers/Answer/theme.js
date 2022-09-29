import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        button: {
          textTransform: 'none'
        }
    },
    palette: {
      grey: {
        main: '#9e9e9e',
        light: '#cccccc',
        dark: '#616161',
      },
      button: {
        unpressed: '#cceeff',
      },
      background: {
        paper: '#fff',
      }
    },
});

export default theme;