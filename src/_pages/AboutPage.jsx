import React from "react";

const AboutPage = () => {
    return (
        <>
            <section className="page__breadcrumbs breadcrumbs breadcrumbs_about">
                <div className="breadcrumbs__container _container">
                    <nav className="breadcrumbs__navigation">
                        <ul className="breadcrumbs__list">
                            <li>
                                <a href="index.html" className="breadcrumbs__link">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="about.html" className="breadcrumbs__link">
                                    About
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="breadcrumbs__bg">
                    <h1 className="breadcrumbs__title _container">About Us</h1>
                    <div className="breadcrumbs__image _ibg">
                        <img src="img/about/01.jpg" alt="" />
                    </div>
                </div>
            </section>
            <section className="page__about-info about-info">
                <div className="about-info__container _container">
                    <h2 className="about-info__title">
                        Balance in the simple through an informed marriage of design, functional and craft
                    </h2>
                    <div className="about-info__row">
                        <div className="about-info__text">
                            <p>
                                Vexillologist vape microdosing freegan pork belly deep v direct trade cray single-origin coffee
                                street art. Viral shaman mustache master cleanse, pour-over affogato poutine copper mug marfa
                                fanny pack normcore. Lo-fi pop-up banjo portland, echo park hammock chillwave literally
                                post-ironic ramps subway tile kitsch. Shaman tumblr fixie echo park street art. Enamel pin
                                vaporware wayfarers, organic succulents hella sustainable cardigan.
                            </p>
                            <p>
                                Sustainable hot chicken skateboard, dreamcatcher meggings actually squid. Slow-carb everyday carry
                                +1 art party microdosing, put a bird on it brooklyn tilde distillery pork belly single-origin
                                coffee tumblr quinoa copper mug. Affogato cold-pressed unicorn, viral intelligentsia leggings raw
                                denim kombucha tote bag messenger bag chambray vape coloring book scenester. Activated charcoal
                                wayfarers church-key tote bag synth brunch. Retro cornhole
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="page__about-video about-video">
                <div className="about-video__video-row _video">
                    {/* <video className="about-video__video" preload=" metadata" controls>
						<source src="videos/video.mp4">
						<source src="videos/video.webm">
					</video> */}
                </div>
                <div className="about-video__thumbnail ">
                    <div className="about-video__cover _ibg">
                        <img src="img/about/02.jpg" alt="" />
                    </div>
                    <div className="about-video__control">
                        <div className="about-video__control-icon">
                            <img src="img/icons/video.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <section className="page__about-details about-details">
                <div className="about-details__top">
                    <div className="about-details__container _container">
                        <div className="about-details__top-body">
                            <h2 className="about-details__title">Our Inspiration in details</h2>
                            <div className="about-details__text">
                                Semiotics fixie four dollar toast, next level woke scenester direct trade photo booth helvetica
                                jean shorts. Fanny pack church-key cornhole, banh mi thundercats gochujang keytar.
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
            <div className="page__about-brands about-brands">
                <div className="about-brands__row">
                    <div className="about-brands__column">
                        <img src="img/about/brands/01.png" alt="" />
                    </div>
                    <div className="about-brands__column">
                        <img src="img/about/brands/02.png" alt="" />
                    </div>
                    <div className="about-brands__column">
                        <img src="img/about/brands/01.png" alt="" />
                    </div>
                    <div className="about-brands__column">
                        <img src="img/about/brands/02.png" alt="" />
                    </div>
                    <div className="about-brands__column">
                        <img src="img/about/brands/01.png" alt="" />
                    </div>
                </div>
            </div>
            <section className="page__collection collection">
                <div className="collection__body body-collection">
                    <div className="body-collection__column">
                        <div className="body-collection__info">
                            <a href="#" className="body-collection__title">
                                Truffaut literally trust
                            </a>
                            <div className="body-collection__text">
                                <a href="" className="body-collection__link">
                                    Living room furntiture
                                </a>
                                <span>|</span>
                                <a href="" className="body-collection__category">
                                    Chair
                                </a>
                            </div>
                        </div>
                        <div className="body-collection__image _ibg">
                            <img src="img/about/content/01.jpg" alt="" />
                        </div>
                    </div>
                    <div className="body-collection__column">
                        <div className="body-collection__info">
                            <a href="#" className="body-collection__title">
                                Truffaut literally trust
                            </a>
                            <div className="body-collection__text">
                                <a href="" className="body-collection__link">
                                    Living room furntiture
                                </a>
                                <span>|</span>
                                <a href="" className="body-collection__category">
                                    Chair
                                </a>
                            </div>
                        </div>
                        <div className="body-collection__image _ibg">
                            <img src="img/about/content/04.jpg" alt="" />
                        </div>
                    </div>
                    <div className="body-collection__column">
                        <div className="body-collection__info">
                            <a href="#" className="body-collection__title">
                                Truffaut literally trust literally
                            </a>
                            <div className="body-collection__text">
                                <a href="" className="body-collection__link">
                                    Living furntiture
                                </a>
                                <span>|</span>
                                <a href="" className="body-collection__category">
                                    Chouch
                                </a>
                            </div>
                        </div>
                        <div className="body-collection__image _ibg">
                            <img src="img/about/content/02.jpg" alt="" />
                        </div>
                    </div>
                    <div className="body-collection__column">
                        <div className="body-collection__info">
                            <a href="#" className="body-collection__title">
                                Truffaut trust
                            </a>
                            <div className="body-collection__text">
                                <a href="" className="body-collection__link">
                                    room furntiture Living room furntiture
                                </a>
                                <span>|</span>
                                <a href="" className="body-collection__category">
                                    Bed
                                </a>
                            </div>
                        </div>
                        <div className="body-collection__image _ibg">
                            <img src="img/about/content/03.jpg" alt="" />
                        </div>
                    </div>
                    <div className="body-collection__column">
                        <div className="body-collection__info">
                            <a href="#" className="body-collection__title">
                                Truffaut trust literally trust Truffaut
                            </a>
                            <div className="body-collection__text">
                                <a href="" className="body-collection__link">
                                    Living room furntiture
                                </a>
                                <span>|</span>
                                <a href="" className="body-collection__category">
                                    Working Table
                                </a>
                            </div>
                        </div>
                        <div className="body-collection__image _ibg">
                            <img src="img/about/content/05.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutPage;
