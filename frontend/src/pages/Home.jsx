import Navbar from "../components/Navbar/Navbar.jsx"
import Hero from "../components/Hero/Hero.jsx"
import Features from "../components/Features/Features.jsx"
import ContactForm from "../components/Contact/Contact.jsx";
import Footer from "../components/Footer/Footer.jsx";
const Home = ({ onNavigate }) => {
  return (
    <>
        <Navbar onNavigate={onNavigate}/>
        <Hero/>
        <Features/>
        <ContactForm/>
        <Footer/>
    </>
  );
};

export default Home;
