import './assets/App.css';
import Home from './pages/Home';
import Conditions from './pages/Conditions';
import Asthma from './pages/Asthma';
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeartAttack from "./pages/HeartAttack";
import AboutMe from './pages/AboutMe';
import FirstAidProblems from './pages/FirstAidProblems';
import Angina from './pages/Angina';
import ChestConditions from './pages/ChestConditions';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/firstaidproblems" element={<FirstAidProblems />} />
          <Route path="/conditions" element={<Conditions />} />
          <Route path="/asthma" element={<Asthma />} />
          <Route path="/heartattack" element={<HeartAttack />} />
          <Route path="/angina" element={<Angina />} />
          <Route path="/chestconditions" element={<ChestConditions />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;