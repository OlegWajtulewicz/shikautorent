/* Календар */

// Підключення функціоналу "Чертоги Фрілансера"
// Підключення списку активних модулів
import { flsModules } from "../modules.js";

// Підключення модуля
import datepicker from 'js-datepicker';

if (document.querySelector('[data-datepicker]')) {
	const startDatePicker = datepicker('#start-date', {
        customDays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
		customMonths: ["Янв", "Февр", "Март", "Апр", "Май", "Июнь", "Июль", "Авг", "Сен", "Окт", "Нояб", "Дек"],
		overlayButton: 'Применить',
		overlayPlaceholder: 'Год (4 цифры)',
		startDay: 1,
		formatter: (input, date, instance) => {
			const value = date.toLocaleDateString()
			input.value = value
		},
		onSelect: function (input, instance, date) {

		}
    });
	const finishDatePicker  = datepicker('#finish-date', {
        customDays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
		customMonths: ["Янв", "Февр", "Март", "Апр", "Май", "Июнь", "Июль", "Авг", "Сен", "Окт", "Нояб", "Дек"],
		overlayButton: 'Применить',
		overlayPlaceholder: 'Год (4 цифры)',
		startDay: 1,
		formatter: (input, date, instance) => {
			const value = date.toLocaleDateString()
			input.value = value
		},
		onSelect: function (input, instance, date) {

		}
    });
	// const picker = datepicker('[data-datepicker]', {
	// 	customDays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
	// 	customMonths: ["Янв", "Февр", "Март", "Апр", "Май", "Июнь", "Июль", "Авг", "Сен", "Окт", "Нояб", "Дек"],
	// 	overlayButton: 'Применить',
	// 	overlayPlaceholder: 'Год (4 цифры)',
	// 	startDay: 1,
	// 	formatter: (input, date, instance) => {
	// 		const value = date.toLocaleDateString()
	// 		input.value = value
	// 	},
	// 	onSelect: function (input, instance, date) {

	// 	}
	// });
	//flsModules.datepicker = picker;
	flsModules.startDatePicker = startDatePicker;
    flsModules.finishDatePicker = finishDatePicker;
}
