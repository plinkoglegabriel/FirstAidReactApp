import logo from './logo.png';
import body from './body.png';
import cutsAndScrapes from './cutsAndScrapes.png';
import burn from './burn.png'
import bitesAndStings from './bitesAndStings.png'
import nosebleed from './nosebleed.png'
import sprainsStrainAndTears from './sprainsStrainsAndTears.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Ready +o Rescue: A First Aid Guide</h1>
        <h2>Hover over a body part!</h2>
        <img src={body} className="Human-body" alt="body" />
        <p>
           
        </p>
        <div className="List-of-injuries"> 
        <h2>Common First Aid Injuries</h2>
          <div className="Injury">
            <p>Cuts/Scrapes</p>
            <img src={cutsAndScrapes} className="Injury-icon" alt="Cuts and Scrapes" />
          </div>
          <div className="Injury">
            <p>Burns</p>
            <img src={burn} className="Injury-icon" alt="Burn" />
          </div>
          <div className="Injury">
            <p>Insects Bites/Stings</p>
            <img src={bitesAndStings} className="Injury-icon" alt="Bites And Stings" />
          </div>
          {/* <div className="Injury">
           <p>Splinters</p>
          </div> */}
          <div className="Injury">
            <p>Nosebleed</p>
            <img src={nosebleed} className="Injury-icon" alt="Nosebleed" />
          </div>
          <div className="Injury">
            <p>Sprains, Strains and Tears</p>
            <img src={sprainsStrainAndTears} className="Injury-icon" alt="Sprains, Strain and Tears" />
          </div>
        </div>
        <p className="qualification">Created by a qualified <a
          className="App-link"
          href="https://www.sja.org.uk/"
          target="_blank"
          rel="noopener noreferrer"
        >St John Ambulance</a> first aider</p>
      </header>
    </div>
  );
}

export default App;
