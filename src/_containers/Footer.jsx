import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form as FormikForm } from "formik";
import * as Yup from "yup";
import { data } from "../constants";
import { Input } from "../_components";

const Footer = () => {
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
            link: "/about",
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
                            <Input
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
                        {data.socialLinks.map(({ title, link, icon }, i) => (
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
