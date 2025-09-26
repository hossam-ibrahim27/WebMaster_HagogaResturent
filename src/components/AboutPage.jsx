import Footer from "./generalComponents/Footer";
import Header from "./generalComponents/Header";
import SurbriceSection from "./homeComponents/SurbriceSection";
import AboutSection from "./aboutComponents/AboutSection";
import OfferSection from "./generalComponents/OfferSection";
import data from "./data/DataOfferSections.js"
import UpButton from "./generalComponents/UpButton"

const AboutPage = () => {
    return (
        <>
            <Header />
            <OfferSection offerSection={data} id={1} />
            <AboutSection />
            <SurbriceSection />
            <Footer />
            <UpButton />
        </>
    );
}
export default AboutPage;