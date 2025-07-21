import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'; {/**icons*/ }
import "../../css/registerComponents/RegisterSection.css"
import { NavLink } from 'react-router';
import { useState } from 'react';

const LoginSection = () => {
    //* To Make Validation
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");

    const [acceptData, setAcceptData] = useState(false); //* To Make Validate Only When User Click Submit
    const [isValidated, setisValidated] = useState(false);
    const [isValidatedEmail, setisValidatedEmail] = useState(false);
    const [isValidatedOk, setisValidatedOk] = useState(false);
    const [noRegister, setnoRegister] = useState(false);

    const sendData = (e) => {
        let flag = true;
        e.preventDefault();
        setAcceptData(true); //* On submit Check Validation
        setisValidated(false);
        if (email.length == 0 || password.length < 8 || password.length == 0) {
            flag = false;
        } else flag = true;
        if (flag) {
            const dataFromLocalStorgeJson = window.localStorage.getItem("user");
            const dataFromLocalStorgeObject = JSON.parse(dataFromLocalStorgeJson);
            console.log(dataFromLocalStorgeObject);
            if (dataFromLocalStorgeObject == null) {
                console.log("Added Acount");
                setnoRegister(true);
            } else {
                if (dataFromLocalStorgeObject.email == email && dataFromLocalStorgeObject.password == password) {
                    console.log("OK");
                    setisValidatedOk(true);
                    setTimeout(() => {
                        window.location.pathname = "/";
                    }, 2000);
                }
                if (dataFromLocalStorgeObject.email != email) {
                    setisValidatedEmail(true);
                }
                if (dataFromLocalStorgeObject.password != password) {
                    setisValidated(true);
                }
            }
        }
    }
    return (
        <div>
            <div className="register-section">
                <div className="parent">
                    <h2>مرحبًا بكم  من جديد</h2>
                    {/* {
                        noRegister && <NoHaveAccount />
                    } */}
                    <form onSubmit={sendData}>
                        <div className='input-body'>
                            <FontAwesomeIcon icon={faEnvelope} className='fonticon' />
                            <input type="email" name="email" placeholder="البريد الالكتروني" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='validate'>
                            {email.length == 0 && acceptData && isValidatedEmail == false && noRegister == false && <p>قم بادخال البريد الالكتروني</p>}
                            {email.length > 1 && acceptData && isValidatedEmail == false && isValidatedOk == false && noRegister == false && <p className='ok'>تم ادخال البريد الالكتروني</p>}
                            {isValidatedEmail == true && <p>غير صحيح البريد الالكتروني</p>}
                            {isValidatedOk && <p className='ok'>تم ادخال البريد الالكتروني بنجاح</p>}
                            {noRegister && <p>قم بانشاء حساب اولا</p>}
                        </div>
                        <div className='input-body'>
                            <FontAwesomeIcon icon={faLock} className='fonticon' />
                            <input type="password" name="password" placeholder="كلمة المرور" value={password} onChange={(e) => setpassword(e.target.value)} />
                        </div>
                        <div className='validate'>
                            {password.length < 8 && acceptData && isValidated == false && noRegister == false && <p>كلمة المرور يجب ان تكون اقل من 8 احرف</p>}
                            {password.length >= 8 && acceptData && isValidated == false && isValidatedOk == false && noRegister == false && <p className='ok'>تم ادخال  كلمة المرور</p>}
                            {isValidated == true && <p>غير صحيح كلمة المرور</p>}
                            {isValidatedOk && <p className='ok'>تم ادخال كلمة المرور بنجاح</p>}
                            {noRegister && <p>قم بانشاء حساب اولا</p>}
                        </div>
                        <div className='submit-body'>
                            <input type="submit" placeholder="تسجيل الدخول" value="تسجيل الدخول" />
                            <div className='ball'></div>
                        </div>
                        <div className='switch'>
                            <span>ليس لديك حساب ؟</span>
                            <span><NavLink to="/register">انشاء حساب</NavLink></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginSection;
