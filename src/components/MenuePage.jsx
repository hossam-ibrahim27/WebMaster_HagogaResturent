import Footer from "./generalComponents/Footer";
import Header from "./generalComponents/Header";
import OfferSection from "./generalComponents/OfferSection";
import SurbriceSection from "./homeComponents/SurbriceSection";
import data from "./data/DataOfferSections.js"
import MenueSection from "./menueComponents/MenueSection";
import UpButton from "./generalComponents/UpButton"
const MenuePage = () => {
    return (
        <>
            <Header />
            <OfferSection offerSection={data} id={3} />
            <MenueSection />
            <SurbriceSection />
            <Footer />
            <UpButton />
        </>
    );
}
export default MenuePage;