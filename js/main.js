var hotelSlider = new Swiper('.hotel-slider', {
	// Optional parameters
	loop: true,
	keyboard: {
		enabled: true,
		onlyInViewport: false
	},

	// Navigation arrows
	navigation: {
		nextEl: '.hotel-slider__button--next',
		prevEl: '.hotel-slider__button--prev',
	},

})

var reviewsSlider = new Swiper('.reviews-slider', {
	// Optional parameters
	loop: true,
	keyboard: {
		enabled: true,
		onlyInViewport: false
	},

	// Navigation arrows
	navigation: {
		nextEl: '.reviews-slider__button--next',
		prevEl: '.reviews-slider__button--prev',
	},

})





















ymaps.ready(init);

function init() {
	// Создание карты.
	var myMap = new ymaps.Map("map", {
		// Координаты центра карты.
		// Порядок по умолчанию: «широта, долгота».
		// Чтобы не определять координаты центра карты вручную,
		// воспользуйтесь инструментом Определение координат.
		center: [55.774054, 37.651793],
		// Уровень масштабирования. Допустимые значения:
		// от 0 (весь мир) до 19.
		zoom: 16
	});
	var myGeoObject = new ymaps.GeoObject({
		geometry: {
			type: "Point", // тип геометрии - точка
			coordinates: [55.774054, 37.651793] // координаты точки
		}
	});

	var myPlacemark = new ymaps.Placemark([55.774054, 37.651793]);
	myMap.geoObjects.add(myPlacemark);
}