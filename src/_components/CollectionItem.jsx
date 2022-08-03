import React from "react";
import { Link } from "react-router-dom";
import Picture from "./Picture";

const CollectionItem = ({ item, slider, className }) => {
    const { title, link, tags, category, img, imgWebp } = item;
    return (
        <article className={`${className || ""} collection-item`}>
            <div className="collection-item__info">
                <Link to={`/blog/${link}`} state={{ blogArticle: item }} className="collection-item__title">
                    {title?.length > 35 ? title.substring(0, 35) + "..." : title}
                </Link>
                {slider ? null : (
                    <div className="collection-item__text">
                        <span className="collection-item__tag">
                            <Link to="/blog" state={{ category: category }}>
                                {category}
                            </Link>
                        </span>
                        <span className="collection-item__tag">
                            <Link to="/blog" state={{ tags: tags[0] }}>
                                {tags[0]}
                            </Link>
                        </span>
                    </div>
                )}
            </div>
            <Link to={`/blog/${link}`} state={{ blogArticle: item }} className="collection-item__image-ibg">
                <Picture srcWebp={imgWebp} fallbackSrc={img} alt={title} />
            </Link>
        </article>
    );
};

export default CollectionItem;
