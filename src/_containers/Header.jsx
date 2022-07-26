import React from "react";
import { NavLink, Link } from "react-router-dom";
import { images } from "../constants";
import { Picture } from "../_components";

const Header = () => {
    return (
        <header data-lp className="header">
            <div className="header__container">
                <div className="header__menu menu">
                    <Link to="/" className="menu__logo">
                        <Picture
                            srcWebp={images.defaultImages.logo_WEBP}
                            fallbackSrc={images.defaultImages.logo}
                            alt="Desire - Logo"
                        />
                    </Link>
                    <nav className="menu__body">
                        <ul className="menu__list">
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
                        <ul className="menu__list">
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
