import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        button: {
          textTransform: 'none'
        }
      },
    palette: {
      button: {
        ask: '#f2f2f2',
        hover: '#fff',
      }
    },
});

export default theme;