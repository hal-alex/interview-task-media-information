import { Typography, Box } from "@mui/material"
import { Link } from "react-router-dom"

const About = () => {
  const styles = {
    mainContainer: (theme) => ({
      background: theme.palette.lightGray.main,
      display: "flex",
      flexDirection: "column",
      minHeight: "95vh",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      p: "50px",
    }),
  }

  return (
    <Box sx={styles.mainContainer}>
      <Typography variant="h5">
        This is an interview project that I have completed, which tasked me with
        creating a frontend app with a table displaying marathon data.
        <br></br>
        <br></br>
        This site has been developed by Alex H, my GitHub can be found{" "}
        <Link rel="noreferrer" target="_blank" to="https://github.com/hal-alex">
          here
        </Link>{" "}
        and my personal site is{" "}
        <Link
          rel="noreferrer"
          target="_blank"
          to="https://www.testing-in-prod.com"
        >
          here
        </Link>
        .
      </Typography>
    </Box>
  )
}

export default About
