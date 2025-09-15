import '../../css/homeComponents/MenueSection.css';
import { useState } from 'react';
import FoodTabs from './FoodTabs';
import tabs from '../data/DataMenueSections.js';

const MenueSection = () => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);
    return (
        <div className='menue-section'>
            <div className="container">
                <div className='title'>
                    <h2>مطعم حجوجة</h2>
                    <h2>استطعم بافضل الاسعار</h2>
                </div>
                <div className='nav'>
                    <ul className="tabs">
                        {
                            tabs.map((tab) => (
                                <li key={tab.id} className={activeTab === tab.id ? "active" : ""} onClick={() => setActiveTab(tab.id)}>
                                    {tab.label}
                                </li>
                            ))
                        }
                    </ul>
                    <div className="content">
                        {tabs.map((tab) => (
                            <div key={tab.id} id={tab.id} style={{ display: activeTab === tab.id ? "block" : "none" }}>
                                <div>
                                    <FoodTabs id={tab.id} foodsprice={tab.food} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default MenueSection;

