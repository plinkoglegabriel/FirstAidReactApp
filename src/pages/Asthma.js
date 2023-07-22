import charlotte from '../assets/charlotte.png';
import Footer from '../components/Footer';

function Asthma() {
  return (
    <div className="Page">
        <h1>Asthma: Charlotte's story</h1>
        <h2>An inspirational tale about a girl and her lungs</h2>
        <img src={charlotte} className="patient" alt="Sprains, Strain and Tears" />
        <p>Once upon a time, in the bustling city of London, there lived a young girl named Charlotte. She was a bright and adventurous spirit, with a love for exploring every corner of her beloved city. However, there was one thing that made her journey a little different from others - Charlotte had asthma.

From a young age, Charlotte learned to navigate the world with her asthma. It wasn't always easy, as she faced challenges that her friends didn't quite understand. Yet, Charlotte was determined not to let her condition hold her back. She was determined to experience the wonders of London despite the occasional wheezing and breathlessness.</p>
        <Footer />
    </div>
  );
}

export default Asthma;
