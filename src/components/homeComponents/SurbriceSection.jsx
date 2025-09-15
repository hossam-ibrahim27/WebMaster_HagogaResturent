import "../../css/homeComponents/AboutSection.css"
import "../../css/homeComponents/SurbriceSection.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import subscripe from "/src/images/Group_1L.png";
const SurbriceSection = () => {
    const iamges = [
        { src: subscripe },
    ];
    return (
        <>
            <div className="surbrice-section about-section">
                <div className='overlay'></div>
                <div className='imagTop'>
                    <img src={iamges[0].src} alt='hagoga story' />
                </div>
                <div className='container'>
                    <div className='content'>
                        <div className='title'>
                            <h3>اشترك معنا الان</h3>
                            <p>
                                احصل على المزيد من الأخبار والأطباق الشهية يوميًا من خلالنا
                            </p>
                        </div>
                        <div className="form">
                            <input type="email" name="" placeholder="البريد الالكتروني" />
                            <FontAwesomeIcon icon={faPaperPlane} className="icon" />
                        </div>
                        <div className='imagBottom'>
                            <img src={iamges[0].src} alt='hagoga story' />
                        </div>
                    </div> {/**content */}
                </div>
            </div>
        </>
    )
}
export default SurbriceSection;