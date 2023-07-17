import './assets/App.css';
import Home from './pages/Home';
import ChestConditions from './pages/ChestConditions';
import Asthma from './pages/Asthma';
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutMe" element={<Asthma />} />
          <Route path="/chestconditions" element={<ChestConditions />} />
          <Route path="/Asthma" element={<Asthma />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;