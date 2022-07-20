import React from "react";

const Header = () => {
    return (
        <header className="header">
            <div className="header__container _container">
                <div className="header__menu menu">
                    <a href="index.html" className="menu__logo">
                        <img src="img/logo.png" alt="Logo" />
                    </a>
                    <div className="menu__body">
                        <ul className="menu__list menu__list_left">
                            <li>
                                <a href="about.html" className="menu__link">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="gallery.html" className="menu__link">
                                    Gallery
                                </a>
                            </li>
                        </ul>
                        <ul className="menu__list menu__list_right">
                            <li>
                                <a href="blog.html" className="menu__link">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="contact.html" className="menu__link">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="menu__icon icon-menu">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
