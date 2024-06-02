// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


///scrollUp///////////////////////////////////////////////////////

const btnUp = {
	el: document.querySelector('.btn-up'),
	scrolling: false,
	show() {
	  if (this.el.classList.contains('btn-up_hide') && !this.el.classList.contains('btn-up_hiding')) {
		this.el.classList.remove('btn-up_hide');
		this.el.classList.add('btn-up_hiding');
		window.setTimeout(() => {
		  this.el.classList.remove('btn-up_hiding');
		}, 300);
	  }
	},
	hide() {
	  if (!this.el.classList.contains('btn-up_hide') && !this.el.classList.contains('btn-up_hiding')) {
		this.el.classList.add('btn-up_hiding');
		window.setTimeout(() => {
		  this.el.classList.add('btn-up_hide');
		  this.el.classList.remove('btn-up_hiding');
		}, 300);
	  }
	},
	addEventListener() {
	  window.addEventListener('scroll', () => {
		const scrollY = window.scrollY || document.documentElement.scrollTop;
		if (this.scrolling && scrollY > 0) {
		  return;
		}
		this.scrolling = false;
		if (scrollY > 500) {
		  this.show();
		} else {
		  this.hide();
		}
	  });
	  document.querySelector('.btn-up').onclick = () => {
		this.scrolling = true;
		this.hide();
		window.scrollTo({
		  top: 0,
		  left: 0,
		  behavior: 'smooth'
		});
	  }
	}
  }

  btnUp.addEventListener();  

//========================================================================================================================================================

// window.addEventListener("load", function() {
// 	document.body.addEventListener("focus", function(event) {
// 	  if (event.target.classList.contains("mask")) {
// 		let inputMaskInstance;
  
// 		function createInputMask(el, mask) {
// 		  inputMaskInstance = IMask(el, {
// 			mask: mask,
// 			lazy: false,
// 			placeholderChar: "_",
// 			overwrite: true,
// 		  });
// 		}
  
// 		const inputValue = event.target.value.trim();
  
// 		if (inputValue === "+7 ___-___-__-__") {
// 		  createInputMask(event.target, "+{7} 000-000-00-00");
// 		  event.target.setSelectionRange(2, 2);
// 		} else if (inputValue === "+375 __-___-__-__") {
// 		  createInputMask(event.target, "+{375} 00-000-00-00");
// 		  event.target.setSelectionRange(5, 5);
// 		}
// 	  }
// 	});
  
// 	document.body.addEventListener("blur", function(event) {
// 	  if (event.target.classList.contains("mask")) {
// 		const inputValue = event.target.value.trim();
  
// 		if (inputValue === "+7 ___-___-__-__" || inputValue === "+375 __-___-__-__") {
// 		  setTimeout(function() {
// 			event.target.value = "";
// 			inputMaskInstance.destroy();
// 		  }, 100);
// 		}
// 	  }
// 	});
//   });


//========= маска с  определением страны ===============================================================================================================================================

//$('input[name=phone]').mask("+375(99)999-99-99"); 


$(document).ready(function () {
    $('input[name=phone]').on('input', function () {
        var phoneNumber = $(this).val().replace(/\D/g, ''); // Убираем все нецифровые символы

        // Пытаемся определить код страны
        var country;
        
        if (phoneNumber.startsWith('375')) {
            country = 'BY';
        } else if (phoneNumber.startsWith('7')) {
            country = 'RU';
        } else {
            country = 'BY'; // По умолчанию используем маску для России
        }

        // Применяем маску в зависимости от страны
        if (country === 'BY') {
            $(this).mask("+375(99)999-99-99");
        } else {
            $(this).mask("+7(999)999-99-99");
        }
    });
});
//========================================================================================================================================================
