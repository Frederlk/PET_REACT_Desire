import React from "react";
import { images } from "../../constants";

const Brands = () => {
    return (
        <div className="page__about-brands about-brands">
            <div className="about-brands__image">
                <img src={images.brandsImages.brands01} alt="Blush Life Apparel" />
            </div>
            <div className="about-brands__image">
                <img src={images.brandsImages.brands02} alt="Bahnuk Design Build" />
            </div>
            <div className="about-brands__image">
                <img src={images.brandsImages.brands01} alt="Blush Life Apparel" />
            </div>
            <div className="about-brands__image">
                <img src={images.brandsImages.brands02} alt="Bahnuk Design Build" />
            </div>
            <div className="about-brands__image">
                <img src={images.brandsImages.brands01} alt="Blush Life Apparel" />
            </div>
        </div>
    );
};

export default Brands;
