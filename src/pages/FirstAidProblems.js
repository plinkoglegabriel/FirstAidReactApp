import '../assets/App.css';
import ClickableImage from '../components/ClickableImage'; 
import Footer from '../components/Footer.jsx';
import Conditions from '../assets/conditions.png';


function FirstAidProblems() {
  return (
    <div className="Page">
      <h1>First Aid Injuries/Conditions</h1>
      <div className="conditions-list">
        <div className="condition">
            <h3>Medical Conditions</h3>
            <ClickableImage
            className="clickable-image"
            targetPage="/conditions"
            imageSource={Conditions}
            altText="Conditions Page"
            />
        </div>
      </div>

        <Footer />
    </div>
  );
}

export default FirstAidProblems;
