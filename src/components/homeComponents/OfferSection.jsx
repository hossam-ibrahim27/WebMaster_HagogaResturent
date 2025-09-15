import '../../css/homeComponents/OfferSection.css';
import '../../css/homeComponents/AboutSection.css';
import imagOffer from "/src/images/CatHome.png"
const OfferSection = () => {
    return (
        <div className='about-section offer-section'>
            <div className='overlay'></div>
            <div className="container">
                <div className='content'>
                    <div className='img-dev'>
                        <img src={imagOffer} alt='hagoga story' />
                    </div>
                    <div className='title'>
                        <h2>مطعم حجوجة</h2>
                        <h2>العروض اليومية</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default OfferSection;