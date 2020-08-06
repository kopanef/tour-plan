$(document).ready(function () {
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

	var menuButton = $('.menu-button');
	menuButton.on('click', function () {
		$('.navbar-bottom').toggleClass('navbar-bottom--visible')
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

	var modalButton = $("[data-toggle=modal]");
	var closeModalButton = $(".modal__close");
	modalButton.on("click", openModal);
	closeModalButton.on('click', closeModal)


	function openModal() {
		var targetModal = $(this).attr('data-href');
		$(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
		$(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
	}

	function closeModal(event) {
		event.preventDefault();
		var modalOverlay = $(".modal__overlay");
		var modalDialog = $(".modal__dialog");
		modalOverlay.removeClass("modal__overlay--visible");
		modalDialog.removeClass("modal__dialog--visible");
	}

	// Обработка форм
	$(".form").each(function () {
		$(this).validate({
			errorClass: "invalid",
			messages: {
				name: {
					required: "Write your name",
					minlength: "Name should contain more than one simbol",
				},
				email: {
					required: "We need your email address to contact you",
					email: "Your email address must be in the format of name@domain.com",
				},
				phone: {
					required: "Write your phone",
				},
			},
		});
	});
	AOS.init();
});