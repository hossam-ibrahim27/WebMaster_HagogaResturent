import SurbriceSection from "../homeComponents/SurbriceSection";
import Footer from "./Footer";
import Header from "./Header";
import OfferSection from "./OfferSection";
import data from "../data/DataOfferSections.js"
import RegisterSection from "../registerComponents/RegisterSection";

const Register = () => {
    return (
        <>
            <Header />
            <OfferSection offerSection={data} id={5} />
            <RegisterSection />
            <SurbriceSection />
            <Footer />
        </>
    );
}
export default Register;