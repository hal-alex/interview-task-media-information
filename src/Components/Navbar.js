import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import Logo from "../Assets/Logo-Horizontal.png"
import { useTheme } from "@emotion/react"
import { Link } from "react-router-dom"

const Navbar = () => {
  const theme = useTheme()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ background: `${theme.palette.black.main}` }}
      >
        <Toolbar>
          <Box sx={{ width: "150px" }}>
            <img style={{ width: "100%" }} src={Logo}></img>
          </Box>
          <Box sx={{ display: "flex", }}>
            <Link to="/">
              <Button>Home</Button>
            </Link>
            <Link to="/about">
              <Button>About</Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
