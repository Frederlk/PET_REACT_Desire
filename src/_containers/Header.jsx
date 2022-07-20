import React from "react";
import { NavLink, Link } from "react-router-dom";
import { images } from "../constants";

const Header = () => {
    return (
        <header data-lp className="header">
            <div className="header__container">
                <div className="header__menu menu">
                    <Link to="/" className="menu__logo">
                        <img src={images.defaultImages.logo} alt="Logo" />
                    </Link>
                    <nav className="menu__body">
                        <ul className="menu__list menu__list_left">
                            <li className="menu__item">
                                <NavLink to="/about" className="menu__link">
                                    About
                                </NavLink>
                            </li>
                            <li className="menu__item">
                                <NavLink to="/gallery" className="menu__link">
                                    Gallery
                                </NavLink>
                            </li>
                        </ul>
                        <ul className="menu__list menu__list_right">
                            <li className="menu__item">
                                <NavLink to="/blog" className="menu__link">
                                    Blog
                                </NavLink>
                            </li>
                            <li className="menu__item">
                                <NavLink to="/contact" className="menu__link">
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <button type="button" className="header__icon icon-menu">
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    );
};

export default Header;
