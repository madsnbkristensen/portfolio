import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/portfolio-logo.svg";
import "./Navigation.css"; // Create a CSS file for styling

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the menu
    const toggleMenu = () => {
        // Check the screen width before opening the menu
        if (window.innerWidth < 768) {
            setIsMenuOpen(!isMenuOpen);
        }
    };

    // Use useEffect to close the menu when the screen width becomes greater than or equal to 768px
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768 && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        // Add event listener to listen for window resize
        window.addEventListener("resize", handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [isMenuOpen]);

    return (
        <header>
            <img className="logo" src={logo} alt="logo" />
            <button className={`burger-menu-button ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
                <span className={`bar bar-white ${isMenuOpen ? "cross" : ""}`}></span>
                <span className={`bar bar-green ${isMenuOpen ? "cross" : ""}`}></span>
                <span className={`bar bar-red ${isMenuOpen ? "cross" : ""}`}></span>
            </button>
            <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>

                <NavLink className="nav-link" to="/" onClick={toggleMenu}>
                    Home
                </NavLink>
                <NavLink className="nav-link" to="/about" onClick={toggleMenu}>
                    About me
                </NavLink>
                <NavLink className="nav-link" to="/projects" onClick={toggleMenu}>
                    Projects
                </NavLink>
                <NavLink className="nav-link" to="/contact" onClick={toggleMenu}>
                    Contact
                </NavLink>
            </nav>
        </header>
    );
}
