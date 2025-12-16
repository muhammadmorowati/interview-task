import { Box } from "@mui/material";
import CenterHeader from "./CenterHeader";
import MainHeader from "./MainHeader";
import ModeButton from "./ModeButton";

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ darkMode, setDarkMode }: HeaderProps) => {
  return (
    <Box
      sx={{
        bgcolor: "#fff",
        width: "100%",
        height: 56,
        borderRadius: 999,
        display: "flex",
        overflow: "hidden",
      }}
    >
      <MainHeader />
      <CenterHeader />
      <ModeButton darkMode={darkMode} setDarkMode={setDarkMode} />
    </Box>
  );
};

export default Header;
