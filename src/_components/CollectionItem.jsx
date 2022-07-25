import React from "react";
import { Link } from "react-router-dom";

const CollectionItem = ({ item, slider, className }) => {
    const { title, link, tags, img } = item;

    return (
        <div className={`${className || ""} collection-item`}>
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
                <img src={img} alt={title} />
            </Link>
        </div>
    );
};

export default CollectionItem;
