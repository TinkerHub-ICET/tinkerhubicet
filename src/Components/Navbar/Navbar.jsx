import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
export default function Navbar() {
    return (
        <>
            <div className="navbar">
                <img className="navBrand" src={logo} alt="logo" />
                <div className="navbar-right">
                    <div className="navbar-item">
                        <NavLink to="/" className="navLink">About Us</NavLink>
                    </div>
                    <div className="navbar-item">
                        <NavLink to="/" className="navLink">Our Team</NavLink>
                    </div>
                    <div className="navbar-item">
                        <NavLink to="/" className="navLink">Reach Us</NavLink>
                    </div>
                </div>
                <FontAwesomeIcon icon={solid('Bars')} className="hamBurgerIcon"/>

            </div>
            
        </>
    )
}