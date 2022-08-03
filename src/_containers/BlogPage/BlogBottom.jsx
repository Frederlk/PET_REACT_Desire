import React, { useRef, useState } from "react";
import { Formik, Form as FormikForm, Field } from "formik";
import * as Yup from "yup";
import { Input, Picture } from "../../_components";
import parse from "html-react-parser";
import { data, images } from "../../constants";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { findNested, sortData } from "../../helpers/functions";
import { useEvent } from "../../helpers/useEvent";

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

const CommentsItems = ({ comments, handleFocus }) => {
    const Item = ({ item, reply }) => {
        const { avatar, avatarWebp, name, text, date, id, replied } = item;
        return (
            <>
                <article className="article-comments__item">
                    <div className="article-comments__row">
                        <div className="article-comments__avatar-ibg">
                            <Picture srcWebp={avatarWebp} fallbackSrc={avatar} alt={name} />
                        </div>
                        <div className="article-comments__info">
                            <div className="article-comments__name">{name}</div>
                            <div className="article-comments__date">{format(date, "MMMM d, yyyy")}</div>
                        </div>
                        <button type="button" onClick={() => handleFocus(id)} className="article-comments__reply">
                            Reply
                        </button>
                    </div>
                    <p className="article-comments__text">
                        {reply ? <span>{reply},</span> : null}
                        {text}
                    </p>
                </article>
                {replied.length ? (
                    <div className="article-comments__replied">
                        {replied.map((subItem, k) => (
                            <Item key={k} item={subItem} reply={name} />
                        ))}
                    </div>
                ) : null}
            </>
        );
    };

    const commentsItems = comments.map((item, i) => <Item key={i} item={item} />);

    return commentsItems;
};

const BlogBottom = ({ item }) => {
    const { tags, content, link, title } = item;
    const comments = data.blogItems.find((item) => item.link === link).comments;
    const [length, setLength] = useState(comments.length);
    const [localUser, setLocalUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
    const [reply, setReply] = useState(false);
    const ref = useRef(null);

    const handleFocus = (id) => {
        ref.current.focus();
        setReply(id);
    };

    useEvent("click", function (e) {
        if (
            reply !== false &&
            !e.target.activeElement &&
            !e.target.closest(".form-comments") &&
            !e.target.closest(".article-comments__reply")
        ) {
            setReply(false);
        }
    });

    const replyItem = findNested(comments, "id", reply);

    return (
        <>
            <h2 className="blog-article__label">{title}</h2>
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
                {comments.length ? (
                    <div className="article-comments__items">
                        <CommentsItems comments={comments} handleFocus={handleFocus} />
                    </div>
                ) : (
                    <div className="article-comments__leave">You can leave first comment</div>
                )}
                <Formik
                    initialValues={{
                        text: "",
                        name: localUser ? localUser.name : "",
                        email: localUser ? localUser.email : "",
                        remember: localUser ? true : false,
                    }}
                    enableReinitialize
                    validationSchema={Yup.object({
                        text: Yup.string().min(2, "At least 2 symbols").required("Requried!"),
                        name: Yup.string().min(2, "At least 2 symbols").required("Requried!"),
                        email: Yup.string().email("Invalid Email").required("Requried!"),
                    })}
                    onSubmit={(values, { resetForm }) => {
                        const comment = {
                            id: "bc681db7-252c-4c83-a0cf-137df9432e0b23" + +new Date(),
                            avatar: images.defaultImages.skeleton,
                            avatarWebp: images.defaultImages.skeletonWebp,
                            name: values.name,
                            date: new Date(),
                            text: values.text,
                            replied: [],
                        };
                        if (reply === false) {
                            comments.push(comment);
                            setLength(comments.length);
                        } else {
                            replyItem.replied.push(comment);
                            setReply(false);
                            setLength(comments.length);
                        }
                        if (values.remember) {
                            localStorage.setItem("user", JSON.stringify({ name: values.name, email: values.email }));
                            setLocalUser({ name: values.name, email: values.email });
                        } else {
                            setLocalUser(null);
                            localStorage.removeItem("user");
                        }
                        resetForm();
                    }}>
                    <FormikForm className="article-comments__form form-comments">
                        <h3 className="form-comments__title">
                            {reply ? "Post a Reply to " + replyItem?.name : "Post a Comment"}
                        </h3>
                        <div className="form-comments__body">
                            <div className="form-comments__wrap-textarea">
                                <Input
                                    refed={ref}
                                    className="form-comments__textarea"
                                    textarea
                                    placeholder={`Your comment ${reply ? "to " + replyItem?.name : ""}`}
                                    type="text"
                                    name="text"
                                />
                            </div>
                            <div className="form-comments__wrap">
                                <Input className="form-comments__input" placeholder="Your name" type="text" name="name" />
                            </div>
                            <div className="form-comments__wrap">
                                <Input className="form-comments__input" placeholder="Your email" type="text" name="email" />
                            </div>
                        </div>
                        <div className="form-comments__checkbox checkbox">
                            <Field id="c_1" type="checkbox" name="remember" className="checkbox__input" />
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
    );
};

export default BlogBottom;
