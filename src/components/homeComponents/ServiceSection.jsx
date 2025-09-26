import ServiceItems from "./ServiceItems";
import "../../css/homeComponents/ServiceSection.css";
import "../../css/homeComponents/AboutSection.css";
import "../../css/homeComponents/OfferSection.css";
import service1 from "/src/images/1.png";
import service2 from "/src/images/2.png";
import service3 from "/src/images/3.png";
import service4 from "/src/images/4.png";

const serviceItems = [
    { id: 1, title: "اختر الأيام المتاحة", discr: "تحقق من التواريخ المتاحة للحجز", src: service1 },
    { id: 2, title: "أضف عناصر القائمة", discr: "أضف العناصر المفضلة لديك، بما في ذلك الأطباق الخاصة والمشروبات", src: service2 },
    { id: 3, title: "ادفع عبر الإنترنت", discr: "انتقل إلى الخروج وادفع المبلغ الكامل لتأمين حجزك", src: service3 },
    { id: 4, title: "استمتع بتجربة فريدة", discr: "استمتع بتجربة تناول الطعام المميزة مع عائلتك وأصدقائك", src: service4 },
]
const ServiceSection = () => {
    return (
        <div className="service-section offer-section about-section">
            <div className="overlay"></div>
            <div className="container">
                <div className="content">
                    <div className="title">
                        <h2>افضل خدمات حجوجة</h2>
                        <div className="line"></div>
                    </div>
                    <div className="items">
                        <ServiceItems serviceItems={serviceItems} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ServiceSection;