/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
//$(document).ready(function () {
    window.addEventListener('load', function (e) {
        initSliders();
        //initIndependentSwipers();
    });
//});
function initSliders() {
	// Список слайдерів
	// Перевіряємо, чи є слайдер на сторінці
	if (document.querySelector('.wrapper-product__slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.wrapper-product__slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			modules: [Navigation, Pagination],
			loop: true,
			loopedSlides: 2,
			centeredSlides: true,
			slidesPerView: "auto",
			watchSlidesProgress: true,
			lazy: false,

			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},
			
			// Події
			on: {

			}
		});
	}
//========================================================================================================================================================
let baseOptions = {
    modules: [Navigation, Pagination],
	observer: true,
	observeParents: true,
	watchOverflow: true,
	slidesPerView: "auto",
	spaceBetween: 30,
	speed: 500,
	//loop: true,
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		730: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		
		1080: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
		
	},
};
function initSwiperById(id, additionalOptions) {
	let mergedOptions = { ...baseOptions, ...additionalOptions };
    let slider = document.getElementById(id);
    if (slider) {
        new Swiper('#' + id, mergedOptions);
    }
}
function initIndependentSwipers() {
	// Zeekr001
	let optionsZeekr = {
		navigation: {
			prevEl: '.swiper-button-prev-zeekr001',
			nextEl: '.swiper-button-next-zeekr001',
		},
		pagination: {
			el: '.swiper-pagination-zeekr',
			clickable: true,
		},
		
    };
    initSwiperById('zeekr', optionsZeekr);
	// ZeekrX
	let options2 = {
        navigation: {
			prevEl: '.swiper-button-prev-ZeekrX',
			nextEl: '.swiper-button-next-ZeekrX',
		},
		pagination: {
			el: '.swiper-pagination-ZeekrX',
			clickable: true,
		},
    };
    initSwiperById('ZeekrX', options2);
	// LixiangLi7
	let optionsLixiang = {
        navigation: {
			prevEl: '.swiper-button-prev-LixiangLi7',
			nextEl: '.swiper-button-next-LixiangLi7',
		},
		pagination: {
			el: '.swiper-pagination-LixiangLi7',
			clickable: true,
		},
    };
    initSwiperById('LixiangLi7', optionsLixiang);
	// Voyah Free
	let optionsVoyah = {
        navigation: {
			prevEl: '.swiper-button-prev-VoyahFree',
			nextEl: '.swiper-button-next-VoyahFree',
		},
		pagination: {
			el: '.swiper-pagination-VoyahFree',
			clickable: true,
		},
    };
    initSwiperById('VoyahFree', optionsVoyah);
	// Byd Han
	let optionsBydHan = {
        navigation: {
			prevEl: '.swiper-button-prev-BydHan',
			nextEl: '.swiper-button-next-BydHan',
		},
		pagination: {
			el: '.swiper-pagination-BydHan',
			clickable: true,
		},
    };
    initSwiperById('BydHan', optionsBydHan);
	// Byd Seal
	let optionsBydSeal = {
        navigation: {
			prevEl: '.swiper-button-prev-BydSeal',
			nextEl: '.swiper-button-next-BydSeal',
		},
		pagination: {
			el: '.swiper-pagination-BydSeal',
			clickable: true,
		},
    };
    initSwiperById('BydSeal', optionsBydSeal);
	// Lamborghini Urus
	let optionsUrus = {
        navigation: {
			prevEl: '.swiper-button-prev-Urus',
			nextEl: '.swiper-button-next-Urus',
		},
		pagination: {
			el: '.swiper-pagination-Urus',
			clickable: true,
		},
    };
    initSwiperById('Urus', optionsUrus);
	// Lamborghini Hurakan
    let options = {
		navigation: {
			prevEl: '.swiper-button-prev-huracan',
			nextEl: '.swiper-button-next-huracan',
		},
		pagination: {
			el: '.swiper-pagination-huracan',
			clickable: true,
		},
    };
    initSwiperById('huracan', options);	
}
// Инициализация независимых слайдеров
initIndependentSwipers();		
}
//========================================================================================================================================================

// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
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
}

window.addEventListener("load", function (e) {
	// Запуск ініціалізації слайдерів
	initSliders();
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	//initSlidersScroll();
});