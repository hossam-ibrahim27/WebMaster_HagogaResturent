import { NavLink } from 'react-router';
import '../../css/headerComponents/Navlink.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faRightFromBracket, faGripLines } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Navlink = () => {
    const classActive = ({ isActive }) => {
        if (isActive) {
            return "link active"
        } else {
            return "link"
        }
    }
    const logOut = () => {
        window.localStorage.removeItem("user");
        window.location.pathname = "/";
    }
    const [drowp, setDrowp] = useState("links");
    return (
        <nav className="nav-parent">
            <div className='container'>
                <div className="icon">
                    <NavLink className="" to="/">
                        <img src="../../../public/logo.png" alt="Hagoga logo" className='logo' />
                    </NavLink>
                </div> {/*icon */}
                <div className="dropdown-button" onClick={() => {
                    (drowp == "links") ? setDrowp("links drowpdown") : setDrowp("links");
                }}>
                    <FontAwesomeIcon icon={faGripLines} className='fonticon' />
                </div>
                <div className={drowp}>
                    <NavLink className={classActive} to="/">الرئيسية</NavLink>
                    <NavLink className={classActive} to="/about">عن حجوجة</NavLink>
                    <NavLink className={classActive}
                        to={window.localStorage.getItem("user") ? "/reservations" : "/login"}
                    >حوجزات </NavLink>
                    <NavLink className={classActive} to="/menu">منيو حجوجة </NavLink>
                    <NavLink className={classActive} to="/contact">تواصل معنا</NavLink>
                </div> {/*links */}
                {

                    window.localStorage.getItem("user") ?
                        <div className="form logout">
                            <span>
                                <FontAwesomeIcon icon={faUser} className='fonticon' />
                                <p>{
                                    JSON.parse(window.localStorage.getItem("user")).name
                                }</p>
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faRightFromBracket} className='fonticon' />
                                <p>
                                    <NavLink onClick={logOut}>تسجيل خروج</NavLink>
                                </p>
                            </span>
                        </div> :
                        <div className="form loin">
                            <span className='fill'><NavLink to="/register">انشاء حساب</NavLink></span>
                            <span><NavLink to="/login">تسجيل الدخول</NavLink></span>
                        </div>
                }
            </div>
        </nav>
    );
}
export default Navlink;