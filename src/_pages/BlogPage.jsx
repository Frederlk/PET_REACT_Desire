import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { Breadcrumbs } from "../_components";
import { BlogFill, BlogSide } from "../_containers";

const BlogPage = () => {
    let categoryLocation = useLocation();
    const [category, setCategory] = useState(categoryLocation?.state?.category || null);
    const [tag, setTag] = useState(null);
    const [search, setSearch] = useState("");
    return (
        <>
            <Helmet>
                <meta name="Desire - Blog" content="Desire - Blog" />
                <title>Desire - Blog</title>
            </Helmet>

            <Breadcrumbs className="breadcrumbs_blog" noBg />

            <div className="page__blog-content blog-content">
                <div className="blog-content__container">
                    {/* <SingleFill passedState={{ tag, setTag, category, setCategory, search, setSearch }} /> */}
                    <BlogFill passedState={{ tag, setTag, category, setCategory, search, setSearch }} />
                    <BlogSide passedState={{ tag, setTag, category, setCategory, search, setSearch }} />
                </div>
            </div>
        </>
    );
};

export default BlogPage;
