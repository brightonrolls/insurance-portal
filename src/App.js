import CssBaseline from "@mui/material/CssBaseline";

import { Box } from "@mui/material";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import DataTable from "./components/UI/Table/DataTable";
import Footer from "./components/Footer";

const styleObj = {
  margin: "-60px 0 0 0",
  padding: "28px 29px",
  boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16)",
  backgroundColor: "#f1f6fa",
  position: "relative",
};

function App() {
  return (
    <>
      <CssBaseline />
      <Box sx={{ display: "block", background: "#f1f1f1" }}>
        <Header />
        <HeroSection />
        <Box sx={styleObj}>
          <DataTable />
        </Box>
        <Footer />
      </Box>
    </>
  );
}

export default App;
