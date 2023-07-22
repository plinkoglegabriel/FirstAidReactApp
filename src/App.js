import './assets/App.css';
import Home from './pages/Home';
import ChestConditions from './pages/ChestConditions';
import Asthma from './pages/Asthma';
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeartAttack from "./pages/HeartAttack";
import AboutMe from './pages/AboutMe';
import Conditions from "./pages/Conditions"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/conditions" element={<Conditions />} />
          <Route path="/chestconditions" element={<ChestConditions />} />
          <Route path="/asthma" element={<Asthma />} />
          <Route path="/heartattack" element={<HeartAttack />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;