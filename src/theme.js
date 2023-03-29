import { createTheme } from "@mui/material/styles"
import createBreakpoints from "@mui/system/createTheme/createBreakpoints"

const breakPoints = createBreakpoints({})

const theme = createTheme({
  palette: {
    black: {
      main: "#121212",
    },
    lightGray: {
      main: "#abb8c3",
    },
  },
})

export default theme
