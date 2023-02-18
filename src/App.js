import CssBaseline from "@mui/material/CssBaseline";

import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import DataTable from "./components/UI/Table/DataTable";

function App() {
  const theme = useTheme();
  const extraSmallScreens = useMediaQuery(theme.breakpoints.up("xs"));
  let getMargin = () => (extraSmallScreens ? "0" : "-60px 0 0 0");

  const styleObj = {
    margin: getMargin(),
    padding: "28px 29px",
    boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16)",
    backgroundColor: "#f1f6fa",
    position: "relative",
  };
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
