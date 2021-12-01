import { createTheme } from '@mui/material';
import { pink } from '@mui/material/colors';

const colors = {
  primaryPink: pink[300]
}

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.primaryPink
    }
  }
})