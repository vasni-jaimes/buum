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



//EFECTO HOME

$('section.slider-bumming .info-slider h2:nth-child(2)').hover(function(){
	$(this).css('letter-spacing', '25px');
	$(this).addClass('cambio');
	$(this).prev().css({
		'letterSpacing': '25px',
		'color': '#D24D39',
	});

	$('.one-img').animate({opacity: '0'}, 300, function() {
		$('.one-img').css('display', 'none');
		$('.two-img').css({'opacity': '1', 'left': '0'});
		$('.two-img').fadeToggle();
	});


}, function(){
    $(this).css('letter-spacing', '0');
    $(this).removeClass('cambio');
	$(this).prev().css({
		'letterSpacing': '0',
		'color': '#000',
	});

	$('.two-img').animate({opacity: '0'}, 300, function() {
		$('.two-img').css('display', 'none');
		$('.one-img').css({'opacity': '1', 'left': '0'});
		$('.one-img').fadeToggle();
	});
});
