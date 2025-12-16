import { Box, useMediaQuery } from "@mui/material";
import { useState } from "react";
import Header from "./header";
import InformDivision from "./inform";
import SideBar from "./sidebar";

const UserInformation = () => {
  const [darkMode, setDarkMode] = useState(false);
  const isMobile = useMediaQuery("(max-width:900px)");

  return (
    <Box
      dir="rtl"
      sx={{
        minHeight: "100vh",
        bgcolor: darkMode ? "#000" : "#f1f5f9",
        transition: "background-color 0.3s",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
      }}
    >
      {/* Sidebar */}
      <SideBar isMobile={isMobile} />

      {/* Main Content */}
      <Box sx={{ flex: 1, p: 2 }}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <InformDivision />
      </Box>
    </Box>
  );
};

export default UserInformation;
