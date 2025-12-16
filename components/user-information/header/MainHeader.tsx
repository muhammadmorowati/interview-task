import { Box, Chip, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const MainHeader = () => {
  return (
    <Box
      dir="rtl"
      sx={{
        width: "70%",
        borderTop: "4px solid #6366f1", // indigo
        px: 2,
        display: "flex",
        alignItems: "center",
        gap: 2,
      }}
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
    </Box>
  );
};

export default MainHeader;
