$(document).ready(function () {

percentShow = false;
init();

});

function init () {

	enableHome();
	enableIntro();
	enableTransport();
	enableLogement();
	enableActivites();
	enableConclusion();
	enableMerci();
	events();

};

function enableHome () {

	$('.home').height(window.innerHeight);

	$('.home h1').css('margin-top', $('.home h1').height() / -2);

};

function enableIntro () {

	$('.introduction .title').height(window.innerHeight);

	$('.introduction h2').css('margin-top', $('.introduction h2').height() / -2);

};

function enableTransport () {

	$('.transport .title').height(window.innerHeight);

	$('.transport h2').css('margin-top', $('.transport h2').height() / -2);

};

function enableLogement () {

	$('.logement .title').height(window.innerHeight);

	$('.logement h2').css('margin-top', $('.logement h2').height() / -2);

};

function enableActivites () {

	$('.activites .title').height(window.innerHeight);

	$('.activites h2').css('margin-top', $('.activites h2').height() / -2);

};

function enableConclusion () {

	$('.conclusion .title').height(window.innerHeight);

	$('.conclusion h2').css('margin-top', $('.conclusion h2').height() / -2);

};

function enableMerci () {

	$('.merci .title').height(window.innerHeight);

	$('.merci h2').css('margin-top', $('.conclusion h2').height() / -2);

};

function events () {

	$(window).scroll(function () {

		if ($(document).scrollTop() >= $('.menu').offset().top) {

			$('.menu').addClass('fixed');

		}

		if ($(document).scrollTop() <= $('.introduction').offset().top - 50) {

			$('.menu').removeClass('fixed');

			$('.menu ul li').removeClass('active');
			$('.menu ul li a').removeClass('active');

		}

		if ($(document).scrollTop() >= $('.introduction').offset().top - 50 && $(document).scrollTop() <= $('.transport').offset().top - 50) {

			$('.menu ul li').removeClass('active');
			$('.menu ul li a').removeClass('active');

			$('.menu ul li:nth-child(2)').addClass('active');
			$('.menu ul li:nth-child(2) a').addClass('active');

		};

		if ($(document).scrollTop() >= $('.content-introduction').offset().top - 50 && $(document).scrollTop() <= $('.transport').offset().top - 50) {

			percentageAnimation();

		};

		if ($(document).scrollTop() >= $('.transport').offset().top - 50 && $(document).scrollTop() <= $('.logement').offset().top - 50) {

			$('.menu ul li').removeClass('active');
			$('.menu ul li a').removeClass('active');

			$('.menu ul li:nth-child(3)').addClass('active');
			$('.menu ul li:nth-child(3) a').addClass('active');

		};

		if ($(document).scrollTop() >= $('.logement').offset().top - 50 && $(document).scrollTop() <= $('.activites').offset().top - 50) {

			$('.menu ul li').removeClass('active');
			$('.menu ul li a').removeClass('active');

			$('.menu ul li:nth-child(4)').addClass('active');
			$('.menu ul li:nth-child(4) a').addClass('active');

		};

		if ($(document).scrollTop() >= $('.activites').offset().top - 50 && $(document).scrollTop() <= $('.conclusion').offset().top - 50) {

			$('.menu ul li').removeClass('active');
			$('.menu ul li a').removeClass('active');

			$('.menu ul li:nth-child(5)').addClass('active');
			$('.menu ul li:nth-child(5) a').addClass('active');

		};

		if ($(document).scrollTop() >= $('.conclusion').offset().top - 50 && $(document).scrollTop() <= $('.merci').offset().top - 50) {

			$('.menu ul li').removeClass('active');
			$('.menu ul li a').removeClass('active');

			$('.menu ul li:nth-child(6)').addClass('active');
			$('.menu ul li:nth-child(6) a').addClass('active');

		};

	});

	// Madjid

	$('.menu-item').on('click', function(event){
		if ( $(event.currentTarget).hasClass('menu-item-0') ) {
			$('body').animate({
				scrollTop: 0
			}, 750);
		}
		else if ( $(event.currentTarget).hasClass('menu-item-1') ) {
			$('body').animate({
				scrollTop: $('.introduction').offset().top - 50
			}, 750);
		}
		else if ( $(event.currentTarget).hasClass('menu-item-2') ) {
			$('body').animate({
				scrollTop: $('.transport').offset().top - 50
			}, 750);
		}
		else if ( $(event.currentTarget).hasClass('menu-item-3') ) {
			$('body').animate({
				scrollTop: $('.logement').offset().top - 50
			}, 750);
		}
		else if ( $(event.currentTarget).hasClass('menu-item-4') ) {
			$('body').animate({
				scrollTop: $('.activites').offset().top - 50
			}, 750);
		}
		else if ( $(event.currentTarget).hasClass('menu-item-5') ) {
			$('body').animate({
				scrollTop: $('.conclusion').offset().top - 50
			}, 750);
		}
		
	})

};


// Madjid

function percentageAnimation(){

	if (!percentShow) {

		percentShow = true;

		percent = {
			number: 0
		};

		TweenMax.to(percent, 3, {
			number: 60,
			ease: Quad.easeIn,
			onUpdate: function(){
				$('#introduction-percentage').html(Math.round(percent.number) + '%');
			}
		});


	}

}