import React, { useEffect, useState } from "react";
import { data } from "../../constants";
import BlogArticle from "./BlogArticle";
import ReactPaginate from "react-paginate";
import { sortData } from "../../helpers/sortData";
import { gotoBlock } from "../../js/files/scroll/gotoblock";

const BlogFill = () => {
    const [itemsPerPage, setItemsPerPage] = useState(2);
    const [blogItems, setBlogItems] = useState(data?.blogItems.slice().sort((a, b) => sortData(a.date, b.date)));
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    console.log(blogItems);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(blogItems.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(blogItems.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    const handlePageClick = (e) => {
        gotoBlock(".breadcrumbs");
        const newOffset = (e.selected * itemsPerPage) % blogItems.length;
        setItemOffset(newOffset);
    };

    return (
        <div className="blog-content__fill fill">
            <div className="fill__items">
                {currentItems.length
                    ? currentItems.map((item, i) => <BlogArticle key={item.link + i} textBlock item={item} />)
                    : null}
            </div>
            {pageCount < 1 ? null : (
                <ReactPaginate
                    className="fill__pagination"
                    activeLinkClassName="_active"
                    breakLabel="..."
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={2}
                    marginPagesDisplayed={1}
                    pageCount={pageCount}
                    previousLabel={<span className="prev _icon-arrow-next" />}
                    nextLabel={<span className="next _icon-arrow-next" />}
                />
            )}
        </div>
    );
};

export default BlogFill;
