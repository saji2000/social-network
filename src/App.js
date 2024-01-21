import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Add from "./components/Add";
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import { useState, useEffect } from "react";

function App() {
  const prefersDarkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [mode, setMode] = useState(prefersDarkMode ? "dark" : "light");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      setMode(e.matches ? "dark" : "light");
    };

    // Add event listener
    mediaQuery.addEventListener("change", handleChange);

    // Remove event listener on cleanup
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
