import '../../css/homeComponents/AboutSection.css'
import '../../css/aboutComponents/AboutSection.css'
import img1 from "/src/images/Group_1L.png"
import img2 from "/src/images/ourstory.png"
const AboutSection = () => {
    const iamges = [
        { src: img1 },
        { src: img2 },
    ];
    return (
        <div className="about-section about-page">
            <div className='overlay'></div>
            <div className='imagTop'>
                <img src={iamges[0].src} alt='hagoga story' />
            </div>
            <div className='container'>
                <div className='content'>
                    <div className='title'>
                        <h2>مرحبًا بكم في حجوجه</h2>
                        <h2>عن حجوجة</h2>
                        <p>
                            نحن هنا لنأخذكم في رحلة ممتعة وشهية في عالم الطعام الأصيل والمبتكر. في مطعم حجوجه، نقدم لكم لمسة من الحنين إلى طعم البيت وروح الفلاحين، مع لمسة من الإبداع والتجديد في كل طبق
                        </p>
                        <p>
                            نحن نؤمن بقوة الطعام في توحيد الناس وتعزيز الروابط الاجتماعية. من خلال مجموعة متنوعة من الأطباق الشهية والمتوازنة، نسعى لإشباع جميع الأذواق وتلبية توقعات كل ضيف
                        </p>
                        <p>
                            تعالوا واستمتعوا في أجواء مرحة وودية، حيث يمكنكم الاستمتاع بتجربة تناول الطعام لا تُنسى وتبادل الضحكات والذكريات. نحن هنا لنجعل كل لحظة تقضونها في حجوجه تجربة فريدة ومميزة.
                        </p>
                        <h2>احجز مكانك في حجوجه الآن</h2>
                        <div>
                            <p>الطريقة للحجز عبر الموقع الإلكتروني:</p>
                            <ul>
                                <li>اختر الأيام المتاحة: تحقق من التواريخ المتاحة للحجز.</li>
                                <li>أضف عناصر القائمة: أضف العناصر المفضلة لديك، بما في ذلك الأطباق الخاصة والمشروبات</li>
                                <li>ادفع عبر الإنترنت: انتقل إلى الخروج وادفع المبلغ الكامل لتأمين حجزك</li>
                                <li> استمتع بتجربة فريدة: استمتع بتجربة تناول الطعام المميزة مع عائلتك وأصدقائك.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='ourstory'>
                        <img src={iamges[1].src} alt='hagoga story' />
                    </div>
                    <div className='imagBottom'>
                        <img src={iamges[0].src} alt='hagoga story' />
                    </div>
                </div> {/**content */}
            </div>
        </div>
    );
}
export default AboutSection;