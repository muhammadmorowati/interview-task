import { Box, IconButton } from "@mui/material";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const SideBar = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <Box
      sx={{
        width: isMobile ? "100%" : 72,
        height: isMobile ? 64 : "100vh",
        bgcolor: "#e2e8f0",
        borderRadius: isMobile ? 0 : 999,
        display: "flex",
        flexDirection: isMobile ? "row" : "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        position: isMobile ? "fixed" : "relative",
        bottom: isMobile ? 0 : "auto",
        zIndex: 1000,
      }}
    >
      <IconButton>
        <DashboardOutlinedIcon />
      </IconButton>

      <IconButton
        sx={{
          bgcolor: "#6366f1",
          color: "#fff",
          "&:hover": { bgcolor: "#6366f1" },
        }}
      >
        <PeopleAltOutlinedIcon />
      </IconButton>

      <IconButton>
        <SettingsOutlinedIcon />
      </IconButton>
    </Box>
  );
};

export default SideBar;
