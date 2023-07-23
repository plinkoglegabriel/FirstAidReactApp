import Footer from '../components/Footer';
import Inhaler from '../assets/inhaler.jpg'

function Asthma() {
  return (
    <div className="Page">
        <h1>Asthma</h1>
        <h2>Summary & Symptoms</h2>
        <p></p>
        <h2>How to Help?</h2>
        <div className="steps">
        <div className="condition">
          <h3>Step 1</h3>
          <h4>Help Casualty with Inhaler</h4>
          <img src={Inhaler} className="step" alt="inhaler" />
          <p>Reassure the casualty</p>
        </div>

        <div className="condition">
          <h3>Step 2</h3>
          <h4>Help Casualty with Inhaler</h4>
          <img src={Inhaler} className="step" alt="inhaler" />
          <p>Reassure the casualty</p>
        </div>

        <div className="condition">
          <h3>Step 3</h3>
          <h4>Help Casualty with Inhaler</h4>
          <img src={Inhaler} className="step" alt="inhaler" />
          <p>Reassure the casualty</p>
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default Asthma;
