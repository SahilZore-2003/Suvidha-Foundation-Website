// import logo from "./logo.svg";

import TopNavbar from "./components/Nav/TopNavbar.jsx";
import "./App.css";
import Hero from "./components/Sections/Hero.jsx";
import Formsection from "./components/Form/Formsection.jsx";


function App() {
  return (
    <div className="App">
      <div>
        <TopNavbar />
        <Hero />
        <Formsection />
      </div>
    </div>
  );
}

export default App;
