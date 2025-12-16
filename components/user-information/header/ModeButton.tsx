import { Box } from "@mui/material";
import DarkModeToggle from "./DarkModeToggle";

const ModeButton = () => {
  return (
    <Box
      sx={{
        width: "10%",
        borderBottom: "4px solid #2dd4bf",
        borderBottomRightRadius: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <DarkModeToggle />
      <Box component="img" src="/iran-flag.png" width={40} />
    </Box>
  );
};

export default ModeButton;
