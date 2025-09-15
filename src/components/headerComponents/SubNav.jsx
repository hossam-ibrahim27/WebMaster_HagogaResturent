import { NavLink } from 'react-router';
import '../../css/headerComponents/SubNav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';; {/** location icons*/ }
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'; {/** Fcebook , insta icons*/ }
import logo from "/src/images/logo.png"
const SubNav = () => {
    return (
        <div className='sub-nav'>
            <div className='container' >
                <div className='upper-nav'>
                    <p>هذه نسخه للتعليم للذهاب الي الموقع الرسمي لمطعم حجوجه اضغط عل  الأيقون</p>
                    <NavLink to="http://hagogah.com/">
                        <img src={logo} alt="Hagoga logo" />
                    </NavLink>
                </div> {/*upper-nav*/}
                <div className="bottom-nav">
                    <p> <FontAwesomeIcon className='icon-location' target='_blank' icon={faLocationDot} />
                        حديقة المدفعية، شارع الصاعقة، دخلة شيراتون من طريق السويس، امام موقف ٤ ونص مساكن
                    </p>
                    <div className='links'>
                        <NavLink className="link" target='_blank' to="https://www.facebook.com/7agoga"><FontAwesomeIcon className='icon-face' icon={faFacebookF} /></NavLink>
                        <NavLink className="link" target='_blank' to="https://www.instagram.com/7agogah/#"><FontAwesomeIcon icon={faInstagram} /></NavLink>
                    </div> {/*bottom-nav */}
                </div> {/*container */}
            </div>
        </div>
    );
}
export default SubNav;