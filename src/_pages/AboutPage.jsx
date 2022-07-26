import React from "react";
import { Helmet } from "react-helmet";
import { images } from "../constants";
import { Breadcrumbs } from "../_components";
import { Brands, CollectionAbout, Details, Video } from "../_containers";

const AboutPage = () => {
    return (
        <>
            <Helmet>
                <meta name="Desire - About Us" content="Desire - About Us" />
                <title>Desire - About Us</title>
            </Helmet>

            <Breadcrumbs title="About Us" className="breadcrumbs_about" img={images.defaultImages.aboutBg} />

            <Video />
            <Details />
            <Brands />
            <CollectionAbout />
        </>
    );
};

export default AboutPage;
