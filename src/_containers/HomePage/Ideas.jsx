import React from "react";
import { data } from "../../constants";
import BlogArticle from "../BlogPage/BlogArticle";

const Ideas = () => {
    const sortPosts = (a, b) => {
        if (a > b) return -1;
        if (a < b) return 1;
        return 0;
    };

    const ideas = data?.blogItems
        .slice()
        .sort((a, b) => {
            return sortPosts(a.date, b.date);
        })
        .map((item, i) => {
            if (i < 2) {
                return <BlogArticle key={item.link + i} item={item} className="ideas__body" />;
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
