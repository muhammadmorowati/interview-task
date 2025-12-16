import { Box, Typography } from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import StackInform from "./StackInform";
import StackInformTwo from "./StackInformTwo";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const InformDivision = () => {
  return (
    <Box
      sx={{
        mt: 2,
        bgcolor: "#fff",
        borderRadius: 4,
        p: 2,
      }}
    >
      <Box display="flex" alignItems="center" gap={1} mb={2}>
        <Typography fontSize={14} className="text-blue-700">مدیریت کاربران</Typography>
        <WestIcon fontSize="small" color="disabled" />
        <Typography fontSize={14}>اطلاعات کاربران</Typography>
        <HelpOutlineIcon fontSize="small" color="primary" />
      </Box>

      <StackInform />
      <StackInformTwo />
    </Box>
  );
};

export default InformDivision;
