import React from "react";
import { images } from "../../constants";

const Ideas = () => {
    return (
        <section className="page__ideas ideas">
            <div className="ideas__container">
                <h3 className="ideas__title">More inspiration ideas in our blog</h3>
                <div className="ideas__row">
                    <div className="ideas__body">
                        <a href="#" className="ideas__image-ibg">
                            <img src={images.ideasImages.ideas01} alt="" />
                        </a>
                        <div className="ideas__links">
                            <span className="ideas__date">March 12, 2020</span>
                            <span className="ideas__line">|</span>
                            <a href="" className="ideas__name">
                                by Ann Summers
                            </a>
                            <span className="ideas__line">|</span>
                            <a href="" className="ideas__category">
                                Inrerior
                            </a>
                        </div>
                        <a href="" className="ideas__label">
                            Listicle actually selvage activated charcoal for the drinking vinegar{" "}
                        </a>
                    </div>
                    <div className="ideas__body">
                        <a href="#" className="ideas__image-ibg">
                            <img src={images.ideasImages.ideas02} alt="" />
                        </a>
                        <div className="ideas__links">
                            <span className="ideas__date">September 28,2020</span>
                            <span className="ideas__line">|</span>
                            <a href="" className="ideas__name">
                                by Finnagan Morningstar
                            </a>
                            <span className="ideas__line">|</span>
                            <a href="" className="ideas__category">
                                Dining room interior
                            </a>
                        </div>
                        <a href="" className="ideas__label">
                            Red selfies edison bulb four dollar toast humblebrag
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ideas;
