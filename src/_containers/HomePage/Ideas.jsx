import React from "react";
import { data } from "../../constants";
import { sortData } from "../../helpers/functions";
import BlogArticle from "../BlogPage/BlogArticle";

const Ideas = () => {
    const ideas = data?.blogItems
        .slice()
        .sort((a, b) => {
            return sortData(a.date, b.date);
        })
        .map((item, i) => {
            if (i < 2) {
                return <BlogArticle key={item.link + i} item={item} textBlock className="ideas__body" />;
            }
        });

    return (
        <section className="page__ideas ideas">
            <div className="ideas__container">
                <h3 className="ideas__title">More inspiration ideas in our blog</h3>
                <div className="ideas__row">{ideas}</div>
            </div>
        </section>
    );
};

export default Ideas;
