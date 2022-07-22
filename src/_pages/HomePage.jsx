import React from "react";
import { Collection, Gallery, Home, How, Ideas } from "../_containers";

const HomePage = () => {
    return (
        <>
            <Home />
            <Collection />
            <How />
            <Gallery />
            <Ideas />
        </>
    );
};

export default HomePage;
