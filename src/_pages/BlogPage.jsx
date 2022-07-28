import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Breadcrumbs } from "../_components";
import { BlogFill, BlogSide } from "../_containers";

const BlogPage = () => {
    let categoryLocation = useLocation();
    const [category, setCategory] = useState(categoryLocation.state.category || null);
    const [tag, setTag] = useState(null);
    const [search, setSearch] = useState("");
    return (
        <>
            <Breadcrumbs className="breadcrumbs_blog" noBg />

            <div className="page__blog-content blog-content">
                <div className="blog-content__container">
                    <BlogFill passedState={{ tag, setTag, category, setCategory, search, setSearch }} />
                    <BlogSide passedState={{ tag, setTag, category, setCategory, search, setSearch }} />
                </div>
            </div>
        </>
    );
};

export default BlogPage;
