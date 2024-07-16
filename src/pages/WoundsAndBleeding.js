import Footer from '../components/Footer.jsx';
import Inhaler from '../assets/inhaler.jpg';
import image999 from '../assets/image999.png';
import { Link } from 'react-router-dom';
import Position from '../assets/haposition.png';
import Aspirin from '../assets/aspirin.png';
import Anginaha from '../assets/anginaha.png';
import normalVital from '../assets/normalVital.jpg';

function Wounds() {
    return (
        <div className="Page">
            <div className="Condition-page">
                <h1>Wounds and Bleeding</h1>
                <h2>Background</h2>
                <p className="description">When a blood vessel is damages it constricts and several chemical reactions occur to form a blood clot over the damages area. If it is a large blood vessel, the clot may not develop fast enough and shock may develop.</p>
                <ul className="symptom-list">
                    <h3>Types of wounds include:</h3>
                    <li className="symptom-list">Incised wound - Clean surface cut from sharp object</li>
                    <li className="symptom-list">Laceration - Caused by blunt or ripping forces and can bleed less profusely than incised wounds but are at higher risk of infection.</li>
                    <li className="symptom-list">Abrasion (graze) - Superficial wound where topmost layers of skin are scraped off and can contain foreign particles which can lead to infection.</li>
                    <li className="symptom-list">Contusion (bruise) - A blunt blow where capillaries beneath the skin are ruptured and cause blood to leak into the tissues. It can sometimes indicated deeper damage e.g. a fracture.</li>
                    <li className="symptom-list">Puncture wound - Caused by a sharp object penetrating the skin and underlying tissues. They can be deep and narrow and can be difficult to clean and are at high risk of infection.</li>
                    <li className="symptom-list">Stab wound - A deep incision by a sharp object. Should be treated seriously due to danger of injury to vital organs and life-threatening internal bleeding. </li>
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

export default Wounds;
