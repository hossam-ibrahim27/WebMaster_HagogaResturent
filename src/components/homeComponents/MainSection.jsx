import { NavLink } from 'react-router';
import '../../css/homeComponents/MainSection.css'

const MainSection = () => {
    return (
        <div className="main-section">
            <div className='overlay'></div>
            <div className='title'>
                <h2>حجوجة اصل الاكل</h2>
                <p>
                    <span className='lineafter'></span>
                    <span>الفلاحى</span>
                    <span className='dot'></span>
                    <span>البيتى</span>
                    <span className='linebefore'></span>
                </p>
                <div className='form'>
                    <span><NavLink to="/menu" >قائمه طعام حجوجة </NavLink></span>
                    <span className='fill'><NavLink to={window.localStorage.getItem("user") ? "/reservations" : "/login"} >احجز الان</NavLink></span>
                </div>
            </div>

        </div>
    );
}
export default MainSection;