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
            {meta.touched && meta.error ? <div className="input__error">{meta.error}</div> : null}
        </>
    );
};

const Footer = () => {
    const socialLinks = [
        {
            title: "Facebook",
            link: "#Facebook",
            icon: "_icon-facebook",
        },
        {
            title: "Instagram",
            link: "#Instagram",
            icon: "_icon-inst",
        },
        {
            title: "Pinterest",
            link: "#Pinterest",
            icon: "_icon-pin",
        },
        {
            title: "WhatsApp",
            link: "#WhatsApp",
            icon: "_icon-whatsapp",
        },
        {
            title: "Youtube",
            link: "#Youtube",
            icon: "_icon-youtube",
        },
    ];
    const helpLinks = [
        {
            title: "Delivery",
            link: "/delivery",
        },
        {
            title: "FAQ",
            link: "/FAQ",
        },
        {
            title: "Help",
            link: "/help",
        },
        {
            title: "More About Us",
            link: "/more-about-us",
        },
    ];

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
                        validationSchema={Yup.object({
                            email: Yup.string().email("Invalid Email").required("Requried!"),
                        })}
                        onSubmit={(values, { resetForm }) => {
                            values = {
                                ...values,
                            };
                            resetForm();
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
                        {socialLinks.map(({ title, link, icon }, i) => (
                            <li key={title + i} className="links-footer__item">
                                <a href={link} target="_blank" rel="noreferrer" className={`links-footer__link ${icon}`}>
                                    {title}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <ul className="links-footer__list">
                        {helpLinks.map(({ title, link }, i) => (
                            <li key={title + i} className="links-footer__item">
                                <Link to={link} className="links-footer__link">
                                    {title}
                                </Link>
                            </li>
                        ))}
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
