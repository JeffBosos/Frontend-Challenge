import { Subtitles } from "@mui/icons-material";
import {createTheme} from "@mui/material"
import { red } from "@mui/material/colors";
import { fontWeight } from "@mui/system";

const theme = createTheme({
    typography: {
      h2: {
        fontSize:"3rem",
        fontWeight:"bold"
      },
      subtitle1: {
        fontSize:"1rem"
      }
    },
  });

export default theme