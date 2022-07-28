import React, { useEffect } from "react";
import { data } from "../../constants";
import { Link } from "react-router-dom";
import { Formik, Form as FormikForm } from "formik";
import { Input } from "../../_components";
import { format } from "date-fns";
import dynamicAdaptive from "../../js/libs/dynamic_adapt.js";

const BlogSide = ({ passedState }) => {
    const { tag, setTag, category, setCategory, setSearch } = passedState;

    useEffect(() => {
        dynamicAdaptive();
    }, []);

    const categories = data.blogSide.categories.map((item, i) => (
        <li
            onClick={() => (category === item ? setCategory(null) : setCategory(item))}
            key={item + i}
            className={`sidebar__item ${category === item ? "_active" : ""}`}>
            {item} ({data.blogItems.slice().filter((post) => post.category === item).length})
        </li>
    ));

    const sortPosts = (a, b) => {
        if (a > b) return -1;
        if (a < b) return 1;
        return 0;
    };

    const recentPosts = data?.blogItems
        .slice()
        .sort((a, b) => {
            return sortPosts(a.date, b.date);
        })
        .map(({ title, link, date, author }, i) => {
            if (i < 3)
                return (
                    <article key={link} className="sidebar__post">
                        <Link to={`/blog/${link + i}`} className="sidebar__post-text">
                            {title}
                        </Link>
                        <div className="sidebar__post-bottom">
                            <span className="sidebar__post-date">{format(date, "MMMM d, yyyy")}</span>
                            <span className="sidebar__line">|</span>
                            <Link to="/blog" state={{ author: author }} className="blog-article__name">
                                by {author}
                            </Link>
                        </div>
                    </article>
                );
        });

    const tags = data.blogSide.tags.map((item, i) => (
        <li
            onClick={() => (tag === item ? setTag(null) : setTag(item))}
            key={item + i}
            className={`sidebar__tags-tag ${tag === item ? "_active" : ""}`}>
            {item}
        </li>
    ));

    return (
        <aside className="blog-content__sidebar sidebar">
            <Formik
                initialValues={{
                    search: "",
                }}
                onSubmit={(values) => {
                    setSearch(values.search);
                }}>
                <FormikForm data-da=".blog-content__fill,767.98,0" className="sidebar-form">
                    <Input className="sidebar-form__input" placeholder="Search" type="text" name="search" />
                    <button type="submit" className="sidebar-form__btn _icon-lupa"></button>
                </FormikForm>
            </Formik>
            {categories.length ? (
                <div className="sidebar__categories">
                    <h4 className="sidebar__label">Categories</h4>
                    <ul className="sidebar__list">{categories}</ul>
                </div>
            ) : null}
            {recentPosts.length ? (
                <div className="sidebar__posts">
                    <h4 className="sidebar__label">Recent Posts</h4>
                    {recentPosts}
                </div>
            ) : null}
            {tags.length ? (
                <div className="sidebar__tags">
                    <h4 className="sidebar__label">Tags</h4>
                    {tags}
                </div>
            ) : null}
            <div className="sidebar__social">
                {data.socialLinks.map(({ title, link, icon }, i) => (
                    <a
                        href={link}
                        key={title + i}
                        target="_blank"
                        rel="noreferrer"
                        className={`sidebar__social-item ${icon}`}></a>
                ))}
            </div>
        </aside>
    );
};

export default BlogSide;
