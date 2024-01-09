import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Feed />
      <Rightbar />
    </div>
  );
}

export default App;
