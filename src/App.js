import logo from "./logo.svg";
import { Button } from "@mui/material/";
import { Add, Settings } from "@mui/icons-material";

function App() {
  return (
    <div className="App">
      <Button variant="text">Text</Button>
      <Button startIcon={<Settings />} variant="contained">
        Contained
      </Button>
      <Button endIcon={<Add />} variant="outlined" disabled>
        Outlined
      </Button>
      <Button
        variant="contained"
        disabled
        sx={{
          backgroundColor: "skyblue",
          color: "#888",
          margin: 5,
          "&:hover": { backgroundColor: "lightblue" },
          "&:disabled": { backgroundColor: "gray", color: "white" },
        }}
      >
        My unique button
      </Button>
    </div>
  );
}

export default App;
