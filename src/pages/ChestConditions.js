import '../assets/App.css';
import ClickableImage from '../components/ClickableImage'; 
import Footer from '../components/Footer.jsx';
import AsthmaImage from '../assets/asthma.png';
import HeartAttackImage from '../assets/heartattack.png';

function ChestConditions() {
  return (
    <div className="Page">
      <h1>Common Chest Conditions/Disorders</h1>
      <div className="conditions-list">
        <div className="condition">
            <h3>Asthma</h3>
            <ClickableImage
            targetPage="/asthma"
            imageSource={AsthmaImage}
            altText="Asthma Page"
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

export default ChestConditions;
