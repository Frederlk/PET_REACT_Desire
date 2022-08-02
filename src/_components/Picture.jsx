import React from "react";

const Picture = ({ srcWebp, alt, fallbackSrc, mediaType = "image/webp", ...delegated }) => {
    return (
        <picture>
            <source srcSet={srcWebp} type={mediaType} />
            <img src={fallbackSrc} alt={alt} {...delegated} />
        </picture>
    );
};

export default Picture;
