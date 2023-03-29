import { Typography, Box } from "@mui/material"
import SampleData from "../Components/SampleData"
import AthleteTable from "../Components/AthleteTable"

const Homepage = () => {
  const styles = {
    mainContainer: (theme) => ({
      background: theme.palette.lightGray.main,
      display: "flex",
      flexDirection: "column",
      minHeight: "90vh",
      justifyContent: "center",
      alignItems: "center",
      pb: "60px",

    }),
  }

  return (
    <Box sx={styles.mainContainer}>
      <Typography sx={{ p: "30px" }} variant="h4">
        {SampleData.results.racename}
      </Typography>
      <Box>
        <AthleteTable data={SampleData.results.athletes}></AthleteTable>
      </Box>
    </Box>
  )
}

export default Homepage
