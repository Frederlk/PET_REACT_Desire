import React from "react";
import { Helmet } from "react-helmet";
import { Breadcrumbs, Gallery } from "../_components";

const GalleryPage = () => {
    return (
        <>
            <Helmet>
                <meta name="Desire - Gallery" content="Desire - Gallery" />
                <title>Desire - Gallery</title>
            </Helmet>

            <Breadcrumbs />
            <Gallery galleryPage />
        </>
    );
};

export default GalleryPage;
