import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone ,faUser } from '@fortawesome/free-solid-svg-icons'; {/**icons*/ }
import "../../css/contactComponents/contactSection.css"
const ContactSection = () => {
    return (
        <div className="contact-section contact-page">
            <div className='container'>
                <div className="right-side">
                    <h2>ابق عل اتصال معنا</h2>
                    <div className="line"></div>
                    <form action="">
                        <div className='input-body'>
                            <FontAwesomeIcon icon={faUser} className='fonticon' />
                            <input type="text" name="name" placeholder="الاسم الكامل" />
                        </div>
                        <div className='input-body'>
                            <FontAwesomeIcon icon={faEnvelope} className='fonticon' />
                            <input type="email" name="email" placeholder="البريد الالكتروني" />
                        </div>
                        <div className='input-body'>
                            <FontAwesomeIcon icon={faPhone} className='fonticon' />
                            <input type="text" name="phone" placeholder="رقم الهاتف" maxLength="11" />
                        </div>
                        <textarea placeholder="الرساله"></textarea>
                        <div className='submit-body'>
                            <input type="submit" placeholder="ارسل رسالتك" value="ارسل رسالتك" />
                            <div className='ball'></div>
                        </div>
                    </form>
                </div>
                <div className="left-side">
                    <h2>معلومات الاتصال</h2>
                    <div className="line"></div>
                    <div className="icon">
                        <FontAwesomeIcon icon={faLocationDot} className='fonticon' />
                        <div className='location-title'>
                            <h3>العنوان</h3>
                            <p>
                                حديقة المدفعية، شارع الصاعقة، دخلة شيراتون من طريق السويس، امام موقف ٤ ونص مساكن
                            </p>
                        </div>
                    </div>
                    <div className="icon">
                        <FontAwesomeIcon icon={faPhone} className='fonticon' />
                        <div className='phone-title'>
                            <h3>رقم الهاتف</h3>
                            <p>01280055200</p>
                        </div>
                    </div>
                    <div className="icon">
                        <FontAwesomeIcon icon={faEnvelope} className='fonticon' />
                        <div className='email-title'>
                            <h3>البريد الألكترونى</h3>
                            <p>admin@Hagoga.com</p>
                            <p>support@Hagoga.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ContactSection;