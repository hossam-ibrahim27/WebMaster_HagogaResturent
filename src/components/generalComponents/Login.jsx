import SurbriceSection from "../homeComponents/SurbriceSection";
import Footer from "./Footer";
import Header from "./Header";
import OfferSection from "./OfferSection";
import data from "../data/DataOfferSections.js"
import LoginSection from "../loginComponents/LoginSection";
const Login = () => {
    return (
        <div>
            <Header />
            <OfferSection offerSection={data} id={6} />
            <LoginSection />
            <SurbriceSection />
            <Footer />
        </div>
    );
}

export default Login;
