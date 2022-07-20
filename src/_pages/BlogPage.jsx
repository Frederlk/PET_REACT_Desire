import React from "react";

const BlogPage = () => {
    return (
        <>
            {" "}
            <section className="page__breadcrumbs breadcrumbs breadcrumbs_blog breadcrumbs_no-bg">
                <div className="breadcrumbs__container _container">
                    <nav className="breadcrumbs__navigation">
                        <ul className="breadcrumbs__list">
                            <li>
                                <a href="index.html" className="breadcrumbs__link">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="blog.html" className="breadcrumbs__link">
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
            <div className="page__blog-content blog-content">
                <div className="blog-content__container _container">
                    <div className="blog-content__fill fill">
                        <section className="fill__item">
                            <div className="ideas__body">
                                <a href="blog_single.html" className="ideas__image _ibg">
                                    <img src="img/_blog/01.jpg" alt="" />
                                </a>
                                <div className="ideas__links">
                                    <a href="" className="ideas__date">
                                        August 15, 2020
                                    </a>
                                    <span>|</span>
                                    <a href="" className="ideas__name">
                                        by Ann Summers
                                    </a>
                                    <span>|</span>
                                    <a href="" className="ideas__category">
                                        Bedroom Furniture
                                    </a>
                                </div>
                                <a href="blog_single.html" className="ideas__label">
                                    Red selfies edison bulb four dollar toast humblebrag for the furniture
                                </a>
                                <div className="ideas__text">
                                    Everyday carry actually neutra authentic kogi shabby chic migas small batch craft beer.
                                    Literally williamsburg tote bag farm-to-table mustache ugh deep v irony. Af man bun copper mug
                                    iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring book yuccie woke.
                                    Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table
                                </div>
                            </div>
                        </section>
                        <section className="fill__quote quote">
                            <div className="quote__body">
                                <div className="quote__label">
                                    “Simplicity is not the goal. It is the by-product of a good idea and modest expectations”
                                </div>
                                <div className="quote__author">Paul Rand</div>
                            </div>
                        </section>
                        <section className="fill__item">
                            <div className="ideas__body">
                                <a href="blog_single.html" className="ideas__image _ibg">
                                    <img src="img/_blog/02.jpg" alt="" />
                                </a>
                                <div className="ideas__links">
                                    <a href="" className="ideas__date">
                                        August 12, 2020
                                    </a>
                                    <span>|</span>
                                    <a href="" className="ideas__name">
                                        by Lux Morningstar
                                    </a>
                                    <span>|</span>
                                    <a href="" className="ideas__category">
                                        Design
                                    </a>
                                </div>
                                <a href="blog_single.html" className="ideas__label">
                                    Authentic kogi shabby chic
                                </a>
                            </div>
                        </section>
                        <section className="fill__item">
                            <div className="ideas__body">
                                <a href="blog_single.html" className="ideas__image _ibg">
                                    <img src="img/_blog/03.jpg" alt="" />
                                </a>
                                <div className="ideas__links">
                                    <a href="" className="ideas__date">
                                        August 18, 2020
                                    </a>
                                    <span>|</span>
                                    <a href="" className="ideas__name">
                                        by Ann Summers
                                    </a>
                                    <span>|</span>
                                    <a href="" className="ideas__category">
                                        Table Furniture
                                    </a>
                                </div>
                                <a href="blog_single.html" className="ideas__label">
                                    Semiotics fixie four dollar toast, next level woke
                                </a>
                                <div className="ideas__text">
                                    Everyday carry actually neutra authentic kogi shabby chic migas small batch craft beer.
                                    Literally williamsburg tote bag farm-to-table mustache ugh deep v irony. Af man bun copper mug
                                    iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring book yuccie woke.
                                    Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table.
                                </div>
                            </div>
                        </section>
                        <div className="fill__pagination pagination-fill">
                            <ul className="pagination-fill__list"></ul>
                        </div>
                    </div>
                    <aside className="blog-content__sidebar sidebar">
                        <form className="sidebar-form" action="#" data-da=".blog-content__fill,767,first">
                            <input
                                autoComplete="off"
                                type="text"
                                name="form[]"
                                data-error="Ошибка"
                                data-value="Search"
                                className="sidebar-form__input input"
                            />
                            <button type="submit" className="sidebar-form__btn _icon-lupa"></button>
                        </form>
                        <div className="sidebar__categories">
                            <div className="sidebar__label">Categories</div>
                            <ul className="sidebar__list">
                                <li>
                                    <a href="#" className="sidebar__link">
                                        Dining room
                                    </a>
                                    <span>(1)</span>
                                </li>
                                <li>
                                    <a href="#" className="sidebar__link">
                                        Office furniture
                                    </a>
                                    <span>(12)</span>
                                </li>
                                <li>
                                    <a href="#" className="sidebar__link">
                                        Simple interiror design
                                    </a>
                                    <span>(2)</span>
                                </li>
                                <li>
                                    <a href="#" className="sidebar__link">
                                        Design
                                    </a>
                                    <span>(4)</span>
                                </li>
                                <li>
                                    <a href="#" className="sidebar__link">
                                        Bedroom Furniture
                                    </a>
                                    <span>(1)</span>
                                </li>
                            </ul>
                        </div>
                        <div className="sidebar__posts">
                            <div className="sidebar__label">Categories</div>
                            <div className="sidebar__post">
                                <a href="blog_single.html" className="sidebar__post-text">
                                    Cred selfies edison bulb four dollar toast humblebrag
                                </a>
                                <div className="sidebar__post-bottom">
                                    <a href="" className="sidebar__post-date">
                                        August 10, 2020
                                    </a>
                                    <span>|</span>
                                    <a href="" className="sidebar__post-name">
                                        by Ann Summers
                                    </a>
                                </div>
                            </div>
                            <div className="sidebar__post">
                                <a href="blog_single.html" className="sidebar__post-text">
                                    Semiotics fixie four dollar toast, next level woke scenester direct trade photo booth
                                </a>
                                <div className="sidebar__post-bottom">
                                    <a href="" className="sidebar__post-date">
                                        September 30, 2020
                                    </a>
                                    <span>|</span>
                                    <a href="" className="sidebar__post-name">
                                        by Ann Summers
                                    </a>
                                </div>
                            </div>
                            <div className="sidebar__post">
                                <a href="blog_single.html" className="sidebar__post-text">
                                    Cred selfies edison bulb four dollar toast humblebrag
                                </a>
                                <div className="sidebar__post-bottom">
                                    <a href="" className="sidebar__post-date">
                                        May 2, 2020
                                    </a>
                                    <span>|</span>
                                    <a href="" className="sidebar__post-name">
                                        by Ann Summers
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="sidebar__tags">
                            <div className="sidebar__label">Tags</div>
                            <a href="#" className="sidebar__tags-tag">
                                Dining room futniture
                            </a>
                            <a href="#" className="sidebar__tags-tag">
                                Chair
                            </a>
                            <a href="#" className="sidebar__tags-tag">
                                Table
                            </a>
                            <a href="#" className="sidebar__tags-tag">
                                Bedroom
                            </a>
                            <a href="#" className="sidebar__tags-tag">
                                Office Furniture
                            </a>
                        </div>
                        <div className="sidebar__social">
                            <a href="#" className="sidebar__social-item _icon-facebook"></a>
                            <a href="#" className="sidebar__social-item _icon-inst"></a>
                            <a href="#" className="sidebar__social-item _icon-pin"></a>
                            <a href="#" className="sidebar__social-item _icon-whatsapp"></a>
                            <a href="#" className="sidebar__social-item _icon-youtube"></a>
                        </div>
                    </aside>
                </div>
            </div>
        </>
    );
};

export default BlogPage;
