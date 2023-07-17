import asthma from '../assets/asthma.png';
import heartattack from '../assets/heartattack.png'
import '../assets/App.css';
import Footer from '../components/Footer.jsx';

function Home() {
  return (
    <div className="Home">
        <h1>Common Chest Conditions/Disorders</h1>
        <div className="List-of-chest-conditions"> 
          <div className="condition">
            <h3>Asthma</h3>
            <img src={asthma} className="condition-icon" alt="Asthma" />
          </div>
          <div className="condition">
            <h3>Heart Attack</h3>
            <img src={heartattack} className="condition-icon" alt="heartattack" />
          </div>
        </div>
        <Footer />
    </div>
  );
}

export default Home;
