import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import AboutImg1 from '../assets/img-3.jpg'
import Destination from '../Components/Destination';
import Trip from '../Components/Trip';
import Footer from '../Components/Footer';

function Home () {
    return (
        <>
            <Navbar />
            <Hero 
            cName="hero"
            heroImg={AboutImg1}
            title="Your Journey Your Story"
            text="Choose Your Favourite Destination."
            buttonText="Travel Plan"
            url="/"
            btnClass="Show"
            />
            <Destination />
            <Trip />
            <Footer />
        </>
    );
}

export default Home;