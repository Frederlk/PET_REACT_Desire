import React from "react";

const Picture = ({ srcWebp, alt, fallbackSrc, mediaType = "image/webp", noLazy, ...delegated }) => {
    return (
        <picture>
            <source srcSet={srcWebp} type={mediaType} />
            <img src={fallbackSrc} alt={alt} {...delegated} loading={noLazy ? "eager" : "lazy"} />
        </picture>
    );
};

export default Picture;
