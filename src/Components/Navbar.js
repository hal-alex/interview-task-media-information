import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Button from "@mui/material/Button"
import Logo from "../Assets/Logo-Horizontal.png"
import { useTheme } from "@emotion/react"
import { Link } from "react-router-dom"

const Navbar = () => {
  const theme = useTheme()

  const styles = {
    buttonLink: {
      color: "white",
    },
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ background: `${theme.palette.black.main}` }}
      >
        <Toolbar>
          <Box sx={{ width: "150px" }}>
            <img style={{ width: "100%" }} src={Logo} alt="girraphic"></img>
          </Box>
          <Box
            sx={{ display: "flex", justifyContent: "flex-end", width: "90%" }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button style={styles.buttonLink}>Home</Button>
            </Link>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <Button href="/about" style={styles.buttonLink}>
                About
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
