import data from "./data/DataOfferSections";
import Footer from "./generalComponents/Footer";
import Header from "./generalComponents/Header";
import OfferSection from "./generalComponents/OfferSection";
import SurbriceSection from "./homeComponents/SurbriceSection";
import ServiceSection from "./homeComponents/ServiceSection";
import ReservationSection from "./reservationsComponents/ReservationSection";
import UpButton from "./generalComponents/UpButton"

const Reservations = () => {
    return (
        <div>
            <Header />
            <OfferSection offerSection={data} id={7} />
            <ReservationSection />
            <ServiceSection />
            <SurbriceSection />
            <Footer />
            <UpButton />
        </div>
    );
}

export default Reservations;
