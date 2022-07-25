import React from "react";
import Helmet from "react-helmet";
import { Gallery } from "../_components";
import { Collection, Home, How, Ideas } from "../_containers";

const HomePage = () => {
    return (
        <>
            <Helmet>
                <meta name="Desire" content="Desire" />
                <title>Desire</title>
            </Helmet>

            <Home />
            <Collection />
            <How />
            <Gallery />
            <Ideas />
        </>
    );
};

export default HomePage;
