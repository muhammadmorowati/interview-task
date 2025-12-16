import { Box } from "@mui/material";
import DarkModeToggle from "./DarkModeToggle";

interface Props {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModeButton = ({ darkMode, setDarkMode }: Props) => {
  return (
    <Box sx={{
         width: "10%",
        borderBottom: "4px solid #2dd4bf",
        borderBottomRightRadius: "16px",
      px: 2, display: "flex", alignItems: "center"
    }}>
      <DarkModeToggle
        checked={darkMode}
        onChange={() => setDarkMode((p) => !p)}
      />
            <Box component="img" src="/iran-flag.png" width={40} />

    </Box>
  );
};

export default ModeButton;
