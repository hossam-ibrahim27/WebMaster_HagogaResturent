import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'; {/**icons*/ }
import "../../css/generalComponents/UpButton.css"
import { useState } from 'react';
const UpButton = () => {
    const [togleUp, setToggleUp] = useState("")
    window.onscroll = () => {
        window.scrollY >= 500 ? setToggleUp("up-button") : setToggleUp("hidden-button");
    }
    return (
        <div>
            <span className={togleUp} onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                <FontAwesomeIcon icon={faAngleDoubleUp} className='fonticon' />
            </span>
        </div>
    );
}

export default UpButton;
