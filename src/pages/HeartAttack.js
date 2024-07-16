import Footer from '../components/Footer.jsx';
import Inhaler from '../assets/inhaler.jpg';
import image999 from '../assets/image999.png';
import { Link } from 'react-router-dom';
import Position from '../assets/haposition.png';
import Aspirin from '../assets/aspirin.png';
import Anginaha from '../assets/anginaha.png';
import normalVital from '../assets/normalVital.jpg';

function HeartAttack() {
  return (
    <div className="Page">
      <div className="Condition-page">
        <h1>Heart Attack</h1>
        <h2>Background</h2>
        <p className="description">A heart attack is a serious medical emergency in which the supply of blood to the heart is suddenly blocked, usually by a blood clot. A lack of blood to the heart can seriously damage the heart muscle and can be life-threatening.</p>
        <h2>Signs and Symptoms</h2>
        <ul className="symptom-list">
          <h3>The main symptoms of a heart attack can include:</h3>
          <li className="symptom-list">Chest pain feeling like it's being pressed or squeezed by a heavy object. Pain can radiate from the chest to the jaw, neck, arms and back</li>
          <li className="symptom-list">Shortness of breath</li>
          <li className="symptom-list">Feeling weak and/or lightheaded</li>
          <li className="symptom-list">An overwhelming feeling of anxiety</li>
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

export default HeartAttack;
