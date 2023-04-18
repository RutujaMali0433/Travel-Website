import Navbar from '../Components/Navbar';
import AboutImg2 from '../assets/service.jpg';
import Hero from '../Components/Hero';
import Footer from '../Components/Footer';
import Trip from '../Components/Trip';

function Service () {
    return (
        <>
        <Navbar />
        <Hero 
            cName="hero-mid"
            heroImg={AboutImg2}
            title="Services"
            btnClass="hide"
            />
            <Trip />
            <Footer />
        </>
    );
}

export default Service;