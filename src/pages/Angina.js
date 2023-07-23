import charlotte from '../assets/charlotte.png';

function Angina() {
  return (
    <div className="Page"> 
        <div className="Condition-page">
            <h1>Heart Attack</h1>
            <h2>An inspirational tale about a girl and her lungs</h2>
            <img src={charlotte} className="patient" alt="Sprains, Strain and Tears" />
            <p className="qualification">Created by a qualified <a
            className="App-link"
            href="https://www.sja.org.uk/"
            target="_blank"
            rel="noopener noreferrer"
            >St John Ambulance</a> first aider</p>
        </div>
    </div>
  );
}

export default Angina;
