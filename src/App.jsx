import { Header, Footer } from "./_containers";
import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import * as flsFunctions from "./js/files/functions";
import * as flsScroll from "./js/files/scroll/scroll";
import { Spinner } from "./_components";

const Page404 = lazy(() => import("./_pages/Page404")),
    Home = lazy(() => import("./_pages/HomePage")),
    Blog = lazy(() => import("./_pages/BlogPage")),
    About = lazy(() => import("./_pages/AboutPage")),
    Gallery = lazy(() => import("./_pages/GalleryPage")),
    Contact = lazy(() => import("./_pages/ContactPage"));

const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
        flsFunctions.menuClose();
    }, [pathname]);
    return null;
};

const App = () => {
    useEffect(() => {
        flsFunctions.menuInit();
        flsScroll.headerScroll();
        flsFunctions.isWebp();
    }, []);

    return (
        <Router>
            <ScrollToTop />
            <Header />
            <main className="page">
                <Suspense fallback={<Spinner />}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/blog/:article" element={<Blog />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<Page404 />} />
                    </Routes>
                </Suspense>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
