import React from "react";

const SIngleBlogPage = () => {
    return (
        <>
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
                            <li>
                                <a href="blog_single.html" className="breadcrumbs__link">
                                    Single Post
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
            <div className="page__blog-content blog-content blog-content_post">
                <div className="blog-content__container _container">
                    <div className="blog-content__fill fill">
                        <section className="fill__item fill__item_post">
                            <div className="ideas__body">
                                <div className="ideas__image fill__item-pic _ibg">
                                    <img src="img/_blog/01.jpg" alt="" />
                                </div>
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
                                <h1 className="ideas__label">
                                    Red selfies edison bulb four dollar toast design humblebrag for the furniture
                                </h1>
                                <div className="ideas__text ideas__text_post-text">
                                    <p>
                                        Everyday carry actually neutra authentic kogi shabby chic migas small batch craft beer.
                                        Literally williamsburg tote bag farm-to-table mustache ugh deep v irony. Af man bun copper
                                        mug iPhone enamel pin pug selvage hammock palo santo godard thundercats coloring book
                                        yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb farm-to-table.
                                    </p>
                                    <p>
                                        Yuccie portland kickstarter, readymade ramps humblebrag ennui banjo mumblecore vaporware
                                        pickled cray stumptown 8-bit mlkshk. Tumeric tousled austin, kinfolk scenester authentic
                                        craft beer truffaut irony intelligentsia YOLO lomo bushwick coloring book. Semiotics man
                                        bun venmo viral cliche. Tousled yr williamsburg austin edison bulb cloud bread vegan
                                        street art. Locavore food truck trust fund palo santo asymmetrical, franzen deep v marfa
                                        kogi whatever swag pop-up seitan.
                                    </p>
                                </div>
                                <div className="ideas__post-quote">
                                    <div className="post-quote__body">
                                        <div className="post-quote__label">
                                            “Simplicity is not the goal. It is the by-product of a good idea and modest
                                            expectations”
                                        </div>
                                        <div className="post-quote__author">Paul Rand</div>
                                    </div>
                                </div>
                                <div className="ideas__text ideas__text_post-text">
                                    <p>
                                        Af man bun copper mug iPhone enamel pin pug selvage hammock palo santo godard thundercats
                                        coloring book yuccie woke. Ugh pok pok taxidermy pabst enamel pin edison bulb
                                        farm-to-table.
                                    </p>
                                    <p>
                                        {" "}
                                        Yuccie portland kickstarter, readymade ramps humblebrag ennui banjo mumblecore vaporware
                                        pickled cray stumptown 8-bit mlkshk. Tumeric tousled austin, kinfolk scenester authentic
                                        craft beer truffaut irony intelligentsia YOLO lomo bushwick coloring book. Semiotics man
                                        bun venmo viral cliche. Tousled yr williamsburg austin edison bulb cloud bread vegan
                                        street art. Locavore food truck trust fund palo santo asymmetrical, franzen deep v marfa
                                        kogi whatever swag pop-up seitan.
                                    </p>
                                </div>
                                <div className="ideas__tags">
                                    <div className="sidebar__label">Tags</div>
                                    <a href="#" className="sidebar__tags-tag">
                                        Bedroom Furniture
                                    </a>
                                    <a href="#" className="sidebar__tags-tag">
                                        Office Furniture
                                    </a>
                                    <a href="#" className="sidebar__tags-tag">
                                        Dining room futniture
                                    </a>
                                    <a href="#" className="sidebar__tags-tag">
                                        Chair
                                    </a>
                                </div>
                            </div>
                        </section>
                        <div className="fill__bottom bottom-fill">
                            <div className="bottom-fill__more">
                                <div className="bottom-fill__slider _swiper">
                                    <div className="bottom-fill__slide">
                                        <a href="#" className="bottom-fill__text">
                                            Cred selfies edison bulb four dollar toast humblebrag
                                        </a>
                                        <a href="#" className="bottom-fill__text">
                                            Semiotics fixie four dollar toast, next level
                                        </a>
                                    </div>
                                    <div className="bottom-fill__slide">
                                        <a href="#" className="bottom-fill__text">
                                            Semiotics fixie four dollar toast, next level
                                        </a>
                                        <a href="#" className="bottom-fill__text">
                                            Cred selfies edison
                                        </a>
                                    </div>
                                    <div className="bottom-fill__slide">
                                        <a href="#" className="bottom-fill__text">
                                            Cred selfies edison
                                        </a>
                                        <a href="#" className="bottom-fill__text">
                                            Cred selfies edison bulb four dollar toast humblebrag
                                        </a>
                                    </div>
                                </div>
                                <div className="bottom-fill__navigation">
                                    <div className="bottom-fill__navigation-arrow bottom-fill__navigation-arrow_prev _icon-arrow-prev"></div>
                                    <div className="bottom-fill__navigation-arrow bottom-fill__navigation-arrow_next _icon-arrow-next"></div>
                                </div>
                            </div>
                            <div className="bottom-fill__coments coments-fill">
                                <h2 className="coments-fill__title">Comments:</h2>
                                <div className="coments-fill__body body-coments-fill">
                                    <div className="body-coments-fill__coment">
                                        <div className="body-coments-fill__avatar _ibg">
                                            <img src="img/_blog/avatar.jpg" alt="" />
                                        </div>
                                        <div className="body-coments-fill__content">
                                            <div className="body-coments-fill__row">
                                                <div className="body-coments-fill__info">
                                                    <div className="body-coments-fill__name">Lea Brown</div>
                                                    <div className="body-coments-fill__date">August 12, 2020</div>
                                                </div>
                                                <a href="#" className="body-coments-fill__reply">
                                                    Reply
                                                </a>
                                            </div>
                                            <div
                                                className="body-coments-fill__text"
                                                data-da=".body-coments-fill__coment,479,last">
                                                Tumeric tousled austin, kinfolk scenester authentic craft beer truffaut irony
                                                intelligentsia YOLO lomo bushwick coloring book. Semiotics man bun venmo viral
                                                cliche
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <form action="#" className="bottom-fill__form form-fill">
                                <h3 className="form-fill__title">Post a Comment</h3>
                                <div className="form-fill__body">
                                    <textarea
                                        autoComplete="off"
                                        name="form[]"
                                        data-value="Your comment"
                                        data-error="Ошибка"
                                        className="form-fill__textarea input"></textarea>
                                    <div className="form-fill__row">
                                        <input
                                            autoComplete="off"
                                            type="text"
                                            name="form[]"
                                            data-error="Ошибка"
                                            data-value="Your name"
                                            className="form-fill__input input _req"
                                        />
                                        <input
                                            autoComplete="off"
                                            type="email"
                                            name="form[]"
                                            data-error="Ошибка"
                                            data-value="Your e-mail"
                                            className="form-fill__input input _req _email"
                                        />
                                    </div>
                                    <label className="form-fill__checkbox">
                                        <input
                                            data-error="Ошибка"
                                            className="form-fill__checkbox-input checkbox__input"
                                            type="checkbox"
                                            value="1"
                                            name="form[]"
                                        />
                                        <span className="form-fill__checkbox-text checkbox__text">
                                            <span>Remember me</span>
                                        </span>
                                    </label>
                                    <label className="checkbox"></label>
                                    <button type="submit" className="form-fill__btn btn">
                                        Submit
                                    </button>
                                </div>
                            </form>
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

export default SIngleBlogPage;
