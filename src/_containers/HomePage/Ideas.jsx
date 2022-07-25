import { format } from "date-fns";
import React from "react";
import { Link } from "react-router-dom";
import { data } from "../../constants";

const Ideas = () => {
    const sortPosts = (a, b) => {
        if (a > b) return -1;
        if (a < b) return 1;
        return 0;
    };

    const ideas = data.blogItems
        .slice()
        .sort((a, b) => {
            return sortPosts(a.date, b.date);
        })
        .map(({ img, title, author, link, date, tags }, i) => {
            if (i < 2) {
                return (
                    <div key={link + i} className="ideas__body ideas-item">
                        <Link to={`/blog/${link}`} className="ideas-item__image-ibg">
                            <img src={img} alt={title} />
                        </Link>
                        <div className="ideas-item__links">
                            <span className="ideas-item__date">{format(date, "MMMM d, yyyy")}</span>
                            <span className="ideas-item__line">|</span>
                            <Link to="/blog" state={{ author: author }} className="ideas-item__name">
                                by {author}
                            </Link>
                            <span className="ideas-item__line">|</span>
                            {tags.map((item) => (
                                <Link to="/blog" key={item + i} state={{ tags: item }} className="ideas-item__category">
                                    {item}
                                </Link>
                            ))}
                        </div>
                        <Link to={`/blog/${link}`} className="ideas-item__label">
                            {title}
                        </Link>
                    </div>
                );
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
