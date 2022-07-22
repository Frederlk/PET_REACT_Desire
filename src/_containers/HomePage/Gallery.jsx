import React, { useCallback, useEffect, useRef, useState } from "react";
import { data } from "../../constants";
import LightGallery from "lightgallery/react";
import lightGallery from "lightgallery";

const Gallery = () => {
    const filters = ["Bedroom furniture", "Living room furniture", "Office furniture", "Dining room futniture", "Chair"];
    const [filter, setFilter] = useState("Living room furniture");
    const lightGallery = useRef(null);
    const [galleryItems, setGalleryItems] = useState(data.galleryItems.slice());

    const onInit = useCallback((detail) => {
        if (detail) {
            lightGallery.current = detail.instance;
        }
    }, []);

    const getItems = useCallback(() => {
        return galleryItems.map(({ img, alt }, i) => {
            if (i < 5) {
                return (
                    <a data-src={img} key={alt + i} className={`gallery__item-ibg g g_${i}`}>
                        <img src={img} alt={alt} />
                    </a>
                );
            }
        });
    }, [galleryItems]);

    useEffect(() => {
        lightGallery.current.refresh();
    }, [galleryItems]);

    return (
        <section className="page__gallery gallery gallery_home">
            <div className="gallery__container">
                <nav className="gallery__nav">
                    {filters.map((item, i) => (
                        <button
                            type="button"
                            key={item + i}
                            onClick={() => {
                                setFilter(item);
                                setGalleryItems(data.galleryItems.slice().filter((item) => item.categories.includes(filter)));
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
                licenseKey="7EC452A9-0CFD441C-BD984C7C-17C8456E">
                {getItems()}
            </LightGallery>
        </section>
    );
};

export default Gallery;
