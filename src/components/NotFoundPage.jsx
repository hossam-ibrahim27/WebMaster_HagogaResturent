import { NavLink } from "react-router";
import "../css/homeComponents/MainSection.css"
import "../css/generalComponents/NotFoundPage.css"
const NotFoundPage = () => {
    return (
        <div className="not-found main-section">
            <div className="overlay"></div>
            <div className="title">
                <p>Not Found Page | 404</p>
                <span><NavLink to="/">اذهب للصفحة الرئيسيه</NavLink></span>
            </div>
        </div>
    );
}

export default NotFoundPage;
