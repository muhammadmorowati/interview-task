import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff'


const MainHeader = () => {
  return (
    <Box
      sx={{
        flex: 3,
        borderTop: "4px solid #6366f1",
        px: 2,
        display: "flex",
        alignItems: "center",
        gap: 2,
      }}
    >
      <FormControl size="small" sx={{ minWidth: 140 }}>
        <InputLabel>کسب و کار فعال</InputLabel>
        <Select label="کسب و کار فعال" disabled>
          <MenuItem value={1}>کسب و کار فعال</MenuItem>
        </Select>
      </FormControl>

      <Chip label="اطلاعات کاربران" color="info" icon={<HighlightOffIcon/>} />
    </Box>
  );
};

export default MainHeader;
