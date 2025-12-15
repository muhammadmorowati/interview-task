import { Chip, FormControl, InputLabel, MenuItem, Select } from "@mui/material"

const MainHeader = () => {
  return (
    <div
      className='w-[70%] border-t-4 border-indigo-500'
      dir="rtl"
    >
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Age</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        label="Age"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
      </FormControl>
      
      <Chip label="Deletable" />

      </div>
  )
}

export default MainHeader