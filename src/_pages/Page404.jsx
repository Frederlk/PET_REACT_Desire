import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Page404 = () => {
    return (
        <>
            <Helmet>
                <meta name="404" content="Error 404" />
                <title>Error 404</title>
            </Helmet>

            <section className="page404">
                <div className="page404__container">
                    <div className="page404__title">Error 404</div>
                    <div className="page404__label">Are you lost?</div>
                    <Link to="/" className="page404__button btn">
                        To Home Page
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Page404;
