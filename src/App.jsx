// Inside index.js or App.js
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import IconTabs from "./components/IconTabs";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  // Customize other MUI components as needed
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          padding: "20px",
        }}
      >
        <IconTabs />
      </div>
    </ThemeProvider>
  );
}

export default App;
