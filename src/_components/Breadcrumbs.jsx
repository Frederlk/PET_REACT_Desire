import React, { memo } from "react";
import { Link } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { routes } from "../constants";
import Picture from "./Picture";

const Breadcrumbs = memo(function Breadcrumbs({ noBg, title, imgWebp, img, className, article }) {
    const breadcrumbs = useBreadcrumbs(routes);

    return (
        <nav className={`page__breadcrumbs breadcrumbs ${noBg ? "breadcrumbs_no-bg" : ""} ${className || ""}`}>
            <ul className="breadcrumbs__container">
                {breadcrumbs.map(({ match, breadcrumb }, i) => {
                    if (i == breadcrumbs.length - 1) {
                        return (
                            <li key={match.pathname} className="breadcrumbs__item">
                                <span className="breadcrumbs__link">{article ? article?.title : breadcrumb}</span>
                            </li>
                        );
                    } else {
                        return (
                            <li key={match.pathname} className="breadcrumbs__item">
                                <Link to={match.pathname} className="breadcrumbs__link">
                                    {breadcrumb}
                                </Link>
                            </li>
                        );
                    }
                })}
            </ul>
            {noBg ? null : (
                <div className="breadcrumbs__bg">
                    <h2 className="breadcrumbs__title">{title}</h2>
                    <div className="breadcrumbs__image-ibg">
                        <Picture srcWebp={imgWebp} fallbackSrc={img} className="_no-loading" alt={title} />
                    </div>
                </div>
            )}
        </nav>
    );
});

export default Breadcrumbs;
