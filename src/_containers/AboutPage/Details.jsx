import React, { useEffect, useState } from "react";
import images from "../../constants/images";
import { InView, useInView } from "react-intersection-observer";
import { useCountUp } from "react-countup";
import { Picture } from "../../_components";

const ProgressItem = ({ title, percent }) => {
    const [width, setWidth] = useState(0);
    const countUpRef = React.useRef(null);

    const { ref, inView, entry } = useInView({
        threshold: 0,
    });

    const { start, pauseResume, reset, update } = useCountUp({
        ref: countUpRef,
        start: 0,
        end: percent,
        duration: 0.8,
        suffix: "%",
    });

    useEffect(() => {
        inView ? setWidth(percent) : setWidth(0);
        inView ? start() : reset();
    }, [inView]);

    return (
        <div ref={ref} className={`about-progress__item ${inView ? "_inView" : ""}`}>
            <div className="about-progress__top">
                <h5 className="about-progress__title">{title}</h5>
                <div className="about-progress__percents" ref={countUpRef}></div>
            </div>
            <div className="about-progress__bottom">
                <div className="about-progress__bar" style={{ width: width + "%" }}></div>
            </div>
        </div>
    );
};

const Details = () => {
    const addViewClass = (inView, entry) => {
        inView ? entry.target.classList.add("_inView") : entry.target.classList.remove("_inView");
    };

    return (
        <section className="page__about-details about-details">
            <InView
                as="div"
                triggerOnce
                threshold={0.2}
                onChange={(inView, entry) => addViewClass(inView, entry)}
                className="about-details__top top-details">
                <div className="top-details__container">
                    <div className="top-details__body">
                        <h3 className="top-details__title">Our Inspiration in details</h3>
                        <p className="top-details__text">
                            Semiotics fixie four dollar toast, next level woke scenester direct trade photo booth helvetica jean
                            shorts. Fanny pack church-key cornhole, banh mi thundercats gochujang keytar.
                        </p>
                    </div>
                </div>
            </InView>
            <div className="about-details__bottom bottom-details">
                <div className="bottom-details__container">
                    <div className="bottom-details__image">
                        <Picture srcWebp={images.chairImages.chair01_WEBP} fallbackSrc={images.chairImages.chair01} alt="Chair" />
                    </div>
                    <div className="bottom-details__progress about-progress">
                        <ProgressItem title="Design and technical drawings" percent={80} />
                        <ProgressItem title="Measurments" percent={70} />
                        <ProgressItem title="Furniture functionality analysis" percent={75} />
                        <ProgressItem title="Interior visualization" percent={40} />
                    </div>
                </div>
                <div className="bottom-details__bg-ibg">
                    <Picture srcWebp={images.defaultImages.bg_WEBP} fallbackSrc={images.defaultImages.bg} alt="Background" />
                </div>
            </div>
        </section>
    );
};

export default Details;
