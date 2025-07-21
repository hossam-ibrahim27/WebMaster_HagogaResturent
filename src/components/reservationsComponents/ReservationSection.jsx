import ArabicCalender from "./ArabicCalender";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faUser, faPerson } from '@fortawesome/free-solid-svg-icons'; {/**icons*/ }
import "../../css/reservationsComponents/ReservationSection.css"
import { NavLink } from "react-router";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import app from "../../configure/Firebase";
import { useState } from "react";
const ReservationSection = () => {
    //* To Make Validation
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [phone, setPhone] = useState("");
    //* Validate ChecBox
    const [isChecked, setIsChecked] = useState(false);
    const handleChange = () => {
        setIsChecked(!isChecked);
    };
    const sendData = (e) => {
        e.preventDefault();
        if (isChecked) {
            //* Send Data
            //* Add Data To FireBase
            const addReservate = async () => {
                //* Add a new document with a generated id.
                const db = getFirestore(app);
                const docRef = await addDoc(collection(db, "resevations"), {
                    name: name,
                    number: number,
                    phone: phone,
                });
                console.log("Document written with ID: ", docRef.id);
                function goToHome() {
                    //* After Creat resevations in DataBase Make Delay 1s
                    setTimeout(() => {
                        window.location.pathname = "/";  //* After Register Go To login Page
                    }, 1000);
                }
                await goToHome(); //* Wait Creat resevations in DataBase
            }
            addReservate();
        } else {
            console.log("No Checked");
        }
    };

    return (
        <div className="reservation-section">
            <div className="container">
                <div className="title">
                    <h2>نموذج الحجز</h2>
                    <div className="line"></div>
                </div>
                <div className="content">
                    <div>
                        <p>نحن على استعداد لمساعدتك في إجراء الحجز عبر الإنترنت لتوفير وقتك ومالك :</p>
                        {isChecked == false && <p className="read-privacy">قم بقراءة سياسه الخصوصيه الخاصه بنا قبل اتمام الحجز</p>}
                        {isChecked && <p className="read-privacy-ok">انت موافق عل سياسه الخصوصيه الخاصه بنا</p>}
                    </div>
                    <div className="order">
                        <ArabicCalender />
                        <form onSubmit={sendData}>
                            <label htmlFor="number">عدد المقاعد التي تريد حجزها</label>
                            <div className="input-body">
                                <FontAwesomeIcon icon={faPerson} className='fonticon' />
                                <input type="number" id="number" placeholder="عدد المقاعد التي تريد حجزها"
                                    onChange={(e) => setNumber(e.target.value)}
                                />
                            </div>
                            <label htmlFor="reservationName">اسم الحجز</label>
                            <div className="input-body">
                                <FontAwesomeIcon icon={faUser} className='fonticon' />
                                <input type="text" id="reservationName" placeholder="اسم الحجز"
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <label htmlFor="phone">رقم الهاتف</label>
                            <div className="input-body">
                                <FontAwesomeIcon icon={faPhone} className='fonticon' />
                                <input type="text" id="phone" placeholder="مثال 01098765432"
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                            <div className='privacy-body'>
                                <input type="checkbox" checked={isChecked} onChange={handleChange} />
                                <p>اوافق علي</p>
                                <p><NavLink to="/termsAndConditions">سياسيه الخصوصيه</NavLink></p>
                            </div>
                            <div className='submit-body'>
                                <input type="submit" placeholder="التالي" value="التالي" />
                                <div className='ball'></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReservationSection;
