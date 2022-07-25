import React from "react";
import { data, images } from "../../constants";
import { CollectionItem } from "../../_components";

const Collection = () => {
    const collectionItems = data.collectionItems.map((item, i) => {
        if (i < 5) return <CollectionItem key={item.link + i} item={item} className="collection__item" />;
    });

    return (
        <section className="page__collection collection">
            <div className="collection__top top-collection">
                <div className="top-collection__container">
                    <h3 className="top-collection__title">Furniture new collection</h3>
                    <p className="top-collection__text">
                        Deep v you probably haven&apos;t heard of them banh mi synth actually affogato. Aesthetic lyft ethical
                        drinking vinegar austint
                    </p>
                </div>
            </div>
            {collectionItems.length ? <div className="collection__body">{collectionItems}</div> : null}
            <div className="collection__bottom bottom-collection">
                <div className="bottom-collection__container">
                    <div className="bottom-collection__content">
                        <h3 className="bottom-collection__title">
                            Aesthetic <br />
                            ethical drinking
                        </h3>
                        <div className="bottom-collection__text">
                            Deep v you probably haven&apos;t heard of them banh mi synth actually affogato. Artlyft ethical the
                            one drinking vinegar austint
                        </div>
                    </div>
                </div>
                <div className="bottom-collection__image-ibg">
                    <img src={images.collectionImages.collection06} alt="Background" />
                </div>
            </div>
        </section>
    );
};

export default Collection;
