
import data from "./data/DataOfferSections";
import Footer from "./generalComponents/Footer";
import Header from "./generalComponents/Header";
import OfferSection from "./generalComponents/OfferSection";
import SurbriceSection from "./homeComponents/SurbriceSection";
import TermsAndConditionsSection from "./termsAndConditionComponents/TermsAndConditionsSection";
import UpButton from "./generalComponents/UpButton"

const TermsAndConditionsPage = () => {
    return (
        <div>
            <Header />
            <OfferSection offerSection={data} id={2} />
            <TermsAndConditionsSection />
            <SurbriceSection />
            <Footer />
            <UpButton />
        </div>
    );
}

export default TermsAndConditionsPage;
