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


const info_slider = document.querySelectorAll('.info-slider ul li');
if (info_slider) {
	for (var i = 0; i <= info_slider.length - 1; i++) {
		info_slider[i].addEventListener('click', function(e) {
			e.preventDefault();
			let url = e.target.getAttribute('src');
			window.location.href = url;
		});
	}
}


//DETECTAR DISPOSITIVO MOBILE
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

	//EFECTO EN MOBILE ----------------------------------------------------------------------------

	const li_spring = document.querySelector('li.spring');
	if (li_spring) {

		//H2
		$('section.slider-bumming .info-slider h2:nth-child(2)').on('touchstart', function(e) {
			let touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
	        let x = touch.pageX;
	        let y = touch.pageY;

			$('.efect-mobile').css('left', x+'px');
			$('.efect-mobile').css('top', y+'px');
			$('.efect-mobile').addClass('efect-active');

			//cambiar imagen
			$(this).text("SUMMER");
			$(this).css('letter-spacing', '25px');
			$(this).css('color', '#fff');
			$(this).css('display', 'inline-block');
			$(this).addClass('cambioSummer');
			$(this).prev().css({
				'letterSpacing': '7px',
				'color': '#D24D39',
			});
			$('.info-slider ul li').css('color', '#fff');

			$('.imagen-slider figure').fadeOut();
			$('figure.summer').fadeIn();
		});


		//LI
		$('li.spring').on('touchstart', function(e) {
			let touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
	        let x = touch.pageX;
	        let y = touch.pageY;

			$('.efect-mobile').css('left', x+'px');
			$('.efect-mobile').css('top', y+'px');
			$('.efect-mobile').addClass('efect-active');

			//cambiar imagen

			let hh2 = $('section.slider-bumming .info-slider h2:nth-child(2)');
			hh2.text("SPRING");
			hh2.css('letter-spacing', '25px');
			hh2.css('color', '#fff');
			hh2.css('display', 'inline-block');
			hh2.addClass('cambioSpring');
			hh2.prev().css({
				'letterSpacing': '7px',
				'color': '#D24D39',
			});
			$('.info-slider ul li').css('color', '#fff');

			$('.imagen-slider figure').fadeOut();
			$('figure.two-img').fadeIn();
		});


		//LI
		$('li.fall').on('touchstart', function(e) {
			let touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
	        let x = touch.pageX;
	        let y = touch.pageY;

			$('.efect-mobile').css('left', x+'px');
			$('.efect-mobile').css('top', y+'px');
			$('.efect-mobile').addClass('efect-active');

			//cambiar imagen

			let hh2 = $('section.slider-bumming .info-slider h2:nth-child(2)');
			hh2.text("FALL");
			hh2.css('letter-spacing', '25px');
			hh2.css('color', '#fff');
			hh2.css('display', 'block');
			hh2.addClass('cambioFall');
			hh2.prev().css({
				'letterSpacing': '7px',
				'color': '#D24D39',
			});
			$('.info-slider ul li').css('color', '#fff');

			$('.imagen-slider figure').fadeOut();
			$('figure.fall').fadeIn();
		});


		//LI
		$('li.winter').on('touchstart', function(e) {
			let touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
	        let x = touch.pageX;
	        let y = touch.pageY;

			$('.efect-mobile').css('left', x+'px');
			$('.efect-mobile').css('top', y+'px');
			$('.efect-mobile').addClass('efect-active');

			//cambiar imagen

			let hh2 = $('section.slider-bumming .info-slider h2:nth-child(2)');
			hh2.text("WINTER");
			hh2.css('letter-spacing', '25px');
			hh2.css('color', '#fff');
			hh2.css('display', 'inline-block');
			hh2.addClass('cambioWinter');
			hh2.prev().css({
				'letterSpacing': '7px',
				'color': '#D24D39',
			});
			$('.info-slider ul li').css('color', '#fff');

			$('.imagen-slider figure').fadeOut();
			$('figure.winter').fadeIn();
		});


		//LI
		$('li.summer').on('touchstart', function(e) {
			let touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
	        let x = touch.pageX;
	        let y = touch.pageY;

			$('.efect-mobile').css('left', x+'px');
			$('.efect-mobile').css('top', y+'px');
			$('.efect-mobile').addClass('efect-active');

			//cambiar imagen

			let hh2 = $('section.slider-bumming .info-slider h2:nth-child(2)');
			hh2.text("SUMMER");
			hh2.css('letter-spacing', '25px');
			hh2.css('color', '#fff');
			hh2.css('display', 'inline-block');
			hh2.addClass('cambioSummer');
			hh2.prev().css({
				'letterSpacing': '7px',
				'color': '#D24D39',
			});
			$('.info-slider ul li').css('color', '#fff');

			$('.imagen-slider figure').fadeOut();
			$('figure.summer').fadeIn();
		});


		//LI
		$('.info-slider ul li').on('touchend', function(e) {
			$('.efect-mobile').removeClass('efect-active');

			//code
			let hh2 = $('section.slider-bumming .info-slider h2:nth-child(2)');
			hh2.text("SUMMER");
		    hh2.css('letter-spacing', '0');
		    hh2.css('color', '#000');
		    hh2.removeClass('cambioSpring');
		    hh2.removeClass('cambioFall');
		    hh2.removeClass('cambioWinter');
		    hh2.removeClass('cambioSummer');
			hh2.prev().css({
				'letterSpacing': '0',
				'color': '#000',
			});
			$('.info-slider ul li').css('color', '#000');


			$('.imagen-slider figure').fadeOut();
			$('figure.one-img').fadeIn();
		});


		//LI
		$('.info-slider ul li').on('touchcancel', function(e) {
			$('.efect-mobile').removeClass('efect-active');

			//code
			let hh2 = $('section.slider-bumming .info-slider h2:nth-child(2)');
			hh2.text("SUMMER");
		    hh2.css('letter-spacing', '0');
		    hh2.css('color', '#000');
		    hh2.removeClass('cambioSpring');
		    hh2.removeClass('cambioFall');
		    hh2.removeClass('cambioWinter');
		    hh2.removeClass('cambioSummer');
			hh2.prev().css({
				'letterSpacing': '0',
				'color': '#000',
			});


			$('.imagen-slider figure').fadeOut();
			$('figure.one-img').fadeIn();
		});
	}

	//EFECTO EN MOBILE\\ ----------------------------------------------------------------------------
}
else {

	//EFECTO DESKTOP ESTACIONES  ----------------------------------------------------------------------------

	//EFECTO HOME H2 -(PRINCIPAL)
	$('section.slider-bumming .info-slider h2:nth-child(2)').hover(function(){
		$(this).css('letter-spacing', '25px');
		$(this).css('display', 'inline-block');
		$(this).addClass('cambioSummer');
		$(this).prev().css({
			'letterSpacing': '25px',
			'color': '#D24D39',
		});


		$('figure.one-img').stop().fadeOut(400);
		$('figure.summer').stop().fadeIn(400);

	}, function(){

	    $(this).css('letter-spacing', '0');
	    $(this).removeClass('cambioSummer');
		$(this).prev().css({
			'letterSpacing': '0',
			'color': '#000',
		});

		$('figure.summer').stop().fadeOut(400);
		$('figure.one-img').stop().fadeIn(400);
		
	});



	//EFECTO HOME SPRINNG
	$('section.slider-bumming .info-slider ul li.spring').hover(function(){
		let hh2 = $('section.slider-bumming .info-slider h2:nth-child(2)');

		hh2.text("SPRING");
		hh2.css('letter-spacing', '25px');
		hh2.css('display', 'inline-block');
		hh2.addClass('cambioSpring');
		hh2.prev().css({
			'letterSpacing': '25px',
			'color': '#D24D39',
		});

		$('figure.one-img').stop().fadeOut(400);
		$('figure.two-img').stop().fadeIn(400);

	}, function(){

		let hh2 = $('section.slider-bumming .info-slider h2:nth-child(2)');
		hh2.text("SUMMER");
	    hh2.css('letter-spacing', '0');
	    hh2.removeClass('cambioSpring');
		hh2.prev().css({
			'letterSpacing': '0',
			'color': '#000',
		});


		$('figure.two-img').stop().fadeOut(400);
		$('figure.one-img').stop().fadeIn(400);
	});


	//EFECTO HOME SUMMER
	$('section.slider-bumming .info-slider ul li.summer').hover(function(){
		let hh2 = $('section.slider-bumming .info-slider h2:nth-child(2)');

		hh2.text("SUMMER");
		hh2.css('letter-spacing', '25px');
		hh2.css('display', 'inline-block');
		hh2.addClass('cambioSummer');
		hh2.prev().css({
			'letterSpacing': '25px',
			'color': '#D24D39',
		});

		$('figure.one-img').stop().fadeOut(400);
		$('figure.summer').stop().fadeIn(400);

	}, function(){
		let hh2 = $('section.slider-bumming .info-slider h2:nth-child(2)');

		hh2.text("SPRING");
	    hh2.css('letter-spacing', '0');
	    hh2.removeClass('cambioSummer');
		hh2.prev().css({
			'letterSpacing': '0',
			'color': '#000',
		});


		$('figure.summer').stop().fadeOut(400);
		$('figure.one-img').stop().fadeIn(400);	
	});



	//EFECTO HOME FALL
	$('section.slider-bumming .info-slider ul li.fall').hover(function(){
		let hh2 = $('section.slider-bumming .info-slider h2:nth-child(2)');

		hh2.text("FALL");
		hh2.css('letter-spacing', '25px');
		hh2.css('display', 'block');
		hh2.addClass('cambioFall');
		hh2.prev().css({
			'letterSpacing': '25px',
			'color': '#D24D39',
		});


		$('figure.one-img').stop().fadeOut(400);
		$('figure.fall').stop().fadeIn(400);

	}, function(){
		let hh2 = $('section.slider-bumming .info-slider h2:nth-child(2)');

		hh2.text("SUMMER");
	    hh2.css('letter-spacing', '0');
	    hh2.css('display', 'inline-block');
	    hh2.removeClass('cambioFall');
		hh2.prev().css({
			'letterSpacing': '0',
			'color': '#000',
		});


		$('figure.fall').stop().fadeOut(400);
		$('figure.one-img').stop().fadeIn(400);
	});



	//EFECTO HOME WINTER
	$('section.slider-bumming .info-slider ul li.winter').hover(function(){
		let hh2 = $('section.slider-bumming .info-slider h2:nth-child(2)');

		hh2.text("WINTER");
		hh2.css('letter-spacing', '25px');
		hh2.css('display', 'inline-block');
		hh2.addClass('cambioWinter');
		hh2.prev().css({
			'letterSpacing': '25px',
			'color': '#D24D39',
		});


		$('figure.one-img').stop().fadeOut(400);
		$('figure.winter').stop().fadeIn(400);

	}, function(){
		let hh2 = $('section.slider-bumming .info-slider h2:nth-child(2)');

		hh2.text("SUMMER");
	    hh2.css('letter-spacing', '0');
	    hh2.removeClass('cambioWinter');
		hh2.prev().css({
			'letterSpacing': '0',
			'color': '#000',
		});

		$('figure.winter').stop().fadeOut(400);
		$('figure.one-img').stop().fadeIn(400);
	});

	//EFECTO DESKTOP ESTACIONES\\  ----------------------------------------------------------------------------
}




