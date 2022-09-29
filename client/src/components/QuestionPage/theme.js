import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    palette: {
        box: {
            main: '#3071e8'
        },
        grey: {
          main: '#9e9e9e',
          dark: '#616161',
        },
        background: {
          paper: '#fff',
        }
      },
});

export default theme;