import React from "react";
import { images } from "../../constants";
import { Picture } from "../../_components";

const Brands = () => {
    const { defaultImages } = images;

    return (
        <div className="page__about-brands about-brands">
            <div className="about-brands__image">
                <Picture srcWebp={defaultImages.brand01_WEBP} fallbackSrc={defaultImages.brand01} alt="Blush Life Apparel" />
            </div>
            <div className="about-brands__image">
                <Picture srcWebp={defaultImages.brand02_WEBP} fallbackSrc={defaultImages.brand02} alt="Bahnuk Design Build" />
            </div>
            <div className="about-brands__image">
                <Picture srcWebp={defaultImages.brand01_WEBP} fallbackSrc={defaultImages.brand01} alt="Blush Life Apparel" />
            </div>
            <div className="about-brands__image">
                <Picture srcWebp={defaultImages.brand02_WEBP} fallbackSrc={defaultImages.brand02} alt="Bahnuk Design Build" />
            </div>
            <div className="about-brands__image">
                <Picture srcWebp={defaultImages.brand01_WEBP} fallbackSrc={defaultImages.brand01} alt="Blush Life Apparel" />
            </div>
        </div>
    );
};

export default Brands;
