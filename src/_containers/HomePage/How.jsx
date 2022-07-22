import React, { useEffect, useState } from "react";
import { useEvent } from "../../helpers/useEvent";

const How = () => {
    const [mobileGrid, setMobileGrid] = useState(null);

    const isMobile = () => {
        if (window.innerWidth < 767) {
            setMobileGrid(true);
        } else {
            setMobileGrid(false);
        }
    };

    useEffect(() => {
        isMobile();
    }, []);

    useEvent("resize", () => isMobile());

    return (
        <section className="page__how how">
            <div className="how__container">
                <h3 className="how__title">How it works</h3>
                {mobileGrid ? (
                    <div className="how__row-top">
                        <div className="how__column">
                            <div className="how__body">
                                <h4 className="how__top _icon-graphic">Designer Consultation</h4>
                                <div className="how__text">
                                    Kinfolk scenester authentic craft beer truffaut irony intelligentsia YOLO lomo bushwick
                                    coloring book. Semiotics man bun venmo viral cliche
                                </div>
                            </div>
                        </div>
                        <div className="how__column">
                            <div className="how__body">
                                <h4 className="how__top _icon-measur">Measurements</h4>
                                <div className="how__text">
                                    Intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche
                                </div>
                            </div>
                        </div>
                        <div className="how__column">
                            <div className="how__body">
                                <h4 className="how__top _icon-sofa">Production</h4>
                                <div className="how__text">Everyday carry actually neutra authentic kogi shabby chic</div>
                            </div>
                        </div>
                        <div className="how__column">
                            <div className="how__body">
                                <h4 className="how__top _icon-graphic">Designer Consultation</h4>
                                <div className="how__text">
                                    Kinfolk scenester authentic craft beer truffaut irony intelligentsia YOLO lomo bushwick
                                    coloring book.
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="how__row-top">
                            <div className="how__column">
                                <div className="how__body">
                                    <h4 className="how__top _icon-graphic">Designer Consultation</h4>
                                    <div className="how__text">
                                        Kinfolk scenester authentic craft beer truffaut irony intelligentsia YOLO lomo bushwick
                                        coloring book. Semiotics man bun venmo viral cliche
                                    </div>
                                </div>
                            </div>
                            <div className="how__column"></div>
                            <div className="how__column">
                                <div className="how__body">
                                    <h4 className="how__top _icon-sofa">Production</h4>
                                    <div className="how__text">Everyday carry actually neutra authentic kogi shabby chic</div>
                                </div>
                            </div>
                            <div className="how__column"></div>
                        </div>
                        <div className="how__row-bottom">
                            <div className="how__column"></div>
                            <div className="how__column">
                                <div className="how__body">
                                    <h4 className="how__top _icon-measur">Measurements</h4>
                                    <div className="how__text">
                                        Intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche
                                    </div>
                                </div>
                            </div>
                            <div className="how__column"></div>
                            <div className="how__column">
                                <div className="how__body">
                                    <h4 className="how__top _icon-graphic">Designer Consultation</h4>
                                    <div className="how__text">
                                        Kinfolk scenester authentic craft beer truffaut irony intelligentsia YOLO lomo bushwick
                                        coloring book.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default How;
