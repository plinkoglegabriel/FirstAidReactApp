import logo from '../assets/logo.png';
import charlotte from '../assets/charlotte.png';

function Asthma() {
  return (
    <div className="Asthma">
      <header className="Asthma-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Asthma: Charlotte's story</h1>
        <h2>An inspirational tale about a girl and her lungs</h2>
        <img src={charlotte} className="Injury-icon" alt="Sprains, Strain and Tears" />
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

export default Asthma;
