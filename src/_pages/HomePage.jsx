import React from "react";
import { Collection, Gallery, Home, How } from "../_containers";

const HomePage = () => {
    return (
        <>
            <Home />
            <Collection />
            <How />
            <Gallery />
            <section className="page__ideas ideas">
                <div className="ideas__container">
                    <h3 className="ideas__title">More inspiration ideas in our blog</h3>
                    <div className="ideas__row">
                        <div className="ideas__column">
                            <div className="ideas__body">
                                <a href="#" className="ideas__image-ibg">
                                    <img src="img/_home/content/07.jpg" alt="" />
                                </a>
                                <div className="ideas__links">
                                    <a href="" className="ideas__date">
                                        March 12, 2020
                                    </a>
                                    <span>|</span>
                                    <a href="" className="ideas__name">
                                        by Ann Summers
                                    </a>
                                    <span>|</span>
                                    <a href="" className="ideas__category">
                                        Inrerior
                                    </a>
                                </div>
                                <a href="" className="ideas__label">
                                    Listicle actually selvage activated charcoal for the drinking vinegar{" "}
                                </a>
                            </div>
                        </div>
                        <div className="ideas__column">
                            <div className="ideas__body">
                                <a href="#" className="ideas__image-ibg">
                                    <img src="img/_home/content/08.jpg" alt="" />
                                </a>
                                <div className="ideas__links">
                                    <a href="" className="ideas__date">
                                        September 28,2020
                                    </a>
                                    <span>|</span>
                                    <a href="" className="ideas__name">
                                        by Finnagan Morningstar
                                    </a>
                                    <span>|</span>
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
                </div>
            </section>
        </>
    );
};

export default HomePage;
