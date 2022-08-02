import React, { useCallback, useEffect, useRef, useState } from "react";
import { data } from "../constants";
import LightGallery from "lightgallery/react";
import Picture from "./Picture";

const Gallery = ({ galleryPage }) => {
    const filters = data.filters.tags;
    const galleryStartItems = data.galleryItems.slice();
    const lightGallery = useRef(null);
    const [filter, setFilter] = useState(null);
    const [filteredItems, setFilteredItems] = useState(galleryStartItems);

    const onInit = useCallback((detail) => {
        if (detail) {
            lightGallery.current = detail.instance;
        }
    }, []);

    const onHandleFilter = (category) => {
        if (category !== filter) {
            setFilter(category);
            setFilteredItems(galleryStartItems.filter((item) => item.categories.includes(category)));
        } else {
            setFilter(null);
            setFilteredItems(galleryStartItems);
        }
    };

    const getItems = useCallback(() => {
        return filteredItems.map(({ img, imgWebp, alt }, i) => {
            const item = (
                <a href={img} key={alt + i} className="gallery__item-ibg">
                    <Picture srcWebp={imgWebp} fallbackSrc={img} alt={alt} />
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
