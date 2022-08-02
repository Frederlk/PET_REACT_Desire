import React from "react";
import { Link } from "react-router-dom";
import Picture from "./Picture";

const CollectionItem = ({ item, slider, className }) => {
    const { title, link, tags, img, imgWebp } = item;

    return (
        <article className={`${className || ""} collection-item`}>
            <div className="collection-item__info">
                <Link to={link} className="collection-item__title">
                    {title}
                </Link>
                {slider ? null : (
                    <div className="collection-item__text">
                        {tags.map(({ tag, link }, k) => (
                            <span key={link + k} className="collection-item__tag">
                                <Link to="/blog" state={{ tags: item }}>
                                    {tag}
                                </Link>
                            </span>
                        ))}
                    </div>
                )}
            </div>
            <Link to={link} className="collection-item__image-ibg">
                <Picture srcWebp={imgWebp} fallbackSrc={img} alt={title} />
            </Link>
        </article>
    );
};

export default CollectionItem;
