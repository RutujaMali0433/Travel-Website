import Navbar from '../Components/Navbar';
import AboutImg from '../assets/about.jpg';
import Hero from '../Components/Hero';
import Footer from '../Components/Footer';
import AboutUs from '../Components/AboutUs';
function About () {
    return (
        <>
        <Navbar />
        <Hero 
            cName="hero-mid"
            heroImg={AboutImg}
            title="About Us"
            btnClass="hide"
            />
            <AboutUs />
            <Footer />
        </>
    );
}

export default About;