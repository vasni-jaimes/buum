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



//EFECTO HOME SPRINNG
$('section.slider-bumming .info-slider h2:nth-child(2)').hover(function(){
	$(this).css('letter-spacing', '25px');
	$(this).addClass('cambio');
	$(this).prev().css({
		'letterSpacing': '25px',
		'color': '#D24D39',
	});

	$('figure.one-img').fadeOut();
	$('figure.two-img').fadeIn();

}, function(){

    $(this).css('letter-spacing', '0');
    $(this).removeClass('cambio');
	$(this).prev().css({
		'letterSpacing': '0',
		'color': '#000',
	});

	$('figure.one-img').fadeIn();
	$('figure.two-img').fadeOut();
});


//EFECTO HOME SUMMER
$('section.slider-bumming .info-slider ul li.summer').hover(function(){
	let hh2 = $('section.slider-bumming .info-slider h2:nth-child(2)');

	hh2.text("SUMMER");
	hh2.css('letter-spacing', '25px');
	hh2.addClass('cambio');
	hh2.prev().css({
		'letterSpacing': '25px',
		'color': '#D24D39',
	});

	$('figure.one-img').fadeOut();
	$('figure.summer').fadeIn();
}, function(){
	let hh2 = $('section.slider-bumming .info-slider h2:nth-child(2)');

	hh2.text("SPRING");
    hh2.css('letter-spacing', '0');
    hh2.removeClass('cambio');
	hh2.prev().css({
		'letterSpacing': '0',
		'color': '#000',
	});

	$('figure.one-img').fadeIn();
	$('figure.summer').fadeOut();
});




//EFECTO HOME FALL
$('section.slider-bumming .info-slider ul li.fall').hover(function(){
	let hh2 = $('section.slider-bumming .info-slider h2:nth-child(2)');

	hh2.text("FALL");
	hh2.css('letter-spacing', '25px');
	hh2.addClass('cambio');
	hh2.prev().css({
		'letterSpacing': '25px',
		'color': '#D24D39',
	});

	$('figure.one-img').fadeOut();
	$('figure.fall').fadeIn();
}, function(){
	let hh2 = $('section.slider-bumming .info-slider h2:nth-child(2)');

	hh2.text("SPRING");
    hh2.css('letter-spacing', '0');
    hh2.removeClass('cambio');
	hh2.prev().css({
		'letterSpacing': '0',
		'color': '#000',
	});

	$('figure.one-img').fadeIn();
	$('figure.fall').fadeOut();
});



//EFECTO HOME WINTER
$('section.slider-bumming .info-slider ul li.winter').hover(function(){
	let hh2 = $('section.slider-bumming .info-slider h2:nth-child(2)');

	hh2.text("WINTER");
	hh2.css('letter-spacing', '25px');
	hh2.addClass('cambio');
	hh2.prev().css({
		'letterSpacing': '25px',
		'color': '#D24D39',
	});

	$('figure.one-img').fadeOut();
	$('figure.winter').fadeIn();
}, function(){
	let hh2 = $('section.slider-bumming .info-slider h2:nth-child(2)');

	hh2.text("SPRING");
    hh2.css('letter-spacing', '0');
    hh2.removeClass('cambio');
	hh2.prev().css({
		'letterSpacing': '0',
		'color': '#000',
	});

	$('figure.one-img').fadeIn();
	$('figure.winter').fadeOut();
});





