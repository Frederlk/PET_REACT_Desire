import React from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

const BlogArticle = ({ item, className, textBlock, blogPage }) => {
    const { img, title, author, link, date, category, previewText, tags, content } = item;

    return (
        <article className={`${className || ""} blog-article`}>
            <Link to={`/blog/${link}`} className="blog-article__image-ibg">
                <img src={img} alt={title} />
            </Link>
            <div className="blog-article__links">
                <span className="blog-article__date">{format(date, "MMMM d, yyyy")}</span>
                <span className="blog-article__line">|</span>
                <span className="blog-article__name">by {author}</span>
                <span className="blog-article__line">|</span>
                <Link to="/blog" state={{ category: category }} className="blog-article__category">
                    {category}
                </Link>
            </div>
            <Link to={`/blog/${link}`} className="blog-article__label">
                {title}
            </Link>
            {blogPage ? (
                <>
                    {content ? <div className="blog-article__page">{parse(content)}</div> : null}
                    {tags.length ? (
                        <div className="blog-article__tags tags">
                            <label className="tags__label">Tags</label>
                            {tags.map((item) => (
                                <span className="tags__item" key={item}>
                                    {item}
                                </span>
                            ))}
                        </div>
                    ) : null}
                    <div className="fill__bottom bottom-fill">
                        <div className="bottom-fill__more">
                            <div className="bottom-fill__slider _swiper">
                                <div className="bottom-fill__slide">
                                    <a href="#" className="bottom-fill__text">
                                        Cred selfies edison bulb four dollar toast humblebrag
                                    </a>
                                    <a href="#" className="bottom-fill__text">
                                        Semiotics fixie four dollar toast, next level
                                    </a>
                                </div>
                                <div className="bottom-fill__slide">
                                    <a href="#" className="bottom-fill__text">
                                        Semiotics fixie four dollar toast, next level
                                    </a>
                                    <a href="#" className="bottom-fill__text">
                                        Cred selfies edison
                                    </a>
                                </div>
                                <div className="bottom-fill__slide">
                                    <a href="#" className="bottom-fill__text">
                                        Cred selfies edison
                                    </a>
                                    <a href="#" className="bottom-fill__text">
                                        Cred selfies edison bulb four dollar toast humblebrag
                                    </a>
                                </div>
                            </div>
                            <div className="bottom-fill__navigation">
                                <div className="bottom-fill__navigation-arrow bottom-fill__navigation-arrow_prev _icon-arrow-prev"></div>
                                <div className="bottom-fill__navigation-arrow bottom-fill__navigation-arrow_next _icon-arrow-next"></div>
                            </div>
                        </div>
                        <div className="bottom-fill__coments coments-fill">
                            <h2 className="coments-fill__title">Comments:</h2>
                            <div className="coments-fill__body body-coments-fill">
                                <div className="body-coments-fill__coment">
                                    <div className="body-coments-fill__avatar _ibg">
                                        <img src="img/_blog/avatar.jpg" alt="" />
                                    </div>
                                    <div className="body-coments-fill__content">
                                        <div className="body-coments-fill__row">
                                            <div className="body-coments-fill__info">
                                                <div className="body-coments-fill__name">Lea Brown</div>
                                                <div className="body-coments-fill__date">August 12, 2020</div>
                                            </div>
                                            <a href="#" className="body-coments-fill__reply">
                                                Reply
                                            </a>
                                        </div>
                                        <div className="body-coments-fill__text" data-da=".body-coments-fill__coment,479,last">
                                            Tumeric tousled austin, kinfolk scenester authentic craft beer truffaut irony
                                            intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral cliche
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <form action="#" className="bottom-fill__form form-fill">
                            <h3 className="form-fill__title">Post a Comment</h3>
                            <div className="form-fill__body">
                                <textarea
                                    autoComplete="off"
                                    name="form[]"
                                    data-value="Your comment"
                                    data-error="Ошибка"
                                    className="form-fill__textarea input"></textarea>
                                <div className="form-fill__row">
                                    <input
                                        autoComplete="off"
                                        type="text"
                                        name="form[]"
                                        data-error="Ошибка"
                                        data-value="Your name"
                                        className="form-fill__input input _req"
                                    />
                                    <input
                                        autoComplete="off"
                                        type="email"
                                        name="form[]"
                                        data-error="Ошибка"
                                        data-value="Your e-mail"
                                        className="form-fill__input input _req _email"
                                    />
                                </div>
                                <label className="form-fill__checkbox">
                                    <input
                                        data-error="Ошибка"
                                        className="form-fill__checkbox-input checkbox__input"
                                        type="checkbox"
                                        value="1"
                                        name="form[]"
                                    />
                                    <span className="form-fill__checkbox-text checkbox__text">
                                        <span>Remember me</span>
                                    </span>
                                </label>
                                <label className="checkbox"></label>
                                <button type="submit" className="form-fill__btn btn">
                                    Submit
                                </button>
                            </div>
                        </form>
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
};

export default BlogArticle;
