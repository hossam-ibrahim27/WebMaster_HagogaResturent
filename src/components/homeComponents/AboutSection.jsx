import '../../css/homeComponents/AboutSection.css'
import image1 from "/src/images/Group_1L.png";
import image2 from "/src/images/ourstory.png";

const AboutSection = () => {
    const iamges = [
        { src: image1 },
        { src: image2 },
    ];
    return (
        <div className="about-section">
            <div className='overlay'></div>
            <div className='imagTop'>
                <img src={iamges[0].src} alt='hagoga story' />
            </div>
            <div className='container'>
                <div className='content'>
                    <div className='img-dev'>
                        <img src={iamges[1].src} alt='hagoga story' />
                    </div>
                    <div className='title'>
                        <h2>اكتشف</h2>
                        <h2>عن حجوجة</h2>
                        <h2>مرحبا بكم في حجوجة</h2>
                        <p>
                            نحن هنا لنأخذكم في رحلة ممتعة وشهية في عالم الطعام الأصيل والمبتكر. في مطعم حجوجه، نقدم لكم لمسة من الحنين إلى طعم البيت وروح الفلاحين، مع لمسة من الإبداع والتجديد في كل طبق
                        </p>
                    </div>
                </div> {/**content */}
            </div>
            <div className='imagBottom'>
                <img src={iamges[0].src} alt='hagoga story' />
            </div>
        </div>
    );
}
export default AboutSection;