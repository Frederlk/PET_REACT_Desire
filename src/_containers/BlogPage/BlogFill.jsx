import React, { useEffect, useState } from "react";
import { data } from "../../constants";
import BlogArticle from "./BlogArticle";
import ReactPaginate from "react-paginate";

const BlogFill = () => {
    const [itemsPerPage, setItemsPerPage] = useState(1);
    const [blogItems, setBlogItems] = useState([]);
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    const sortPosts = (a, b) => {
        if (a > b) return -1;
        if (a < b) return 1;
        return 0;
    };

    useEffect(() => {
        setBlogItems(
            data?.blogItems
                .slice()
                .sort((a, b) => {
                    return sortPosts(a.date, b.date);
                })
                .map((item, i) => <BlogArticle key={item.link + i} textBlock item={item} />)
        );
    }, []);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(blogItems.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(blogItems.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    const handlePageClick = (e) => {
        const newOffset = (e.selected * itemsPerPage) % blogItems.length;
        setItemOffset(newOffset);
    };

    return (
        <div className="blog-content__fill fill">
            <div className="fill__items">{blogItems}</div>
            {pageCount < 1 ? null : (
                <ReactPaginate
                    className="fill__pagination"
                    pageLinkClassName="pagging__item"
                    breakClassName="pagging__item"
                    activeLinkClassName="_active"
                    breakLabel="..."
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={2}
                    marginPagesDisplayed={1}
                    pageCount={pageCount}
                    previousLabel={<span className="_icon-arrow-next" />}
                    nextLabel={<span className="_icon-arrow-next" />}
                />
            )}
        </div>
    );
};

export default BlogFill;
