import Navbar from '../Components/Navbar';
import AboutImg3 from '../assets/contact.jpg';
import Hero from '../Components/Hero';
import Footer from '../Components/Footer';
import ContactForm from '../Components/ContactForm';
function Contact () {
    return (
        <>
        <Navbar />
        <Hero 
            cName="hero-mid"
            heroImg={AboutImg3}
            title="Contact"
            btnClass="hide"
            />
            <ContactForm />
            <Footer />
        </>
    );
}

export default Contact;