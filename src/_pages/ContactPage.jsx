import React from "react";
import { Helmet } from "react-helmet";
import { Breadcrumbs } from "../_components";
import { ContactEtc, ContactInfo } from "../_containers";

const ContactPage = () => {
    return (
        <>
            <Helmet>
                <meta name="Desire - Contacts" content="Desire - Contacts" />
                <title>Desire - Contacts</title>
            </Helmet>

            <Breadcrumbs noBg />
            <iframe
                className="page__map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.6151058067267!2d-122.411081!3d37.799059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580f18d8c6ea7%3A0x5d7f53fb70a3a903!2s725%20Green%20St%2C%20San%20Francisco%2C%20CA%2094133%2C%20USA!5e0!3m2!1sen!2sby!4v1658764228452!5m2!1sen!2sby"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            <ContactInfo />
            <ContactEtc />
        </>
    );
};

export default ContactPage;
