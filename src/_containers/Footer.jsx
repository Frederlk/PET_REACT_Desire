import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container _container">
                <div className="footer__content">
                    <div className="footer__column info-footer">
                        <div className="info-footer__title">Contact Us</div>
                        <div className="info-footer__text">
                            Keffiyeh poutine etsy, paleo cray put a bird on it microdosing schlitz you probably occupy
                        </div>
                        <a href="mailto:ouremailaddress@email.com" className="info-footer__mail _icon-mail">
                            ouremailaddress@email.com
                        </a>
                        <form action="#" className="info-footer__form">
                            <input
                                type="email"
                                name="form[]"
                                data-error="Error"
                                data-value="Subscribe by email"
                                className="info-footer__input input input_footer _email _req"
                            />
                            <button type="submit" className="info-footer__btn btn">
                                Send
                            </button>
                        </form>
                    </div>

                    <div className="footer__column links-footer">
                        <div className="links-footer__column">
                            <ul className="links-footer__list">
                                <li>
                                    <a href="#" className="links-footer__link _icon-facebook">
                                        Facebook
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="links-footer__link _icon-inst">
                                        Instagram
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="links-footer__link _icon-pin">
                                        Pinterest
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="links-footer__link _icon-whatsapp">
                                        WhatsApp
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="links-footer__link _icon-youtube">
                                        Youtube
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="links-footer__column">
                            <ul className="links-footer__help">
                                <li>
                                    <a href="#" className="links-footer__item">
                                        Delivery
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="links-footer__item">
                                        FAQ
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="links-footer__item">
                                        Help
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="links-footer__item">
                                        More About Us
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <a href="#" className="footer__adress">
                    674 Gonzales Drive. Washington, PA 15301
                </a>
            </div>
        </footer>
    );
};

export default Footer;
