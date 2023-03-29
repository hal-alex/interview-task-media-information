import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import React from "react"
import SampleData from "../Components/SampleData"
import AthleteTable from "../Components/AthleteTable"

const Homepage = () => {
  const styles = {
    mainContainer: (theme) => ({
      background: theme.palette.lightGray.main,
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      justifyContent: "center",
      alignItems: "center",
      pt: "60px",
      pb: "60px",
    }),
  }

  return (
    <Box sx={styles.mainContainer}>
      <Box>
        <Typography variant="h4">{SampleData.results.racename}</Typography>
        <AthleteTable data={SampleData.results.athletes}></AthleteTable>
      </Box>
    </Box>
  )
}

export default Homepage
