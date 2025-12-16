import { Box, Typography } from "@mui/material";
import WestIcon from "@mui/icons-material/West";
import StackInform from "./StackInform";
import StackInformTwo from "./StackInformTwo";

const InformDivision = () => {
  return (
    <Box
      sx={{
        width: "95%",
        height: "90vh",
        bgcolor: "white",
        borderRadius: 4,
        p: 2,
      }}
    >
      <Box display="flex" alignItems="center" gap={1}>
        <Typography>مدیریت کاربران</Typography>
        <WestIcon />
        <Typography>اطلاعات کاربران</Typography>
      </Box>

      <StackInform />
      <StackInformTwo />
    </Box>
  );
};

export default InformDivision;
