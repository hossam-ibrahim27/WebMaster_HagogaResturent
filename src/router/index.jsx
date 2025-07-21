import { createBrowserRouter, createRoutesFromElements, Route, Routes, } from "react-router";
import HomePage from "../components/HomePage";
import ContactPage from "../components/ContactPage";
import AboutPage from "../components/AboutPage";
import MenuePage from "../components/MenuePage";
import Register from "../components/generalComponents/Register";
import Login from "../components/generalComponents/Login";
import ReservationsPage from "../components/ReservationsPage";
import TermsAndConditionsPage from "../components/TermsAndConditionsPage";
import NotFoundPage from "../components/NotFoundPage";



const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/reservations" element={<ReservationsPage />} />
            <Route path="/menu" element={<MenuePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/termsAndConditions" element={<TermsAndConditionsPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </>
    )
);
export default router;