import Footer from "./generalComponents/Footer";
import Header from "./generalComponents/Header";
import UpButton from "./generalComponents/UpButton";
import AboutSection from "./homeComponents/AboutSection";
import MainSection from "./homeComponents/MainSection";
import MenueSection from "./homeComponents/MenueSection";
import OfferSection from "./homeComponents/OfferSection";
import ServiceSection from "./homeComponents/ServiceSection";
import SurbriceSection from "./homeComponents/SurbriceSection";


const HomePage = () => {

    return (
        <>
            <Header />
            <MainSection />
            <AboutSection />
            <OfferSection />
            <MenueSection />
            <ServiceSection />
            <SurbriceSection />
            <Footer />
            <UpButton />
        </>
    );
}
export default HomePage;