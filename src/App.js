import logo from "./logo.svg";
import { Button, styled } from "@mui/material/";
import { Add, Settings } from "@mui/icons-material";

function App() {
  const BlueButton = styled(Button)(({ theme }) => ({
    backgroundColor: "skyblue",
    color: "#888",
    margin: 5,
    "&:hover": { backgroundColor: "lightblue" },
    "&:disabled": { backgroundColor: "gray", color: "white" },
  }));

  return (
    <div className="App">
      <Button variant="text">Text</Button>
      <Button startIcon={<Settings />} variant="contained">
        Contained
      </Button>
      <Button color="secondary" endIcon={<Add />} variant="contained">
        Outlined
      </Button>
      <BlueButton>My button</BlueButton>
    </div>
  );
}

export default App;
