import React from "react";
import { Collection, Home } from "../_containers";

const HomePage = () => {
    return (
        <>
            <Home />
            <Collection />
            <section className="page__how how">
                <div className="how__container _container">
                    <h3 className="how__title">How it works</h3>
                    <div className="how__row-top">
                        <div className="how__column">
                            <div className="how__body">
                                <div className="how__top _icon-graphic">Designer Consultation</div>
                                <div className="how__text">
                                    Kinfolk scenester authentic craft beer truffaut irony intelligentsia YOLO lomo bushwick
                                    coloring book. Semiotics man bun venmo viral cliche
                                </div>
                            </div>
                        </div>
                        <div className="how__column" data-da=".how__row-bottom,767,2"></div>
                        <div className="how__column">
                            <div className="how__body">
                                <div className="how__top _icon-sofa">Production</div>
                                <div className="how__text">Everyday carry actually neutra authentic kogi shabby chic</div>
                            </div>
                        </div>
                        <div className="how__column" data-da=".how__row-bottom,767,4"></div>
                    </div>
                    <div className="how__row-bottom">
                        <div className="how__column"></div>
                        <div className="how__column" data-da=".how__row-top,767,2">
                            <div className="how__body">
                                <div className="how__top _icon-measur">Measurements</div>
                                <div className="how__text">
                                    Intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche
                                </div>
                            </div>
                        </div>
                        <div className="how__column"></div>
                        <div className="how__column" data-da=".how__row-top,767,4">
                            <div className="how__body">
                                <div className="how__top _icon-mail">Designer Consultation</div>
                                <div className="how__text">
                                    Kinfolk scenester authentic craft beer truffaut irony intelligentsia YOLO lomo bushwick
                                    coloring book.{" "}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="page__gallery gallery gallery_home _tabs">
                <div className="gallery__top">
                    <div className="gallery__container _container">
                        <nav className="gallery__nav">
                            <div className="gallery__tab-link _tabs-item">Bedroom furniture</div>
                            <div className="gallery__tab-link _tabs-item _active">Living room furniture</div>
                            <div className="gallery__tab-link _tabs-item">Office furniture</div>
                            <div className="gallery__tab-link _tabs-item">Dining room futniture</div>
                            <div className="gallery__tab-link _tabs-item">Chair</div>
                        </nav>
                    </div>
                </div>
                <div className="gallery__tabs-body tabs-body">
                    <div className="tabs-body__body _tabs-block _gallery">
                        <div className="tabs-body__content">
                            <div className="tabs-body__column tabs-body__column_first">
                                <a href="img/_home/gallery/02.jpg" className="tabs-body__item-big _ibg">
                                    <img src="img/_home/gallery/02.jpg" alt="" />
                                </a>
                            </div>
                            <div className="tabs-body__column tabs-body__column_second">
                                <div className="tabs-body__cover">
                                    <a href="img/_home/gallery/05.jpg" className="tabs-body__item _ibg">
                                        <img src="img/_home/gallery/05.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="tabs-body__cover">
                                    <a href="img/_home/gallery/03.jpg" className="tabs-body__item _ibg">
                                        <img src="img/_home/gallery/03.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="tabs-body__cover">
                                    <a href="img/_home/gallery/01.jpg" className="tabs-body__item _ibg">
                                        <img src="img/_home/gallery/01.jpg" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tabs-body__body _tabs-block _gallery _active">
                        <div className="tabs-body__content">
                            <div className="tabs-body__column tabs-body__column_first">
                                <a href="img/_home/gallery/01.jpg" className="tabs-body__item-big _ibg">
                                    <img src="img/_home/gallery/01.jpg" alt="" />
                                </a>
                            </div>
                            <div className="tabs-body__column tabs-body__column_second">
                                <div className="tabs-body__cover">
                                    <a href="img/_home/gallery/02.jpg" className="tabs-body__item _ibg">
                                        <img src="img/_home/gallery/02.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="tabs-body__cover">
                                    <a href="img/_home/gallery/03.jpg" className="tabs-body__item _ibg">
                                        <img src="img/_home/gallery/03.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="tabs-body__cover">
                                    <a href="img/_home/gallery/04.jpg" className="tabs-body__item _ibg">
                                        <img src="img/_home/gallery/04.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="tabs-body__cover">
                                    <a href="img/_home/gallery/05.jpg" className="tabs-body__item _ibg">
                                        <img src="img/_home/gallery/05.jpg" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tabs-body__body _tabs-block _gallery">
                        <div className="tabs-body__content">
                            <div className="tabs-body__column tabs-body__column_first">
                                <a href="img/_home/gallery/03.jpg" className="tabs-body__item-big _ibg">
                                    <img src="img/_home/gallery/03.jpg" alt="" />
                                </a>
                            </div>
                            <div className="tabs-body__column tabs-body__column_second">
                                <div className="tabs-body__cover">
                                    <a href="img/_home/gallery/05.jpg" className="tabs-body__item _ibg">
                                        <img src="img/_home/gallery/05.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="tabs-body__cover">
                                    <a href="img/_home/gallery/01.jpg" className="tabs-body__item _ibg">
                                        <img src="img/_home/gallery/01.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="tabs-body__cover">
                                    <a href="img/_home/gallery/04.jpg" className="tabs-body__item _ibg">
                                        <img src="img/_home/gallery/04.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="tabs-body__cover">
                                    <a href="img/_home/gallery/02.jpg" className="tabs-body__item _ibg">
                                        <img src="img/_home/gallery/02.jpg" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tabs-body__body _tabs-block _gallery">
                        <div className="tabs-body__content">
                            <div className="tabs-body__column tabs-body__column_first">
                                <a href="img/_home/gallery/01.jpg" className="tabs-body__item-big _ibg">
                                    <img src="img/_home/gallery/01.jpg" alt="" />
                                </a>
                            </div>
                            <div className="tabs-body__column tabs-body__column_second">
                                <div className="tabs-body__cover">
                                    <a href="img/_home/gallery/04.jpg" className="tabs-body__item _ibg">
                                        <img src="img/_home/gallery/04.jpg" alt="" />
                                    </a>
                                </div>
                                <div className="tabs-body__cover">
                                    <a href="img/_home/gallery/05.jpg" className="tabs-body__item _ibg">
                                        <img src="img/_home/gallery/05.jpg" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tabs-body__body _tabs-block _gallery">
                        <div className="tabs-body__content">
                            <div className="tabs-body__column tabs-body__column_first">
                                <a href="img/_home/gallery/01.jpg" className="tabs-body__item-big _ibg">
                                    <img src="img/_home/gallery/01.jpg" alt="" />
                                </a>
                            </div>
                            <div className="tabs-body__column tabs-body__column_second"></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="page__ideas ideas">
                <div className="ideas__container _container">
                    <h3 className="ideas__title">More inspiration ideas in our blog</h3>
                    <div className="ideas__row">
                        <div className="ideas__column">
                            <div className="ideas__body">
                                <a href="#" className="ideas__image _ibg">
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
                                <a href="#" className="ideas__image _ibg">
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