import React, { memo, useEffect } from "react";
import { data } from "../../constants";
import { Link } from "react-router-dom";
import { Formik, Form as FormikForm } from "formik";
import { Input } from "../../_components";
import { format } from "date-fns";
import dynamicAdaptive from "../../helpers/dynamic_adapt";
import { sortData } from "../../helpers/functions";

const BlogSide = memo(function BlogSide({ passedState }) {
    const { article, tag, setTag, category, setCategory, search, setSearch } = passedState;

    useEffect(() => {
        dynamicAdaptive();
    }, []);

    const recentPosts = data?.blogItems
        .slice()
        .sort((a, b) => {
            return sortData(a.date, b.date);
        })
        .map((item, i) => {
            const { title, link, date, author } = item;
            if (i < 3)
                return (
                    <article key={link + i} className="sidebar__post">
                        <Link to={`/blog/${link}`} state={{ blogArticle: item }} className="sidebar__post-text">
                            {title}
                        </Link>
                        <div className="sidebar__post-bottom">
                            <span className="sidebar__post-date">{format(date, "MMMM d, yyyy")}</span>
                            <span className="sidebar__line">|</span>
                            <span className="blog-article__name">by {author}</span>
                        </div>
                    </article>
                );
        });

    const categories = data.filters.categories.map((item, i) => {
        const classNames = `sidebar__item ${category === item ? "_active" : ""}`;
        const length = data.blogItems.slice().filter((post) => post.category === item).length;
        return article ? (
            <Link to="/blog" state={{ category: item }} key={item + i} className={classNames}>
                {item} ({length})
            </Link>
        ) : (
            <li onClick={() => (category === item ? setCategory(null) : setCategory(item))} key={item + i} className={classNames}>
                {item} ({length})
            </li>
        );
    });

    const tags = data.filters.tags.map((item, i) => {
        const classNames = `tags__item ${tag === item ? "_active" : ""}`;
        return article ? (
            <Link to="/blog" state={{ tags: item }} key={item + i} className={classNames}>
                {item}
            </Link>
        ) : (
            <li onClick={() => (tag === item ? setTag(null) : setTag(item))} key={item + i} className={classNames}>
                {item}
            </li>
        );
    });

    return (
        <aside className="blog-content__sidebar sidebar">
            <Formik
                initialValues={{
                    search: search || "",
                }}
                enableReinitialize
                onSubmit={(values) => {
                    setSearch(values.search);
                    values.search = "";
                }}>
                <FormikForm data-da=".blog-content__container,991.98,0" className="sidebar-form">
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
                <div className="sidebar__tags tags">
                    <h4 className="tags__label">Tags</h4>
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
});

export default BlogSide;
