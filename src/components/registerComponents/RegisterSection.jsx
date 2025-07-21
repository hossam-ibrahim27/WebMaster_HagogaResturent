import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faUser, faLock } from '@fortawesome/free-solid-svg-icons'; {/**icons*/ }
import "../../css/registerComponents/RegisterSection.css"
import { NavLink } from 'react-router';
import { useState } from 'react';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import app from '../../configure/Firebase';
const RegisterSection = () => {
    //* To Make Validation
    const [frName, setFrName] = useState("");
    const [scName, setScName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setpassword] = useState("");
    const [repassword, setRePassword] = useState("");

    const [acceptData, setAcceptData] = useState(false); //* To Make Validate Only When User Click Submit

    const sendData = (e) => {
        let flag = true;
        e.preventDefault();
        setAcceptData(true); //* On submit Check Validation
        if (frName.length == 0 || scName.length == 0 || email.length == 0 || phone.length == 0 || phone.length != 11 || password.length < 8 || repassword.length == 0 || password.length == 0 || repassword !== password) {
            flag = false;
        } else flag = true;
        if (flag) {
            //* Send Data
            //* Add Data To FireBase
            const addUsers = async () => {
                //* Add a new document with a generated id.
                const db = getFirestore(app);
                const docRef = await addDoc(collection(db, "users"), {
                    frName: frName,
                    scName: scName,
                    email: email,
                    phone: phone,
                    password: password,
                    password_confirmation: repassword,
                });
                console.log("Document written with ID: ", docRef.id);
                const user = {
                    name: frName + scName,
                    email: email,
                    password: password,
                    phone: phone,
                };
                window.localStorage.setItem("user", JSON.stringify(user)); //* Save Email And Passowerd To Use In login
                window.location.pathname = "/login";  //* After Register Go To login Page
            }
            addUsers();
        }
    };
    return (
        <div className="register-section">
            <div className="parent">
                <h2>مرحبًا بكم في حجوجه</h2>
                <form onSubmit={sendData}>
                    <div className='name-container'>
                        <div className='input-body'>
                            <FontAwesomeIcon icon={faUser} className='fonticon' />
                            <input type="text" name="name" placeholder="الاسم الاول" value={frName} onChange={(e) => setFrName(e.target.value)} />
                        </div>
                        <div className='input-body'>
                            <FontAwesomeIcon icon={faUser} className='fonticon' />
                            <input type="text" name="name" placeholder="الاسم الاخير" value={scName} onChange={(e) => setScName(e.target.value)} />
                        </div>
                    </div>
                    <div className='name-container'>
                        <div className='validate'>
                            {frName.length == 0 && acceptData && <p>قم بادخال الأسم الاول</p>}
                            {frName.length > 1 && acceptData && <p className='ok'>تم ادخال الاسم الاول</p>}
                        </div>
                        <div className='validate'>
                            {scName.length == 0 && acceptData && <p>قم بادخال الأسم الثاني</p>}
                            {scName.length > 1 && acceptData && <p className='ok'>تم ادخال الاسم الثاني</p>}
                        </div>
                    </div>
                    <div className='input-body'>
                        <FontAwesomeIcon icon={faEnvelope} className='fonticon' />
                        <input type="email" name="email" placeholder="البريد الالكتروني" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='validate'>
                        {email.length == 0 && acceptData && <p>قم بادخال البريد الالكتروني</p>}
                        {email.length > 1 && acceptData && <p className='ok'>تم ادخال البريد الالكتروني</p>}
                    </div>
                    <div className='input-body'>
                        <FontAwesomeIcon icon={faPhone} className='fonticon' />
                        <input type="text" name="phone" placeholder="رقم الهاتف" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className='validate'>
                        {phone.length == 0 && acceptData && <p>قم بادخال رقم الهاتف</p>}
                        {phone.length != 11 && phone.length > 0 && acceptData && <p>رقم الهاتف يجب ان يكون 11 رقم</p>}
                        {phone.length == 11 && acceptData && <p className='ok'>تم ادخال رقم الهاتف</p>}
                    </div>
                    <div className='input-body'>
                        <FontAwesomeIcon icon={faLock} className='fonticon' />
                        <input type="password" name="password" placeholder="كلمة المرور" value={password} onChange={(e) => setpassword(e.target.value)} />
                    </div>
                    <div className='validate'>
                        {password.length < 8 && acceptData && <p>كلمة المرور يجب ان تكون اقل من 8 احرف</p>}
                        {password.length >= 8 && acceptData && <p className='ok'>تم ادخال  كلمة المرور</p>}
                    </div>
                    <div className='input-body'>
                        <FontAwesomeIcon icon={faLock} className='fonticon' />
                        <input type="password" name="repassword" placeholder="تاكيد كلمة المرور" value={repassword} onChange={(e) => setRePassword(e.target.value)} />
                    </div>
                    <div className='validate'>
                        {repassword.length == 0 && password.length == 0 && acceptData && <p>لم يتم ادخال كلمة المرور</p>}
                        {repassword != password && acceptData && <p>كلمة المرور غير متطابقة</p>}
                        {repassword == password && password.length != 0 && acceptData && <p className='ok'>كلمة المرور متطابقة</p>}
                    </div>
                    <textarea placeholder="الرساله"></textarea>
                    <div className='submit-body'>
                        <input type="submit" placeholder="انشاء حساب" value="انشاء حساب" />
                        <div className='ball'></div>
                    </div>
                    <div className='switch'>
                        <span>بالفعل لديك حساب ؟</span>
                        <span><NavLink to="/login">تسجيل الدخول</NavLink></span>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default RegisterSection;