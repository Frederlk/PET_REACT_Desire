import React from "react";

const ContactPage = () => {
    return (
        <>
            <section className="page__breadcrumbs breadcrumbs breadcrumbs_contact breadcrumbs_no-bg">
                <div className="breadcrumbs__container _container">
                    <nav className="breadcrumbs__navigation">
                        <ul className="breadcrumbs__list">
                            <li>
                                <a href="index.html" className="breadcrumbs__link">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="blog.html" className="breadcrumbs__link">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
            <div className="page__map" id="map"></div>
            <section className="page__contact-info contact-info">
                <div className="contact-info__container _container">
                    <div className="contact-info__title">Contact Us</div>
                    <div className="contact-info__body">
                        <div className="contact-info__inner">
                            <div className="contact-info__socials">
                                <a href="" className="contact-info__social-item _icon-facebook"></a>
                                <a href="" className="contact-info__social-item _icon-inst"></a>
                                <a href="" className="contact-info__social-item _icon-pin"></a>
                                <a href="" className="contact-info__social-item _icon-whatsapp"></a>
                                <a href="" className="contact-info__social-item _icon-youtube"></a>
                            </div>
                            <div className="contact-info__text">
                                Vexillologist vape microdosing freegan pork belly deep v direct trade cray single-origin coffee
                                street art. Viral shaman mustache master cleanse, pour-over affogato poutine copper mug marfa
                                fanny pack normcore. Lo-fi pop-up banjo portland, echo park hammock
                            </div>
                            <div className="contact-info__contacts">
                                <a href="tel:4158297934" className="contact-info__contact-item">
                                    (415) 829-7934
                                </a>
                                <a href="#" className="contact-info__contact-item">
                                    725 Green St <br />
                                    San Francisco, California(CA), 94133
                                </a>
                            </div>
                            <a href="mailto:ouremailaddress@email.com" className="contact-info__email _icon-mail">
                                ouremailaddress@email.com
                            </a>
                            <form action="#" className="contact-info__form form-contact">
                                <div className="form-contact__body">
                                    <div className="form-contact__row">
                                        <input
                                            autoComplete="off"
                                            type="text"
                                            name="form[]"
                                            data-error="Ошибка"
                                            data-value="Your name"
                                            className="form-contact__input input _req"
                                        />
                                        <input
                                            autoComplete="off"
                                            type="email"
                                            name="form[]"
                                            data-error="Ошибка"
                                            data-value="Your e-mail"
                                            className="form-contact__input input _req _email"
                                        />
                                    </div>
                                    <textarea
                                        autoComplete="off"
                                        name="form[]"
                                        data-value="Your comment"
                                        data-error="Ошибка"
                                        className="form-contact__textarea input"></textarea>
                                    <label className="checkbox"></label>
                                    <button type="submit" className="form-contact__btn btn">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <div className="page__contact-etc etc-contact">
                <div className="etc-contact__slider _swiper">
                    <div className="etc-contact__column">
                        <div className="etc-contact__info">
                            <a href="#" className="etc-contact__title">
                                Truffaut literally trust
                            </a>
                        </div>
                        <div className="etc-contact__image _ibg">
                            <img src="img/_contacts/01.jpg" alt="" />
                        </div>
                    </div>
                    <div className="etc-contact__column">
                        <div className="etc-contact__info">
                            <a href="#" className="etc-contact__title">
                                Truffaut literally trust
                            </a>
                        </div>
                        <div className="etc-contact__image _ibg">
                            <img src="img/_contacts/02.jpg" alt="" />
                        </div>
                    </div>
                    <div className="etc-contact__column">
                        <div className="etc-contact__info">
                            <a href="#" className="etc-contact__title">
                                Truffaut literally trust
                            </a>
                        </div>
                        <div className="etc-contact__image _ibg">
                            <img src="img/_contacts/03.jpg" alt="" />
                        </div>
                    </div>
                    <div className="etc-contact__column">
                        <div className="etc-contact__info">
                            <a href="#" className="etc-contact__title">
                                Truffaut literally trust
                            </a>
                        </div>
                        <div className="etc-contact__image _ibg">
                            <img src="img/_contacts/04.jpg" alt="" />
                        </div>
                    </div>
                    <div className="etc-contact__column">
                        <div className="etc-contact__info">
                            <a href="#" className="etc-contact__title">
                                Truffaut literally trust
                            </a>
                        </div>
                        <div className="etc-contact__image _ibg">
                            <img src="img/_contacts/05.jpg" alt="" />
                        </div>
                    </div>
                    <div className="etc-contact__column">
                        <div className="etc-contact__info">
                            <a href="#" className="etc-contact__title">
                                Truffaut literally trust
                            </a>
                        </div>
                        <div className="etc-contact__image _ibg">
                            <img src="img/_contacts/06.jpg" alt="" />
                        </div>
                    </div>
                    <div className="etc-contact__column">
                        <div className="etc-contact__info">
                            <a href="#" className="etc-contact__title">
                                Truffaut literally trust
                            </a>
                        </div>
                        <div className="etc-contact__image _ibg">
                            <img src="img/_contacts/07.jpg" alt="" />
                        </div>
                    </div>
                    <div className="etc-contact__column">
                        <div className="etc-contact__info">
                            <a href="#" className="etc-contact__title">
                                Truffaut literally trust
                            </a>
                        </div>
                        <div className="etc-contact__image _ibg">
                            <img src="img/_contacts/08.jpg" alt="" />
                        </div>
                    </div>
                    <div className="etc-contact__column">
                        <div className="etc-contact__info">
                            <a href="#" className="etc-contact__title">
                                Truffaut literally trust
                            </a>
                        </div>
                        <div className="etc-contact__image _ibg">
                            <img src="img/_contacts/09.jpg" alt="" />
                        </div>
                    </div>
                    <div className="etc-contact__column">
                        <div className="etc-contact__info">
                            <a href="#" className="etc-contact__title">
                                Truffaut literally trust
                            </a>
                        </div>
                        <div className="etc-contact__image _ibg">
                            <img src="img/_contacts/10.jpg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="etc-contact__pagination"></div>
            </div>
        </>
    );
};

export default ContactPage;
