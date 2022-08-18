import {createTheme} from "@mui/material"
import { InputLabel } from '@mui/material';

const theme = createTheme({
    typography: {
        h2: {
          fontSize:"1rem",
          fontWeight:"bold"
        },
        h3: {
            fontSize:"1.25rem",
            fontWeight:"bold",
          },
        subtitle1: {
          fontSize:"1rem"
        },
        body1: {
          fontSize:"0.7rem"
        }
      },
    
  });

export default theme