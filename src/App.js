import CssBaseline from "@mui/material/CssBaseline";

import { Box } from "@mui/material";

import MainMenu from "./components/MainMenu";

function App() {
  return (
    <>
      <CssBaseline />
      <Box sx={{ display: "block", background: "#f1f1f1" }}>
        <MainMenu />
      </Box>
    </>
  );
}

export default App;
