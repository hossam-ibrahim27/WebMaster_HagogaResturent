import { useState } from "react";
import tabs from "../data/DataMenueSections";
import FoodTabs from "../menueComponents/FoodTabs";
import "../../../src/css/menueComponents/MenueSection.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const MenueSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => {
        if (activeIndex < tabs.length - 1) {
            setActiveIndex(prev => prev + 1);
        }
    };

    const handlePrev = () => {
        if (activeIndex > 0) {
            setActiveIndex(prev => prev - 1);
        }
    };

    const getVisibleTabs = () => {
        const prev = tabs[activeIndex - 1];
        const current = tabs[activeIndex];
        const next = tabs[activeIndex + 1];
        return [prev, current, next];
    };

    const visibleTabs = getVisibleTabs();

    return (
        <div className='menue-page menue-section'>
            <div className="container">
                <div className='title'>
                    <h2>مطعم حجوجة</h2>
                    <h2>استطعم بافضل الاسعار</h2>
                </div>
                <div className="slider-wrapper">
                    <div className="tabs-slider">
                        {
                            visibleTabs.map((tab, index) => {
                                if (!tab) return <div className="tab-space" key={index}></div>;
                                const isActive = tab.id === tabs[activeIndex].id;
                                return (
                                    <div key={tab.id} className={`slider-tab ${isActive ? "active" : ""}`}>
                                        <img src={tab.src} alt={tab.label} style={{
                                            filter: isActive ? "none" : "grayscale(100%)",
                                            transform: isActive ? "scale(1.1)" : "scale(0.9)",
                                            transition: "0.3s",
                                        }} />
                                    </div>
                                );
                            })}
                    </div>
                    <div className="control-tab">
                        <button onClick={handlePrev} disabled={activeIndex === 0} className={`prev ${activeIndex === 0 ? "disabled" : ""}`}>
                            <FontAwesomeIcon icon={faAngleRight} />
                        </button>
                        <button onClick={handleNext} disabled={activeIndex === tabs.length - 1} className={`next ${activeIndex === tabs.length - 1 ? "disabled" : ""}`}>
                            <FontAwesomeIcon icon={faAngleLeft} />
                        </button>
                    </div>
                </div>
                <div className="content">
                    <FoodTabs id={tabs[activeIndex].id} foodsprice={tabs[activeIndex].food} />
                </div>
            </div>
        </div>
    );
};

export default MenueSection;
