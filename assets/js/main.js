let menu = document.querySelector('.burger');
if (menu) {
	menu.addEventListener('click', function(e) {
		e.preventDefault();
		document.querySelector('nav').classList.add('active');
	})
}

let close = document.querySelector('nav .close');
if (close) {
	close.addEventListener('click', function(e) {
		e.preventDefault();
		document.querySelector('nav').classList.remove('active');
	})
}


//EFECTO DE ALICK AL MENU
let itemMenu = document.querySelectorAll('header nav a');
if (itemMenu) {
	for (var i = 0; i <= itemMenu.length - 1; i++) {
		itemMenu[i].addEventListener('click', function(e) {
			$('nav').removeClass();
		});
	}
}



//REDIRECCION SUMMER
const summer = document.querySelector('.info-slider .estacion-principal');
if (summer) {
	summer.addEventListener('click', function(e) {
		e.preventDefault();
		window.location.href = '/buum/summer.html';
	});
}



//EFECTO HOME H2 -(PRINCIPAL)
$('section.slider-bumming .info-slider h2:nth-child(2)').hover(function(){
	$(this).css('letter-spacing', '25px');
	$(this).css('display', 'inline-block');
	$(this).addClass('cambio');
	$(this).prev().css({
		'letterSpacing': '25px',
		'color': '#D24D39',
	});

	// $('figure.one-img').fadeOut();
	// $('figure.two-img').fadeIn();
	$('figure.one-img').css("display", "none");
	$('figure.summer').css("display", "block");

}, function(){

    $(this).css('letter-spacing', '0');
    $(this).removeClass('cambio');
	$(this).prev().css({
		'letterSpacing': '0',
		'color': '#000',
	});

	// $('figure.one-img').fadeIn();
	// $('figure.two-img').fadeOut();

	$('figure.summer').css("display", "none");
	$('figure.one-img').css("display", "block");
	
});



//EFECTO HOME SPRINNG
$('section.slider-bumming .info-slider ul li.spring').hover(function(){
	let hh2 = $('section.slider-bumming .info-slider h2:nth-child(2)');

	hh2.text("SPRING");
	hh2.css('letter-spacing', '25px');
	hh2.css('display', 'inline-block');
	hh2.addClass('cambio');
	hh2.prev().css({
		'letterSpacing': '25px',
		'color': '#D24D39',
	});

	// $('figure.one-img').fadeOut();
	// $('figure.two-img').fadeIn();
	$('figure.one-img').css("display", "none");
	$('figure.two-img').css("display", "block");

}, function(){

	let hh2 = $('section.slider-bumming .info-slider h2:nth-child(2)');
	hh2.text("SUMMER");
    hh2.css('letter-spacing', '0');
    hh2.removeClass('cambio');
	hh2.prev().css({
		'letterSpacing': '0',
		'color': '#000',
	});

	// $('figure.one-img').fadeIn();
	// $('figure.two-img').fadeOut();

	$('figure.two-img').css("display", "none");
	$('figure.one-img').css("display", "block");
});


//EFECTO HOME SUMMER
$('section.slider-bumming .info-slider ul li.summer').hover(function(){
	let hh2 = $('section.slider-bumming .info-slider h2:nth-child(2)');

	hh2.text("SUMMER");
	hh2.css('letter-spacing', '25px');
	hh2.css('display', 'inline-block');
	hh2.addClass('cambio');
	hh2.prev().css({
		'letterSpacing': '25px',
		'color': '#D24D39',
	});

	// $('figure.one-img').fadeOut();
	// $('figure.summer').fadeIn();

	$('figure.one-img').css("display", "none");
	$('figure.summer').css("display", "block");

}, function(){
	let hh2 = $('section.slider-bumming .info-slider h2:nth-child(2)');

	hh2.text("SPRING");
    hh2.css('letter-spacing', '0');
    hh2.removeClass('cambio');
	hh2.prev().css({
		'letterSpacing': '0',
		'color': '#000',
	});

	// $('figure.one-img').fadeIn();
	// $('figure.summer').fadeOut();

	$('figure.summer').css("display", "none");
	$('figure.one-img').css("display", "block");
	
});




//EFECTO HOME FALL
$('section.slider-bumming .info-slider ul li.fall').hover(function(){
	let hh2 = $('section.slider-bumming .info-slider h2:nth-child(2)');

	hh2.text("FALL");
	hh2.css('letter-spacing', '25px');
	hh2.css('display', 'block');
	hh2.addClass('cambio');
	hh2.prev().css({
		'letterSpacing': '25px',
		'color': '#D24D39',
	});

	// $('figure.one-img').fadeOut();
	// $('figure.fall').fadeIn();

	$('figure.one-img').css("display", "none");
	$('figure.fall').css("display", "block");

}, function(){
	let hh2 = $('section.slider-bumming .info-slider h2:nth-child(2)');

	hh2.text("SUMMER");
    hh2.css('letter-spacing', '0');
    hh2.css('display', 'inline-block');
    hh2.removeClass('cambio');
	hh2.prev().css({
		'letterSpacing': '0',
		'color': '#000',
	});

	// $('figure.one-img').fadeIn();
	// $('figure.fall').fadeOut();

	$('figure.fall').css("display", "none");
	$('figure.one-img').css("display", "block");
	
});



//EFECTO HOME WINTER
$('section.slider-bumming .info-slider ul li.winter').hover(function(){
	let hh2 = $('section.slider-bumming .info-slider h2:nth-child(2)');

	hh2.text("WINTER");
	hh2.css('letter-spacing', '25px');
	hh2.css('display', 'inline-block');
	hh2.addClass('cambio');
	hh2.prev().css({
		'letterSpacing': '25px',
		'color': '#D24D39',
	});

	// $('figure.one-img').fadeOut();
	// $('figure.winter').fadeIn();

	$('figure.one-img').css("display", "none");
	$('figure.winter').css("display", "block");

}, function(){
	let hh2 = $('section.slider-bumming .info-slider h2:nth-child(2)');

	hh2.text("SUMMER");
    hh2.css('letter-spacing', '0');
    hh2.removeClass('cambio');
	hh2.prev().css({
		'letterSpacing': '0',
		'color': '#000',
	});

	// $('figure.one-img').fadeIn();
	// $('figure.winter').fadeOut();

	$('figure.winter').css("display", "none");
	$('figure.one-img').css("display", "block");
	
});





