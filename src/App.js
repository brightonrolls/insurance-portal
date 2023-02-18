import CssBaseline from "@mui/material/CssBaseline";

import { Box } from "@mui/material";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <>
      <CssBaseline />
      <Box sx={{ display: "block", background: "#f1f1f1" }}>
        <Header />
        <HeroSection />
      </Box>
    </>
  );
}

export default App;
