import './styles/allstyles.css'
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Cards from "./components/Cards";
import AboutMe from "./components/AboutMe";
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';


AOS.init();

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousel/>
      <br/><br/>
      <Cards/>
      <br/><br/>
      <AboutMe/>
      <br/><br/>
      <ContactForm/>
      <br/><br/>
      <Footer/>
    </div>
  );
}

export default App;
