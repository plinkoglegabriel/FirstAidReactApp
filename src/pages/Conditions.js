import '../assets/App.css';
import ClickableImage from '../components/ClickableImage'; 
import Footer from '../components/Footer.jsx';
import ChestConditions from '../assets/chestconditions.png';
import HeartAttackImage from '../assets/heartattack.png';

function Conditions() {
  return (
    <div className="Page">
      <h1>Common Chest Conditions/Disorders</h1>
      <div className="conditions-list">
        <div className="condition">
            <h3>Chest Conditions</h3>
            <ClickableImage
            targetPage="/chestconditions"
            imageSource={ChestConditions}
            altText="Chest Conditions Page"
            />
        </div>
        <div className="condition">
          <h3>Heart Attack</h3>
          <ClickableImage
          targetPage="/heartattack"
          imageSource={HeartAttackImage}
          altText="Heart Attack Page"
          />
        </div>
      </div>

        <Footer />
    </div>
  );
}

export default Conditions;
