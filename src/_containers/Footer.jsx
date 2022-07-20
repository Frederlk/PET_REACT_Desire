import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form as FormikForm, useField } from "formik";
import * as Yup from "yup";

const FooterImput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <input
                {...props}
                {...field}
                className={`input ${props.className || ""} ${meta.touched && meta.error ? "_error" : ""}`}
            />
            {meta.touched && meta.error ? <div className="form-checkout__error">{meta.error}</div> : null}
        </>
    );
};

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__column info-footer">
                    <h3 className="info-footer__title">Contact Us</h3>
                    <p className="info-footer__text">
                        Keffiyeh poutine etsy, paleo cray put a bird on it microdosing schlitz you probably occupy
                    </p>
                    <a href="mailto:ouremailaddress@email.com" className="info-footer__mail _icon-mail">
                        ouremailaddress@email.com
                    </a>
                    <Formik
                        initialValues={{
                            email: "",
                        }}
                        validationSchema={{
                            email: Yup.string().email("Invalid Email").required("Requried!"),
                        }}
                        onSubmit={(values) => {
                            values = {
                                ...values,
                            };
                            console.log(JSON.stringify(values, null, 2));
                        }}>
                        <FormikForm className="info-footer__form">
                            <FooterImput
                                label="Ваш E-mail"
                                className="info-footer__input input_footer"
                                placeholder="Subscribe by email"
                                type="text"
                                name="email"
                            />
                            <button type="submit" className="info-footer__btn btn">
                                Send
                            </button>
                        </FormikForm>
                    </Formik>
                </div>

                <div className="footer__column links-footer">
                    <ul className="links-footer__list">
                        <li className="links-footer__list">
                            <a href="#" target="_blank" rel="noreferrer" className="links-footer__link _icon-facebook">
                                Facebook
                            </a>
                        </li>
                        <li className="links-footer__list">
                            <a href="#" target="_blank" rel="noreferrer" className="links-footer__link _icon-inst">
                                Instagram
                            </a>
                        </li>
                        <li className="links-footer__list">
                            <a href="#" target="_blank" rel="noreferrer" className="links-footer__link _icon-pin">
                                Pinterest
                            </a>
                        </li>
                        <li className="links-footer__list">
                            <a href="#" target="_blank" rel="noreferrer" className="links-footer__link _icon-whatsapp">
                                WhatsApp
                            </a>
                        </li>
                        <li className="links-footer__list">
                            <a href="#" target="_blank" rel="noreferrer" className="links-footer__link _icon-youtube">
                                Youtube
                            </a>
                        </li>
                    </ul>
                    <ul className="links-footer__help">
                        <li className="links-footer__list">
                            <Link to="/delivery" className="links-footer__item">
                                Delivery
                            </Link>
                        </li>
                        <li className="links-footer__list">
                            <Link to="/FAQ" className="links-footer__item">
                                FAQ
                            </Link>
                        </li>
                        <li className="links-footer__list">
                            <Link to="/help" className="links-footer__item">
                                Help
                            </Link>
                        </li>
                        <li className="links-footer__list">
                            <Link to="/more-about-us" className="links-footer__item">
                                More About Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer__bottom">
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.google.com/maps/search/674+Gonzales+Drive.+Washington,+PA+15301/@40.1752046,-80.2581663,14.25z?hl=ru"
                    className="footer__adress">
                    674 Gonzales Drive. Washington, PA 15301
                </a>
            </div>
        </footer>
    );
};

export default Footer;
