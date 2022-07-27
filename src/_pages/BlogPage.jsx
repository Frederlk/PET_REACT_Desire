import React from "react";
import { Breadcrumbs } from "../_components";
import { BlogFill, BlogSide } from "../_containers";

const BlogPage = () => {
    return (
        <>
            <Breadcrumbs className="breadcrumbs_blog" noBg />

            <div className="page__blog-content blog-content">
                <div className="blog-content__container">
                    <BlogFill />
                    <BlogSide />
                </div>
            </div>
        </>
    );
};

export default BlogPage;
