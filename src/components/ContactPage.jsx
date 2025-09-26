import Footer from "./generalComponents/Footer";
import Header from "./generalComponents/Header";
import OfferSection from "./generalComponents/OfferSection";
import SurbriceSection from "./homeComponents/SurbriceSection";
import data from "./data/DataOfferSections.js"
import ContactSection from "./contactComponents/ContactSection";
import UpButton from "./generalComponents/UpButton"

const ContactPage = () => {
    return (
        <>
            <Header />
            <OfferSection offerSection={data} id={4} />
            <ContactSection />
            <SurbriceSection />
            <Footer />
            <UpButton />
        </>
    );
}
export default ContactPage;