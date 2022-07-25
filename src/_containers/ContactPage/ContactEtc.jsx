import React from "react";
import { data } from "../../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Lazy } from "swiper";
import { CollectionItem } from "../../_components";

const ContactEtc = () => {
    const homeSlides = data.collectionItems.map((item, i) => (
        <SwiperSlide key={item.link + i} className="etc-contact__slide">
            <CollectionItem key={item.link + i} item={item} slider className="etc-contact__column" />
        </SwiperSlide>
    ));

    return (
        <div className="page__contact-etc etc-contact">
            <Swiper
                className="etc-contact__slider"
                modules={[Pagination, Autoplay, Lazy]}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    el: ".etc-contact__pagination",
                    clickable: true,
                }}
                lazy={{
                    loadPrevNext: true,
                }}
                grabCursor={true}
                loop
                spaceBetween={15}
                speed={1000}
                observer={true}
                observeParents={true}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    479.98: { slidesPerView: 2, slidesPerGroup: 1, pagination: false },
                    767.98: {
                        slidesPerView: 4,
                        slidesPerGroup: 2,
                    },
                    991.98: {
                        slidesPerView: 6,
                        slidesPerGroup: 2,
                    },
                    1110: {
                        slidesPerView: 8,
                        slidesPerGroup: 4,
                        spaceBetween: 0,
                    },
                    1440: {
                        slidesPerView: 10,
                        slidesPerGroup: 4,
                    },
                }}>
                {homeSlides}
            </Swiper>
            <div className="etc-contact__pagination pagination"></div>
        </div>
    );
};

export default ContactEtc;
