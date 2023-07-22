import Polly from '../assets/polly.png';
import Footer from '../components/Footer';

function AboutMe() {
  return (
    <div className="Page">
        <h1>About Me - Polly Linkogle-Gabriel</h1>
        <img src={Polly} className="person" alt="Sprains, Strain and Tears" />
        <p></p>
        <Footer />
    </div>
  );
}

export default AboutMe;
