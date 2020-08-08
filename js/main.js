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


	// ymaps.ready(init);

	// function init() {
	// 	// Создание карты.
	// 	var myMap = new ymaps.Map("map", {
	// 		// Координаты центра карты.
	// 		// Порядок по умолчанию: «широта, долгота».
	// 		// Чтобы не определять координаты центра карты вручную,
	// 		// воспользуйтесь инструментом Определение координат.
	// 		center: [55.774054, 37.651793],
	// 		// Уровень масштабирования. Допустимые значения:
	// 		// от 0 (весь мир) до 19.
	// 		zoom: 16
	// 	});
	// 	var myGeoObject = new ymaps.GeoObject({
	// 		geometry: {
	// 			type: "Point", // тип геометрии - точка
	// 			coordinates: [55.774054, 37.651793] // координаты точки
	// 		}
	// 	});

	// 	var myPlacemark = new ymaps.Placemark([55.774054, 37.651793]);
	// 	myMap.geoObjects.add(myPlacemark);
	// }

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
					minlength: "Write more than one simbol",
				},
				email: {
					required: "Email is required",
					email: "Write like this: name@domain.com",
				},
				tel: {
					required: "Phone is required",
				},
			},
		});
	});

	$(".map__image").one("mouseover", () => {
		$("#map").append('<iframe src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8974.191549155095!2d37.6641184781334!3d55.78380901859595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b53585de4dc5e9%3A0x73a95baaa6869a53!2sHilton%20Garden%20Inn%20Moscow%20Krasnoselskaya!5e0!3m2!1sru!2sru!4v1595344884354!5m2!1sru!2sru" width = "100%" height = "100%" frameborder = "0" style = "border:0;" allowfullscreen = "" aria - hidden = "false" tabindex = "0" ></iframe>');
		$(".map__image").addClass("map__image--dn");
	});
});

















// $(".map__image").mouseover(function () {
// 	$(".map__image").addClass("map__image--dn");
// 	let map;

// 	function initMap() {
// 		var opt = {
// 			center: {
// 				lat: 41.011845,
// 				lng: 39.615020
// 			},
// 			zoom: 8
// 		}
// 		map = new google.maps.Map(document.getElementById("map"), opt);
// 	}
// 	initMap();
// });
// AOS.init();
//