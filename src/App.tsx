import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import "./components/DarkTheme/DarkTheme.scss";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Main />
    </div>
  );
}
