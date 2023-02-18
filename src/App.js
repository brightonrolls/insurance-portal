import CssBaseline from "@mui/material/CssBaseline";

import { Box } from "@mui/material";
import Header from "./components/Header";

function App() {
  return (
    <>
      <CssBaseline />
      <Box sx={{ display: "block", background: "#f1f1f1" }}>
        <Header />
      </Box>
    </>
  );
}

export default App;
