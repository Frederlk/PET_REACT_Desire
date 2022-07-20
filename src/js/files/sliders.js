/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation } from "swiper";
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
    // Перечень слайдеров
    // Проверяем, есть ли слайдер на стронице
    if (document.querySelector(".swiper")) {
        // Указываем скласс нужного слайдера
        // Создаем слайдер
        new Swiper(".swiper", {
            // Указываем скласс нужного слайдера
            // Подключаем модули слайдера
            // для конкретного случая
            modules: [Navigation],
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: true,
            speed: 800,

            //touchRatio: 0,
            //simulateTouch: false,
            //loop: true,
            //preloadImages: false,
            //lazy: true,

            /*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

            // Пагинация
            /*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

            // Скроллбар
            /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

            // Кнопки "влево/вправо"
            navigation: {
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
            },

            // Брейкпоинты
            /*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
            // События
            on: {},
        });
    }

    if (document.querySelector(".home__mainslider")) {
        let homeSlider = new Swiper(".home__mainslider", {
            // Эффекты переключения слайдов.
            // Листание
            effect: "slide",

            observer: true,
            observeParents: true,
            // Количество слайдов для показа
            slidesPerView: 1,
            // Отступ между слайдами
            spaceBetween: 0,
            // Автовысота
            autoHeight: false,
            // Отключение функционала
            // если слайдов меньше чем нужно
            watchOverflow: true,
            adaptiveHeight: true,

            pagination: {
                el: ".home__pagination",

                // Буллеты
                type: "bullets",
                clickable: true,
            },

            // Включение/отключение
            // перетаскивания на ПК
            simulateTouch: true,
            // Чувствительность свайпа
            touchRatio: 1,

            // Угол срабатывания свайпа/перетаскивания
            touchAngle: 45,
            // Курсор перетаскивания
            grabCursor: true,
            // Переключение при клике на слайд
            slideToClickedSlide: false,

            // Навигация по хешу
            hashNavigation: {
                // Отслеживать состояние
                watchState: true,
            },

            // Управление клавиатурой
            keyboard: {
                // Включить\выключить
                enabled: true,
                // Включить\выключить
                // только когда слайдер
                // в пределах вьюпорта
                onlyInViewport: true,
                // Включить\выключить
                // управление клавишами
                // pageUp, pageDown
                pageUpDown: true,
            },
            // Количество пролистываемых слайдов
            slidesPerGroup: 1,

            // Активный слайд по центру
            centeredSlides: false,

            // Стартовый слайд.
            initialSlide: 0,

            // Мультирядность
            slidesPerColumn: 1,

            // Бесконечный слайдер
            loop: true,

            // Кол-во дублирующих слайдов
            loopedSlides: 0,

            // Свободный режим
            freeMode: false,

            // Автопрокрутка

            autoplay: {
                // Пауза между прокруткой
                delay: 5000,
                // Закончить на последнем слайде
                stopOnLastSlide: true,
                // Отключить после ручного переключения
                disableOnInteraction: false,
            },

            // Скорость
            speed: 800,

            // Вертикальный слайдер
            direction: "horizontal", //'vertical'

            // Отключить предзагрузка картинок
            preloadImages: false,
            // Lazy Loading
            // (подгрузка картинок)

            lazy: {
                // Подгружать на старте
                // переключения слайда
                loadOnTransitionStart: false,

                // Подгрузить предыдущую
                // и следующую картинки
                loadPrevNext: false,
            },

            // Слежка за видимыми слайдами
            watchSlidesProgress: false,

            // Добавление класса видимым слайдам
            watchSlidesVisibility: false,
        });
    }

    if (document.querySelector(".bottom-fill")) {
        let bottomFill = new Swiper(".bottom-fill__slider", {
            // Cмена прозрачности
            effect: "fade",
            // Дополнение к fade
            fadeEffect: {
                // Параллельная
                // смена прозрачности
                crossFade: true,
            },

            observer: true,
            observeParents: true,
            // Количество слайдов для показа
            slidesPerView: 1,
            // Отступ между слайдами
            spaceBetween: 0,
            // Автовысота
            autoHeight: false,
            // Отключение функционала
            // если слайдов меньше чем нужно
            watchOverflow: true,
            adaptiveHeight: true,

            navigation: {
                nextEl: ".bottom-fill__navigation-arrow_next",
                prevEl: ".bottom-fill__navigation-arrow_prev",
            },

            // Включение/отключение
            // перетаскивания на ПК
            simulateTouch: true,
            // Чувствительность свайпа
            touchRatio: 1,

            // Угол срабатывания свайпа/перетаскивания
            touchAngle: 45,
            // Курсор перетаскивания
            grabCursor: true,
            // Переключение при клике на слайд
            slideToClickedSlide: false,

            // Навигация по хешу
            hashNavigation: {
                // Отслеживать состояние
                watchState: true,
            },

            // Управление клавиатурой
            keyboard: {
                // Включить\выключить
                enabled: true,
                // Включить\выключить
                // только когда слайдер
                // в пределах вьюпорта
                onlyInViewport: true,
                // Включить\выключить
                // управление клавишами
                // pageUp, pageDown
                pageUpDown: true,
            },
            // Количество пролистываемых слайдов
            slidesPerGroup: 1,

            // Активный слайд по центру
            centeredSlides: false,

            // Стартовый слайд.
            initialSlide: 0,

            // Мультирядность
            slidesPerColumn: 1,

            // Бесконечный слайдер
            loop: true,

            // Кол-во дублирующих слайдов
            loopedSlides: 0,

            // Свободный режим
            freeMode: false,

            // Автопрокрутка

            autoplay: {
                // Пауза между прокруткой
                delay: 5000,
                // Закончить на последнем слайде
                stopOnLastSlide: true,
                // Отключить после ручного переключения
                disableOnInteraction: false,
            },

            // Скорость
            speed: 800,

            // Вертикальный слайдер
            direction: "horizontal", //'vertical'

            // Отключить предзагрузка картинок
            preloadImages: false,
            // Lazy Loading
            // (подгрузка картинок)

            lazy: {
                // Подгружать на старте
                // переключения слайда
                loadOnTransitionStart: false,

                // Подгрузить предыдущую
                // и следующую картинки
                loadPrevNext: false,
            },

            // Слежка за видимыми слайдами
            watchSlidesProgress: false,

            // Добавление класса видимым слайдам
            watchSlidesVisibility: false,
        });
    }

    if (document.querySelector(".etc-contact__slider")) {
        let contactSlider = new Swiper(".etc-contact__slider", {
            // Эффекты переключения слайдов.
            // Листание
            effect: "slide",

            observer: true,
            observeParents: true,
            // Количество слайдов для показа
            // Отступ между слайдами
            spaceBetween: 0,
            // Автовысота
            autoHeight: false,
            // Отключение функционала
            // если слайдов меньше чем нужно
            watchOverflow: true,
            adaptiveHeight: true,

            pagination: {
                el: ".etc-contact__pagination",

                // Буллеты
                type: "bullets",
                clickable: true,
                // Динамические буллеты
            },

            // Включение/отключение
            // перетаскивания на ПК
            simulateTouch: true,
            // Чувствительность свайпа
            touchRatio: 1,

            // Угол срабатывания свайпа/перетаскивания
            touchAngle: 45,
            // Курсор перетаскивания
            grabCursor: true,
            // Переключение при клике на слайд
            slideToClickedSlide: false,

            // Навигация по хешу
            hashNavigation: {
                // Отслеживать состояние
                watchState: true,
            },

            // Управление клавиатурой
            keyboard: {
                // Включить\выключить
                enabled: true,
                // Включить\выключить
                // только когда слайдер
                // в пределах вьюпорта
                onlyInViewport: true,
                // Включить\выключить
                // управление клавишами
                // pageUp, pageDown
                pageUpDown: true,
            },
            // Количество пролистываемых слайдов

            // Активный слайд по центру
            centeredSlides: false,

            // Стартовый слайд.
            initialSlide: 0,

            // Мультирядность
            slidesPerColumn: 1,

            // Бесконечный слайдер
            loop: true,

            // Кол-во дублирующих слайдов
            loopedSlides: 0,

            // Свободный режим
            freeMode: false,

            // Автопрокрутка

            autoplay: {
                // Пауза между прокруткой
                delay: 5000,
                // Закончить на последнем слайде
                stopOnLastSlide: true,
                // Отключить после ручного переключения
                disableOnInteraction: false,
            },

            // Скорость
            speed: 1800,

            // Вертикальный слайдер
            direction: "horizontal", //'vertical'

            // Отключить предзагрузка картинок
            preloadImages: false,
            // Lazy Loading
            // (подгрузка картинок)

            lazy: {
                // Подгружать на старте
                // переключения слайда
                loadOnTransitionStart: false,

                // Подгрузить предыдущую
                // и следующую картинки
                loadPrevNext: false,
            },

            // Слежка за видимыми слайдами
            watchSlidesProgress: false,

            // Добавление класса видимым слайдам
            watchSlidesVisibility: false,

            breakpoints: {
                320: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                },
                768: {
                    slidesPerView: 4,
                    slidesPerGroup: 2,
                },
                992: {
                    slidesPerView: 6,
                    slidesPerGroup: 2,
                },
                1150: {
                    slidesPerView: 8,
                    slidesPerGroup: 2,
                },
                1440: {
                    slidesPerView: 10,
                    slidesPerGroup: 2,
                },
            },

            on: {
                lazyImageReady: function () {
                    ibg();
                },
            },
        });
    }
}

window.addEventListener("load", function (e) {
    // Запуск инициализации слайдеров
    initSliders();
    // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
    //initSlidersScroll();
});
