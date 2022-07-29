import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { Breadcrumbs } from "../_components";
import { BlogArticle, BlogFill, BlogSide } from "../_containers";

const BlogPage = () => {
    let { state } = useLocation();
    const [category, setCategory] = useState(null);
    const [tag, setTag] = useState(null);
    const [search, setSearch] = useState("");
    const [article, setArticle] = useState(null);

    useEffect(() => {
        setCategory(state?.category || null);
        setTag(state?.tags || null);
        setArticle(state?.blogArticle || null);
    }, [state?.tags, state?.category, state?.blogArticle]);

    return (
        <>
            <Helmet>
                <meta name="Desire - Blog" content="Desire - Blog" />
                <title>Desire - Blog</title>
            </Helmet>

            <Breadcrumbs article={article} className="breadcrumbs_blog" noBg />

            <div className="page__blog-content blog-content">
                <div className="blog-content__container">
                    {article ? (
                        <BlogArticle item={article} blogPage />
                    ) : (
                        <BlogFill passedState={{ tag, setTag, category, setCategory, search, setSearch }} />
                    )}
                    <BlogSide passedState={{ tag, setTag, category, setCategory, search, setSearch }} />
                </div>
            </div>
        </>
    );
};

export default BlogPage;
