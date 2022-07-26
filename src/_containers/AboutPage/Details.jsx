import React from "react";

const Details = () => {
    return (
        <section className="page__about-details about-details">
            <div className="about-details__top">
                <div className="about-details__container _container">
                    <div className="about-details__top-body">
                        <h2 className="about-details__title">Our Inspiration in details</h2>
                        <div className="about-details__text">
                            Semiotics fixie four dollar toast, next level woke scenester direct trade photo booth helvetica jean
                            shorts. Fanny pack church-key cornhole, banh mi thundercats gochujang keytar.
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-details__bottom _anim-items">
                <div className="about-details__body">
                    <div className="about-details__outer _container">
                        <div className="about-details__column about-details-image">
                            <div className="about-details-image__body">
                                <img src="img/_home/slider/chair.png" alt="" />
                            </div>
                        </div>
                        <div className="about-details__column about-progress">
                            <div className="about-progress__inner">
                                <div className="about-progress__progress">
                                    <div className="about-progress__item ">
                                        <div className="about-progress__top">
                                            <div className="about-progress__title">Design and technical drawings</div>
                                            <div className="about-progress__percents" id="percent">
                                                80%
                                            </div>
                                        </div>
                                        <div className="about-progress__bottom">
                                            <div className="about-progress__bar" data-progress="80"></div>
                                        </div>
                                    </div>
                                    <div className="about-progress__item">
                                        <div className="about-progress__top">
                                            <div className="about-progress__title">Measurments</div>
                                            <div className="about-progress__percents">70%</div>
                                        </div>
                                        <div className="about-progress__bottom">
                                            <div className="about-progress__bar" data-progress="70"></div>
                                        </div>
                                    </div>
                                    <div className="about-progress__item">
                                        <div className="about-progress__top">
                                            <div className="about-progress__title">Furniture functionality analysis</div>
                                            <div className="about-progress__percents">75%</div>
                                        </div>
                                        <div className="about-progress__bottom">
                                            <div className="about-progress__bar" data-progress="75"></div>
                                        </div>
                                    </div>
                                    <div className="about-progress__item">
                                        <div className="about-progress__top">
                                            <div className="about-progress__title">Interior visualization</div>
                                            <div className="about-progress__percents">40%</div>
                                        </div>
                                        <div className="about-progress__bottom">
                                            <div className="about-progress__bar" data-progress="40"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-details__bg _ibg">
                    <img src="img/_home/slider/main_slider.jpg" alt="" />
                </div>
            </div>
        </section>
    );
};

export default Details;
