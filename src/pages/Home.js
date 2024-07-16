import woundsAndBleeding from '../assets/wounds&Bleeding.png';
import burn from '../assets/burn.png'
import bitesAndStings from '../assets/bitesAndStings.png'
import nosebleed from '../assets/nosebleed.png'
import sprainsStrainAndTears from '../assets/sprainsStrainsAndTears.png'
import '../assets/App.css';
import MappedBodyImage from '../components/BodyMapImage.jsx'
import Footer from '../components/Footer.jsx';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="Page">
      <h1>Ready to Rescue: A First Aid Guide</h1>
      <h2>Click on a Body Part!</h2>
      < MappedBodyImage />
      <h2>Common First Aid Injuries</h2>
      <div className="List-of-injuries">
        <div className="Injury">
          <p>Wounds & Bleeding</p>
          <Link to="/wounds&bleeding"><img src={woundsAndBleeding} className="Injury-icon" alt="Cuts and Scrapes" /></Link>
        </div>
        <div className="Injury">
          <p>Burns</p>
          <img src={burn} className="Injury-icon" alt="Burn" />
        </div>
        <div className="Injury">
          <p>Insects Bites/Stings</p>
          <img src={bitesAndStings} className="Injury-icon" alt="Bites And Stings" />
        </div>
        <div className="Injury">
          <p>Nosebleed</p>
          <img src={nosebleed} className="Injury-icon" alt="Nosebleed" />
        </div>
        <div className="Injury">
          <p>Sprains, Strains and Tears</p>
          <img src={sprainsStrainAndTears} className="Injury-icon" alt="Sprains, Strain and Tears" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
