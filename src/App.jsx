import { Box } from "@mui/material";
import React from "react";
import AllRouter from "./router/AllRouter";

const App = () => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", height: "100vh", p: 2 }}
    >
      <AllRouter />
    </Box>
  );
};

export default App;
