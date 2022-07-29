import React, { memo, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import { data } from "../../constants";
import { sortData } from "../../helpers/sortData";
import { Formik, Form as FormikForm, Field } from "formik";
import * as Yup from "yup";
import { Input } from "../../_components";
import { format } from "date-fns";

const MoreArticles = ({ item }) => {
    const [blogItems, setBlogItems] = useState(data.blogItems.slice().sort((a, b) => sortData(a.date, b.date)));

    const itemIndex = blogItems.map((item) => item.link).indexOf(item.link);
    const prev = itemIndex - 1;
    const next = itemIndex + 1;

    const Item = ({ suffix, position }) => {
        const article = blogItems[position];
        return position === -1 || !article ? (
            <Link to={`/blog`} className={`bottom-article__item bottom-article__item_${suffix} _icon-arrow-${suffix}`}>
                To the blog page
            </Link>
        ) : (
            <Link
                to={`/blog/${article?.link}`}
                state={{ blogArticle: article }}
                className={`bottom-article__item bottom-article__item_${suffix} _icon-arrow-${suffix}`}>
                {article?.title}
            </Link>
        );
    };
    return (
        <div className="blog-article__bottom bottom-article">
            <Item suffix={"prev"} position={prev} />
            <Item suffix={"next"} position={next} />
        </div>
    );
};

const CommentsItems = ({ comments }) => {
    const commentsItems = comments.map(({ avatar, name, text, date }, i) => {
        return (
            <article key={i} className="article-comments__item">
                <div className="article-comments__avatar-ibg">
                    <img src={avatar} alt={name} />
                </div>
                <div className="article-comments__content">
                    <div className="article-comments__row">
                        <div className="article-comments__info">
                            <div className="article-comments__name">{name}</div>
                            <div className="article-comments__date">{format(date, "MMMM d, yyyy")}</div>
                        </div>
                        <button type="button" className="article-comments__reply">
                            Reply
                        </button>
                    </div>
                    <p className="article-comments__text" data-da=".article-comments__item,479.98,last">
                        {text}
                    </p>
                </div>
            </article>
        );
    });

    return commentsItems;
};

const BlogArticle = memo(function BlogArticle({ item, className, textBlock, blogPage }) {
    const { img, title, author, link, date, category, previewText, tags, content, comments } = item;

    return (
        <article className={`${className || ""} blog-article`}>
            {blogPage ? (
                <div className="blog-article__image-ibg">
                    <img src={img} alt={title} />
                </div>
            ) : (
                <Link to={`/blog/${link}`} state={{ blogArticle: item }} className="blog-article__image-ibg _link">
                    <img src={img} alt={title} />
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
                <h2 className="blog-article__label">{title}</h2>
            ) : (
                <Link to={`/blog/${link}`} state={{ blogArticle: item }} className="blog-article__label _link">
                    {title}
                </Link>
            )}
            {blogPage ? (
                <>
                    {content ? <div className="blog-article__page">{parse(content)}</div> : null}
                    {tags.length ? (
                        <div className="blog-article__tags tags tags_page">
                            <label className="tags__label">Tags</label>
                            {tags.map((item, i) => (
                                <Link key={item + i} to="/blog" state={{ tags: item }} className="tags__item">
                                    {item}
                                </Link>
                            ))}
                        </div>
                    ) : null}
                    <MoreArticles item={item} />
                    <div className="blog-article__comments article-comments">
                        <h2 className="article-comments__title">Comments:</h2>
                        <CommentsItems comments={comments} />
                        {/* {comments?.length ? "Comment" : "You can leave first comment"} */}
                        <Formik
                            initialValues={{
                                comment: "",
                                name: "",
                                email: "",
                                remember: false,
                            }}
                            validationSchema={Yup.object({
                                comment: Yup.string().min(2, "At least 2 symbols").required("Requried!"),
                                name: Yup.string().min(2, "At least 2 symbols").required("Requried!"),
                                email: Yup.string().email("Invalid Email").required("Requried!"),
                            })}
                            onSubmit={(values, { resetForm }) => {
                                values = {
                                    ...values,
                                };
                                console.log(JSON.stringify(values, null, 2));
                                resetForm();
                                // setSearch(values.search);
                            }}>
                            <FormikForm className="article-comments__form form-comments">
                                <h3 className="form-comments__title">Post a Comment</h3>
                                <div className="form-comments__body">
                                    <div className="form-comments__wrap-textarea">
                                        <Input
                                            className="form-comments__textarea"
                                            textarea
                                            placeholder="Your comment"
                                            type="text"
                                            name="comment"
                                        />
                                    </div>
                                    <div className="form-comments__wrap">
                                        <Input className="form-comments__input" placeholder="Your name" type="text" name="name" />
                                    </div>
                                    <div className="form-comments__wrap">
                                        <Input
                                            className="form-comments__input"
                                            placeholder="Your email"
                                            type="text"
                                            name="email"
                                        />
                                    </div>
                                </div>
                                <div className="form-comments__checkbox checkbox">
                                    <Field
                                        id="c_1"
                                        type="checkbox"
                                        // onClick={(e) => handleChange(e.target.value)}
                                        name="remember"
                                        className="checkbox__input"
                                    />
                                    <label htmlFor="c_1" className="checkbox__label">
                                        <span className="checkbox__text">Remember me</span>
                                    </label>
                                </div>
                                <button type="submit" className="form-comments__btn btn">
                                    Submit
                                </button>
                            </FormikForm>
                        </Formik>
                    </div>
                </>
            ) : null}

            {textBlock ? (
                <p className="blog-article__text">
                    {previewText?.length > 340 ? previewText.substring(0, 340) + "..." : previewText}
                </p>
            ) : null}
        </article>
    );
});

export default BlogArticle;
