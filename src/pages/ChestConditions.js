import '../assets/App.css';
import ClickableImage from '../components/ClickableImage';
import Footer from '../components/Footer.jsx';
import AsthmaImage from '../assets/asthma.png';
import HeartAttackImage from '../assets/heartattack.png';
import AnginaImage from '../assets/angina.png';

function ChestConditions() {
    return (
        <div className="Page">
            <h1>Chest Conditions</h1>
            <div className="conditions-list">
                <div className="condition">
                    <h3>Asthma</h3>
                    <ClickableImage
                        className="clickable-image"
                        targetPage="/asthma"
                        imageSource={AsthmaImage}
                        altText="Asthma Page"
                    />
                </div>
                <div className="condition">
                    <h3>Heart Attack</h3>
                    <ClickableImage
                        className="clickable-image"
                        targetPage="/heartattack"
                        imageSource={HeartAttackImage}
                        altText="Heart Attack Page"
                    />
                </div>
                <div className="condition">
                    <h3>Angina</h3>
                    <ClickableImage
                        className="clickable-image"
                        targetPage="/angina"
                        imageSource={AnginaImage}
                        altText="Angina Page"
                    />
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default ChestConditions;
