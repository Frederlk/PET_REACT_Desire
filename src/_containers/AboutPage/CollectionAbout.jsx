import React from "react";
import { data } from "../../constants";
import { CollectionItem } from "../../_components";

const CollectionAbout = () => {
    const collectionItems = data.blogItems.map((item, i) => {
        if (i < 5) return <CollectionItem key={item.link + i} item={item} className="collection__item" />;
    });
    return (
        <section className="page__collection collection collection_about">
            {collectionItems.length ? <div className="collection__body">{collectionItems}</div> : null}
        </section>
    );
};

export default CollectionAbout;
