import { Box } from "@mui/system"
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid"

const CustomToolbar = () => {
  return (
    <GridToolbarContainer>
      <GridToolbarExport
        csvOptions={{
          fileName: "race_results",
        }}
      />
    </GridToolbarContainer>
  )
}

const AthleteTable = ({ data }) => {
  let rows = [{}]

  const generateRows = () => {
    rows = []
    data.map((athelete, index) => {
      const {
        rank,
        firstname,
        surname,
        finishtime,
        raceprogress,
        bibnumber,
        flag,
      } = athelete
      rows.push({
        id: rank,
        col1: rank,
        col2: firstname + " " + surname,
        col3: finishtime,
        col4: flag,
        col5: bibnumber,
        col6: raceprogress.charAt(0).toUpperCase() + raceprogress.slice(1),
      })
    })
  }

  generateRows()

  const columns = [
    { field: "col1", headerName: "Rank", width: 75 },
    { field: "col2", headerName: "Full Name", width: 200 },
    { field: "col3", headerName: "Finish Time", width: 150 },
    { field: "col4", headerName: "Country Code", width: 150 },
    { field: "col5", headerName: "Bib Number", width: 125 },
    { field: "col6", headerName: "Race Progress", width: 125 },
  ]

  return (
    <Box style={{ height: 900, width: "100%", background: "white" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        slots={{
          toolbar: CustomToolbar,
        }}
      />
    </Box>
  )
}

export default AthleteTable
