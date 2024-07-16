import Footer from '../components/Footer.jsx';
import Inhaler from '../assets/inhaler.jpg';
import image999 from '../assets/image999.png';
import { Link } from 'react-router-dom';
import Position from '../assets/haposition.png';
import Aspirin from '../assets/aspirin.png';
import Anginaha from '../assets/anginaha.png';
import normalVital from '../assets/normalVital.jpg';

function Angina() {
  return (
    <div className="Page">
      <div className="Condition-page">
        <h1>Angina</h1>
        <h2>Background</h2>
        <p className="description">Angina is chest pain or discomfort that occurs if an area of your heart muscle doesn't get enough oxygen-rich blood. It may feel like pressure or squeezing in your chest. The pain also can occur in your shoulders, arms, neck, jaw, or back. Angina pain may even feel like indigestion.</p>
        <h2>Signs and Symptoms</h2>
        <ul className="symptom-list">
          <h3>The main symptoms of Angina can include:</h3>
          <li className="symptom-list">Chest pain or discomfort</li>
          <li className="symptom-list">Pain in your arms, neck, jaw, shoulder or back accompanying chest pain</li>
          <li className="symptom-list">Nausea</li>
          <li className="symptom-list">Fatigue</li>
        </ul>
        <h2>First Aid</h2>
        <div className="condition">
          <h3>Step 1</h3>
          <h4>Call 999/112 for emergency help</h4>
          <img src={image999} className="step" alt="999" />
          <p>Tell ambulance control that you suspect a heart attack</p>
        </div>
        <div className="condition">
          <h3>Step 2</h3>
          <h4>Help Casualty feel as comfortable as possible</h4>
          <img src={Position} className="step" alt="inhaler" />
          <p>A half-sitting position with head and shoulders supported and knees bent is best</p>
        </div>
        <div className="condition">
          <h3>Step 3</h3>
          <h4>Assist casualty in slowly chewing a 300mg aspirin tablet</h4>
          <img src={Aspirin} className="step" alt="inhaler" />
          <p>Aspirin can be used to help thin blood and improve blood flow</p>
        </div>
        <div className="condition">
          <h3>Step 4</h3>
          <h4>If casualty has angina, Assist them in taking angina medication</h4>
          <img src={Anginaha} className="step" alt="inhaler" />
          <p>More information on <Link to="/angina">Angina</Link></p>
        </div>
        <div className="condition">
          <h3>Step 5</h3>
          <h4>Monitor and record vital signs</h4>
          <img src={normalVital} className="step" alt="inhaler" />
          <p>Continuously check breathing, pulse and response levels</p>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Angina;
