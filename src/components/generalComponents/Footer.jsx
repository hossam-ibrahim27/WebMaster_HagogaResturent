import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons'; {/** location icons*/ }
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'; {/** Fcebook , insta icons*/ }
import "../../css/generalComponents/Footer.css"
import { NavLink } from 'react-router';

const Footer = () => {
    return (
        <footer>
            <div className="footer-section">
                <div className="container">
                    <div className="upper-half">
                        <div className="icons">
                            <div className='hagoga'>
                                <img src='../../../public/logo.png' alt='Hagoga-Icon' />
                            </div>
                            <div className='social'>
                                <NavLink className="link" target='_blank' to="https://www.facebook.com/7agoga"><FontAwesomeIcon className='icon-face' icon={faFacebookF} /></NavLink>
                                <NavLink className="link" target='_blank' to="https://www.instagram.com/7agogah/#"><FontAwesomeIcon icon={faInstagram} /></NavLink>
                            </div>
                        </div>
                        <div className="title">
                            <p>
                                نحن هنا لنأخذكم في رحلة ممتعة وشهية في عالم الطعام الأصيل والمبتكر. في مطعم حجوجه، نقدم لكم لمسة من الحنين إلى طعم البيت وروح الفلاحين، مع لمسة من الإبداع والتجديد في كل طبق
                            </p>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="bottom-half">
                        <div className="email-icon">
                            <FontAwesomeIcon icon={faEnvelope} className='icon' />
                            <div className='email-title'>
                                <p>admin@Hagoga.com</p>
                                <p>support@Hagoga.com</p>
                            </div>
                        </div>
                        <div className="location-icon">
                            <FontAwesomeIcon icon={faLocationDot} className='icon' />
                            <div className='location-title'>
                                <p>
                                    حديقة المدفعية، شارع الصاعقة، دخلة شيراتون من طريق السويس، امام موقف ٤ ونص مساكن
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='privacy'>
                    <div className='container'>
                        <NavLink className="link" target='_blank' to="/">السياسة و الخصوصية</NavLink>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;