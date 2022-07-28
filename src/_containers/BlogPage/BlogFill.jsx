import React, { useEffect, useState } from "react";
import { data } from "../../constants";
import BlogArticle from "./BlogArticle";
import ReactPaginate from "react-paginate";
import { sortData } from "../../helpers/sortData";
import { gotoBlock } from "../../js/files/scroll/gotoblock";

const BlogFill = ({ passedState }) => {
    const { tag, setTag, category, setCategory, search, setSearch } = passedState;

    const [itemsPerPage, setItemsPerPage] = useState(2);
    const [defaultItems, setDefaultItems] = useState(data?.blogItems.slice().sort((a, b) => sortData(a.date, b.date)));
    const [blogItems, setBlogItems] = useState(defaultItems);
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        const filterItems = (tag, category, search) => {
            let items = defaultItems;
            if (category !== null) {
                items = items.filter((item) => item.category === category);
            }
            if (tag !== null) {
                items = items.filter((item) => item.tags.includes(tag));
            }
            if (search !== "") {
                items = items.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()));
            }
            setItemOffset(0);
            return items;
        };
        setBlogItems(filterItems(tag, category, search));
    }, [category, tag, search]);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(blogItems.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(blogItems.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, blogItems]);

    const handlePageClick = (e) => {
        gotoBlock(".breadcrumbs");
        const newOffset = (e.selected * itemsPerPage) % blogItems.length;
        setItemOffset(newOffset);
    };

    return (
        <div className="blog-content__fill fill">
            <div className="fill__items">
                {currentItems.length ? (
                    currentItems.map((item, i) => <BlogArticle key={item.link + i} textBlock item={item} />)
                ) : (
                    <div className="fill__empty">
                        <p>Unfortunately, we did not find articles on such filtering...</p>
                        <button
                            type="button"
                            onClick={() => {
                                setTag(null);
                                setCategory(null);
                                setSearch("");
                            }}
                            className="btn">
                            Reset filtration
                        </button>
                    </div>
                )}
            </div>
            {pageCount <= 1 ? null : (
                <ReactPaginate
                    className="fill__pagination"
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
