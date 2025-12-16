import { Box } from "@mui/material";
import Header from "./header";
import InformDivision from "./inform";
import SideBar from "./sidebar";


const UserInformation = () => {
  return (
    <Box dir="rtl" sx={{ display: "flex", height: "100vh", bgcolor: "#f1f5f9" }}>
      <SideBar />
      <Box sx={{ flex: 1, p: 2 }}>
        <Header />
        <InformDivision />
      </Box>
    </Box>
  );
};

export default UserInformation;
