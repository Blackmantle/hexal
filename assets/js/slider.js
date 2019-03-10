(function() {
	let slider = document.querySelector('.slider');
	let slides = slider.querySelectorAll('.slider__item');
	let slider_menu;
	let slider_menu_active_item;
	let slider_menu_items = [];

	if (!slider || slides.length <= 1) {
		return;
	}

	(function createSliderMenu() {
		slider_menu = document.createElement('div');
		slider_menu.className = 'slider__slider-menu';

		for (let i = 0; i < slides.length; i++) {
			let slider_menu_item = document.createElement('div');
			slider_menu_item.className = 'slider__slider-menu-item';
			if (i === 0) {
				slider_menu_item.classList.add('slider__slider-menu-item--active');
				slider_menu_active_item = slider_menu_item;
			} else {
				slider_menu_item.classList.add('slider__slider-menu-item--inactive');
			}
			slider_menu_items.push(slider_menu_item);
			slider_menu.appendChild(slider_menu_item);
		}

		slider.appendChild(slider_menu);
	})();

	slider_menu.onclick = (e) => {
		slider_menu_items.forEach((item, index) => {
			if (e.target === item && item.classList.contains('slider__slider-menu-item--inactive')) {
				slides.forEach((slide) => {
					slide.style.transform = `translateX(-${index * 100}%)`;
				});

				item.classList.remove('slider__slider-menu-item--inactive');
				item.classList.add('slider__slider-menu-item--active');

				slider_menu_active_item.classList.remove('slider__slider-menu-item--active');
				slider_menu_active_item.classList.add('slider__slider-menu-item--inactive');
				slider_menu_active_item = item;

				return;
			}
		});
	};
	
})();