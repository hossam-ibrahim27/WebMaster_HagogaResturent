import ServiceItems from "./ServiceItems";
import "../../css/homeComponents/ServiceSection.css"
import "../../css/homeComponents/AboutSection.css"
import "../../css/homeComponents/OfferSection.css"
const serviceItems = [
    { id: 1, title: "اختر الأيام المتاحة", discr: "تحقق من التواريخ المتاحة للحجز", src: "../../../src/images/1.png" },
    { id: 2, title: "أضف عناصر القائمة", discr: "أضف العناصر المفضلة لديك، بما في ذلك الأطباق الخاصة والمشروبات", src: "../../../src/images/2.png" },
    { id: 3, title: "ادفع عبر الإنترنت", discr: "انتقل إلى الخروج وادفع المبلغ الكامل لتأمين حجزك", src: "../../../src/images/3.png" },
    { id: 4, title: "استمتع بتجربة فريدة", discr: "استمتع بتجربة تناول الطعام المميزة مع عائلتك وأصدقائك", src: "../../../src/images/4.png" },
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