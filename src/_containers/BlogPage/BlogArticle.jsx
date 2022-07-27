import React from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";

const BlogArticle = ({ item, className, textBlock }) => {
    const { img, title, author, link, date, tags, previewText } = item;

    return (
        <article className={`${className || ""} blog-article`}>
            <Link to={`/blog/${link}`} className="blog-article__image-ibg">
                <img src={img} alt={title} />
            </Link>
            <div className="blog-article__links">
                <span className="blog-article__date">{format(date, "MMMM d, yyyy")}</span>
                <span className="blog-article__line">|</span>
                <Link to="/blog" state={{ author: author }} className="blog-article__name">
                    by {author}
                </Link>
                <span className="blog-article__line">|</span>
                {tags.map((item) => (
                    <Link to="/blog" key={item} state={{ tags: item }} className="blog-article__category">
                        {item}
                    </Link>
                ))}
            </div>
            <Link to={`/blog/${link}`} className="blog-article__label">
                {title}
            </Link>
            {textBlock ? (
                <p className="blog-article__text">
                    {previewText?.length > 340 ? previewText.substring(0, 340) + "..." : previewText}
                </p>
            ) : null}
        </article>
    );
};

export default BlogArticle;
