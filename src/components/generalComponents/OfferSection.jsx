import '../../css/homeComponents/OfferSection.css';
import '../../css/homeComponents/AboutSection.css'
import '../../css/aboutComponents/OfferSection.css';

const OfferSection = (props) => {
    const dataOfferSection = Array.from(props.offerSection);
    return (
        <div className='about-section offer-section offer-page'>
            <div className='overlay'></div>
            <div className="container">
                <div className='content'>
                    {
                        dataOfferSection.map((ele, index) => {
                            if (ele.id == props.id) {
                                return (
                                    <div key={index} className='title'>
                                        <h2>{ele.title}</h2>
                                        <div className='ball'></div>
                                        <p>{ele.discription}</p>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </div>
    );
}
export default OfferSection;