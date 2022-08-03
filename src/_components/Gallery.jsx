import React, { useCallback, useEffect, useRef, useState } from "react";
import { data } from "../constants";
import LightGallery from "lightgallery/react";
import Picture from "./Picture";
import { getRandomInt } from "../helpers/functions";

const Gallery = ({ galleryPage }) => {
    const filters = data.filters.tags;
    const galleryStartItems = data.blogItems.slice();
    const lightGallery = useRef(null);
    const [filter, setFilter] = useState(null);
    const [filteredItems, setFilteredItems] = useState(galleryStartItems);

    const onInit = useCallback((detail) => {
        if (detail) {
            lightGallery.current = detail.instance;
        }
    }, []);

    const onHandleFilter = (tag) => {
        if (tag !== filter) {
            setFilter(tag);
            setFilteredItems(galleryStartItems.filter((item) => item.tags.includes(tag)));
        } else {
            setFilter(null);
            setFilteredItems(galleryStartItems);
        }
    };

    const getItems = useCallback(() => {
        if (filteredItems.length) {
            return filteredItems.map(({ img, imgWebp, title }, i) => {
                const item = (
                    <a href={img} key={title + getRandomInt(1, 999)} className="gallery__item-ibg">
                        <Picture srcWebp={imgWebp} fallbackSrc={img} alt={title} />
                    </a>
                );

                if (!galleryPage) {
                    if (i < 5) {
                        return item;
                    }
                } else {
                    return item;
                }
            });
        } else {
            <div className="empty">
                <p>Unfortunately, we did not find pictures on such filtering...</p>
                <button
                    type="button"
                    onClick={() => {
                        setFilter(null);
                        setFilteredItems(galleryStartItems);
                    }}
                    className="btn">
                    Reset filtration
                </button>
            </div>;
        }
    }, [filteredItems]);

    useEffect(() => {
        lightGallery.current.refresh();
    }, [filteredItems]);

    return (
        <section className={`page__gallery gallery ${galleryPage ? "gallery_page" : ""}`}>
            <div className="gallery__container">
                <nav className="gallery__nav">
                    {filters.map((item, i) => (
                        <button
                            type="button"
                            key={item + i}
                            onClick={() => {
                                onHandleFilter(item);
                            }}
                            className={`gallery__tab-link ${filter === item ? "_active" : ""}`}>
                            {item}
                        </button>
                    ))}
                </nav>
            </div>
            <LightGallery
                onInit={onInit}
                speed={500}
                elementClassNames="gallery__body"
                licenseKey={process.env.REACT_APP_LIGHTGALLERY_API_KEY}>
                {getItems()}
            </LightGallery>
        </section>
    );
};

export default Gallery;
