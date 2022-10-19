import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import BlogBottom from "./BlogBottom";
import { Picture } from "../../_components";

const BlogArticle = ({ item, className, textBlock, blogPage }) => {
    const { img, imgWebp, title, author, link, date, category, previewText } = item;

    return (
        <article className={`${className || ""} blog-article`}>
            {blogPage ? (
                <div className="blog-article__image-ibg">
                    <Picture srcWebp={imgWebp} fallbackSrc={img} alt={title} />
                </div>
            ) : (
                <Link to={`/blog/${link}`} state={{ blogArticle: item }} className="blog-article__image-ibg _link">
                    <Picture srcWebp={imgWebp} fallbackSrc={img} alt={title} />
                </Link>
            )}
            <div className="blog-article__links">
                <span className="blog-article__date">{format(date, "MMMM d, yyyy")}</span>
                <span className="blog-article__line">|</span>
                <span className="blog-article__name">by {author}</span>
                <span className="blog-article__line">|</span>
                <Link to="/blog" state={{ category: category }} className="blog-article__category">
                    {category}
                </Link>
            </div>
            {blogPage ? (
                <BlogBottom item={item} />
            ) : (
                <Link to={`/blog/${link}`} state={{ blogArticle: item }} className="blog-article__label _link">
                    {title}
                </Link>
            )}

            {textBlock ? (
                <p className="blog-article__text">
                    {previewText?.length > 340 ? previewText.substring(0, 340) + "..." : previewText}
                </p>
            ) : null}
        </article>
    );
};

export default BlogArticle;
