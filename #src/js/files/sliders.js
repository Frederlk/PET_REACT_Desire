//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');

			if (slider.classList.contains('_swiper_scroll')) {
				let sliderScroll = document.createElement('div');
				sliderScroll.classList.add('swiper-scrollbar');
				slider.appendChild(sliderScroll);
			}
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);
		}
	}
	sliders_bild_callback();
}

function sliders_bild_callback(params) { }

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
	for (let index = 0; index < sliderScrollItems.length; index++) {
		const sliderScrollItem = sliderScrollItems[index];
		const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
		const sliderScroll = new Swiper(sliderScrollItem, {
			observer: true,
			observeParents: true,
			direction: 'vertical',
			slidesPerView: 'auto',
			freeMode: true,
			scrollbar: {
				el: sliderScrollBar,
				draggable: true,
				snapOnRelease: false
			},
			mousewheel: {
				releaseOnEdges: true,
			},
		});
		sliderScroll.scrollbar.updateSize();
	}
}


function sliders_bild_callback(params) { }

if (document.querySelector('.home__mainslider')) {
	let homeSlider = new Swiper('.home__mainslider', {
		// Эффекты переключения слайдов.
		// Листание
		effect: 'slide',

		/*// Эффекты переключения слайдов.
		// Cмена прозрачности
		effect: 'fade',
		// Дополнение к fade
		fadeEffect: {
			// Параллельная
			// смена прозрачности
			crossFade: true
		},*/

		/*
		// Эффекты переключения слайдов.
		// Переворот
		effect: 'flip',
		// Дополнение к flip
		flipEffect: {
			// Тень
			slideShadows: true,
			// Показ только активного слайда
			limitRotation: true
		},
		*/
		/*
		// Эффекты переключения слайдов.
		// Куб
		effect: 'cube',
		// Дополнение к cube
		cubeEffect: {
			// Настройки тени
			slideShadows: true,
			shadow: true,
			shadowOffset: 20,
			shadowScale: 0.94
		},
		*/
		/*
		// Эффекты переключения слайдов.
		// Эффект потока
		effect: 'coverflow',
		// Дополнение к coverflow
		coverflowEffect: {
			// Угол
			rotate: 20,
			// Наложение
			stretch: 50,
			// Тень
			slideShadows: true,
		},
		*/

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
			el: '.home__pagination',

			// Буллеты
			type: 'bullets',
			clickable: true,
			// Динамические буллеты
			//dynamicBullets: true,
			// Кастомные буллеты
			/*renderBullet: function (index, className) {
				return '<span class="' + className + '">' + (index + 1) + '</span>';
			},*/

			/*
			// Фракция
			type: 'fraction',
			// Кастомный вывод фракции
			renderFraction: function (currentClass, totalClass) {
				return 'Фото <span class="' + currentClass + '"></span>' +
					' из ' +
					'<span class="' + totalClass + '"></span>';
			},
			*/
			// Прогрессбар
			//type: 'progressbar'
		},

		// Скролл
		/*
		scrollbar: {
			el: '.swiper-scrollbar',
			// Возможность перетаскивать скролл
			draggable: true
		},
		*/

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
			disableOnInteraction: false
		},


		// Скорость
		speed: 800,

		// Вертикальный слайдер
		direction: 'horizontal', //'vertical'

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
		/*
	
		// Зум картинки
		zoom: {
			// Макимальное увеличение
			maxRatio: 5,
			// Минимальное увеличение
			minRatio: 1,
		},
		*/

		// Миниатюры (превью)
		/*
		thumbs: {
			// Свайпер с мениатюрами
			// и его настройки
			swiper: {
				el: '.image-mini-slider',
				slidesPerView: 5,
			}
		},
		*/

		/*
		// Передача управления
		controller: {
			control: myTextSlider
		},
		*/

		/*
			// Обновить свайпер
			// при изменении элементов слайдера
			observer: true,
			// Обновить свайпер
			// при изменении родительских
			// элементов слайдера
			observeParents: true,
			// Обновить свайпер
			// при изменении дочерних
			// элементов слайда
			observeSlideChildren: true,
		*/

		/*
			// Управление колесом мыши
			mousewheel: {
				// Чувствительность колеса мыши
				sensitivity: 0,
				// Класс объекта на котором
				// будет срабатывать прокрутка мышью.
				//eventsTarget: ".image-slider"
			},
		*/

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
		on: {
			lazyImageReady: function () {
				ibg();
			},
		},
	});
}


if (document.querySelector('.bottom-fill')) {
	let bottomFill = new Swiper('.bottom-fill__slider', {
		// Эффекты переключения слайдов.
		// Листание
		//effect: 'slide',

		// Эффекты переключения слайдов.
		// Cмена прозрачности
		effect: 'fade',
		// Дополнение к fade
		fadeEffect: {
			// Параллельная
			// смена прозрачности
			crossFade: true
		},

		/*
		// Эффекты переключения слайдов.
		// Переворот
		effect: 'flip',
		// Дополнение к flip
		flipEffect: {
			// Тень
			slideShadows: true,
			// Показ только активного слайда
			limitRotation: true
		},
		*/
		/*
		// Эффекты переключения слайдов.
		// Куб
		effect: 'cube',
		// Дополнение к cube
		cubeEffect: {
			// Настройки тени
			slideShadows: true,
			shadow: true,
			shadowOffset: 20,
			shadowScale: 0.94
		},
		*/
		/*
		// Эффекты переключения слайдов.
		// Эффект потока
		effect: 'coverflow',
		// Дополнение к coverflow
		coverflowEffect: {
			// Угол
			rotate: 20,
			// Наложение
			stretch: 50,
			// Тень
			slideShadows: true,
		},
		*/

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

		// Скролл
		/*
		scrollbar: {
			el: '.swiper-scrollbar',
			// Возможность перетаскивать скролл
			draggable: true
		},
		*/
		navigation: {
			nextEl: '.bottom-fill__navigation-arrow_next',
			prevEl: '.bottom-fill__navigation-arrow_prev',
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
			disableOnInteraction: false
		},


		// Скорость
		speed: 800,

		// Вертикальный слайдер
		direction: 'horizontal', //'vertical'

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
		/*
	
		// Зум картинки
		zoom: {
			// Макимальное увеличение
			maxRatio: 5,
			// Минимальное увеличение
			minRatio: 1,
		},
		*/

		// Миниатюры (превью)
		/*
		thumbs: {
			// Свайпер с мениатюрами
			// и его настройки
			swiper: {
				el: '.image-mini-slider',
				slidesPerView: 5,
			}
		},
		*/

		/*
		// Передача управления
		controller: {
			control: myTextSlider
		},
		*/

		/*
			// Обновить свайпер
			// при изменении элементов слайдера
			observer: true,
			// Обновить свайпер
			// при изменении родительских
			// элементов слайдера
			observeParents: true,
			// Обновить свайпер
			// при изменении дочерних
			// элементов слайда
			observeSlideChildren: true,
		*/

		/*
			// Управление колесом мыши
			mousewheel: {
				// Чувствительность колеса мыши
				sensitivity: 0,
				// Класс объекта на котором
				// будет срабатывать прокрутка мышью.
				//eventsTarget: ".image-slider"
			},
		*/

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
		on: {
			lazyImageReady: function () {
				ibg();
			},
		},
	});
}

if (document.querySelector('.etc-contact__slider')) {
	let contactSlider = new Swiper('.etc-contact__slider', {
		// Эффекты переключения слайдов.
		// Листание
		effect: 'slide',

		/*// Эффекты переключения слайдов.
		// Cмена прозрачности
		effect: 'fade',
		// Дополнение к fade
		fadeEffect: {
			// Параллельная
			// смена прозрачности
			crossFade: true
		},*/

		/*
		// Эффекты переключения слайдов.
		// Переворот
		effect: 'flip',
		// Дополнение к flip
		flipEffect: {
			// Тень
			slideShadows: true,
			// Показ только активного слайда
			limitRotation: true
		},
		*/
		/*
		// Эффекты переключения слайдов.
		// Куб
		effect: 'cube',
		// Дополнение к cube
		cubeEffect: {
			// Настройки тени
			slideShadows: true,
			shadow: true,
			shadowOffset: 20,
			shadowScale: 0.94
		},
		*/
		/*
		// Эффекты переключения слайдов.
		// Эффект потока
		effect: 'coverflow',
		// Дополнение к coverflow
		coverflowEffect: {
			// Угол
			rotate: 20,
			// Наложение
			stretch: 50,
			// Тень
			slideShadows: true,
		},
		*/

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
			el: '.etc-contact__pagination',

			// Буллеты
			type: 'bullets',
			clickable: true,
			// Динамические буллеты
			//dynamicBullets: true,
			// Кастомные буллеты
			/*renderBullet: function (index, className) {
				return '<span class="' + className + '">' + (index + 1) + '</span>';
			},*/

			/*
			// Фракция
			type: 'fraction',
			// Кастомный вывод фракции
			renderFraction: function (currentClass, totalClass) {
				return 'Фото <span class="' + currentClass + '"></span>' +
					' из ' +
					'<span class="' + totalClass + '"></span>';
			},
			*/
			// Прогрессбар
			//type: 'progressbar'
		},

		// Скролл
		/*
		scrollbar: {
			el: '.swiper-scrollbar',
			// Возможность перетаскивать скролл
			draggable: true
		},
		*/

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
			disableOnInteraction: false
		},


		// Скорость
		speed: 1800,

		// Вертикальный слайдер
		direction: 'horizontal', //'vertical'

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
		/*
	
		// Зум картинки
		zoom: {
			// Макимальное увеличение
			maxRatio: 5,
			// Минимальное увеличение
			minRatio: 1,
		},
		*/

		// Миниатюры (превью)
		/*
		thumbs: {
			// Свайпер с мениатюрами
			// и его настройки
			swiper: {
				el: '.image-mini-slider',
				slidesPerView: 5,
			}
		},
		*/

		/*
		// Передача управления
		controller: {
			control: myTextSlider
		},
		*/

		/*
			// Обновить свайпер
			// при изменении элементов слайдера
			observer: true,
			// Обновить свайпер
			// при изменении родительских
			// элементов слайдера
			observeParents: true,
			// Обновить свайпер
			// при изменении дочерних
			// элементов слайда
			observeSlideChildren: true,
		*/

		/*
			// Управление колесом мыши
			mousewheel: {
				// Чувствительность колеса мыши
				sensitivity: 0,
				// Класс объекта на котором
				// будет срабатывать прокрутка мышью.
				//eventsTarget: ".image-slider"
			},
		*/


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