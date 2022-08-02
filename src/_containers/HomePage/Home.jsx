import React from "react";
import { data, images } from "../../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Lazy } from "swiper";
import { Picture } from "../../_components";

const Home = () => {
    const { defaultImages } = images;

    const homeSlides = data.homeSlides.map(({ title, text, img, imgWebp }, i) => (
        <SwiperSlide key={title + i} className="home__slide">
            <div className="home__column home-image">
                <Picture srcWebp={imgWebp} alt={title || "Furniture"} fallbackSrc={img} />
            </div>
            <div className="home__column home-content">
                <div className="home-content__container">
                    <div className="home-content__body">
                        {title ? <h2 className="home-content__title">{title}</h2> : null}
                        {text ? <div className="home-content__text">{text}</div> : null}
                    </div>
                </div>
            </div>
        </SwiperSlide>
    ));

    return (
        <section className="page__home home">
            <div className="home__body">
                <Swiper
                    className="home__mainslider"
                    modules={[Pagination, Autoplay, Lazy]}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    pagination={{
                        el: ".home__pagination",
                        clickable: true,
                    }}
                    lazy={{
                        loadPrevNext: true,
                    }}
                    loop
                    speed={1000}
                    observer={true}
                    observeParents={true}>
                    {homeSlides}
                </Swiper>
                <div className="home__bg-ibg">
                    <Picture srcWebp={defaultImages.bg_WEBP} fallbackSrc={defaultImages.bg} alt="Background" />
                </div>
            </div>
            <div className="home__pagination pagination"></div>
        </section>
    );
};

export default Home;
