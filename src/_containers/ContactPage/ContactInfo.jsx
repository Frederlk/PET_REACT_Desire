import React from "react";
import { Formik, Form as FormikForm } from "formik";
import * as Yup from "yup";
import { data } from "../../constants";
import { Input } from "../../_components";

const ContactInfo = () => {
    return (
        <section className="page__contact-info contact-info">
            <div className="contact-info__container">
                <h2 className="contact-info__title">Contact Us</h2>
                <div className="contact-info__body">
                    <div className="contact-info__inner">
                        <div className="contact-info__socials">
                            {data.socialLinks.map(({ link, icon }, i) => (
                                <a
                                    key={link + i}
                                    href={link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={`contact-info__social-item ${icon}`}></a>
                            ))}
                        </div>
                        <p className="contact-info__text">
                            Vexillologist vape microdosing freegan pork belly deep v direct trade cray single-origin coffee street
                            art. Viral shaman mustache master cleanse, pour-over affogato poutine copper mug marfa fanny pack
                            normcore. Lo-fi pop-up banjo portland, echo park hammock
                        </p>
                        <a href="tel:4158297934" className="contact-info__contact-item">
                            (415) 829-7934
                        </a>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.google.com/maps/place/725+Green+St,+San+Francisco,+CA+94133,+USA/@37.7990632,-122.4132697,17z/data=!3m1!4b1!4m5!3m4!1s0x808580f18d8c6ea7:0x5d7f53fb70a3a903!8m2!3d37.799059!4d-122.411081?hl=en"
                            className="contact-info__contact-item">
                            725 Green St <br />
                            San Francisco, California(CA), 94133
                        </a>
                        <a href="mailto:ouremailaddress@email.com" className="contact-info__email _icon-mail">
                            ouremailaddress@email.com
                        </a>
                        <Formik
                            initialValues={{
                                name: "",
                                email: "",
                                text: "",
                            }}
                            validationSchema={Yup.object({
                                email: Yup.string().email("Invalid Email").required("Requried!"),
                                name: Yup.string().min(2, "At least 2 symbols").required("Requried!"),
                                text: Yup.string().min(2, "At least 2 symbols").required("Requried!"),
                            })}
                            onSubmit={(values, { resetForm }) => {
                                values = {
                                    ...values,
                                };
                                resetForm();
                                console.log(JSON.stringify(values, null, 2));
                            }}>
                            <FormikForm className="contact-info__form form-contact">
                                <div className="form-contact__input-wrap">
                                    <Input className="form-contact__input" placeholder="Your name" type="text" name="name" />
                                </div>
                                <div className="form-contact__input-wrap">
                                    <Input className="form-contact__input" placeholder="Your e-mail" type="text" name="email" />
                                </div>
                                <div className="form-contact__textarea-wrap">
                                    <Input
                                        textarea
                                        className="form-contact__textarea"
                                        placeholder="Your comment"
                                        type="text"
                                        name="text"
                                    />
                                </div>
                                <button type="submit" className="form-contact__btn btn">
                                    Send
                                </button>
                            </FormikForm>
                        </Formik>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactInfo;
