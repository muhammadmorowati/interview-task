import { Box } from "@mui/material";
import MainHeader from "./MainHeader";
import CenterHeader from "./CenterHeader";
import ModeButton from "./ModeButton";

const Header = () => {
  return (
    <Box
      sx={{
        bgcolor: "white",
        width: "95%",
        height: 56,
        borderRadius: 999,
        display: "flex",
      }}
    >
      <MainHeader />
      <CenterHeader />
      <ModeButton />
    </Box>
  );
};

export default Header;
