import React from "react";
import { Link } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { routes } from "../constants";

const Breadcrumbs = ({ noBg }) => {
    const breadcrumbs = useBreadcrumbs(routes);

    return (
        <nav className={`page__breadcrumbs breadcrumbs ${noBg ? "breadcrumbs_no-bg" : ""}`}>
            <ul className="breadcrumbs__container">
                {breadcrumbs.map(({ match, breadcrumb }, i) => {
                    if (i == breadcrumbs.length - 1) {
                        return (
                            <li key={match.pathname} className="breadcrumbs__item">
                                <span className="breadcrumbs__link">{breadcrumb}</span>
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
        </nav>
    );
};

export default Breadcrumbs;
