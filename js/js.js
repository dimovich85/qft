$(function(){

/* Modal */

let $modalContainer = $('section.modal-container');
let classForClose = 'd-n';
let activeContentClass = 'active';

let $showContact = $('button.btn_contact');
let $showVideo = $('button.btn_video');
let $showMore = $('button.btn_more');

let $modalContact = $('section.modal-container .contact-us');
let $modalVideo = $('section.modal-container .watch-video');
let $modalMore = $('section.modal-container .more');

	$('.modal-container').on('click', function(e){
		if ($(e.target).is('section.modal-container')){
			$('section.modal-container .modal__content.active').removeClass(activeContentClass);
			$modalContainer.addClass(classForClose);
		}
	});

	$showContact.on('click', function(){
		$modalContact.addClass(activeContentClass);
		$modalContainer.removeClass(classForClose);
	});

	$showVideo.on('click', function(){
		$modalVideo.addClass(activeContentClass);
		$modalContainer.removeClass(classForClose);
	});

	$showMore.on('click', function(){
		$modalMore.addClass(activeContentClass);
		$modalContainer.removeClass(classForClose);
	});

/* END Modal */


/* Links menu and scroll */

let $links = $('.navblock__link, .logotype, .link__down, .button-up')
				.not(function(){
					return $(this).hasClass('navblock__link_phone');
				});

	$links.on('click', function scroll(e){
		e.preventDefault();
		let offset = 100;
		let $elem = $(e.target);
		let link;

		if($elem.is('a')){
			link = $elem.attr('href');
		} else if( !$elem.is('a') && !$elem.is('img.logotype__svg') ){
			link = $elem.parent('a').attr('href') || $elem.find('a').attr('href');
		} else if( $elem.is('img.logotype__svg') ) {
			link = '#top';
		}

		$('html, body').animate({
			scrollTop: $(link).offset().top - offset
		}, 500);
		return false;
	});

/* END Links */

/* Scroll functions: Parallax and Button up */

let $button = $('.button-up');
let $header = $('.header__nav');

$button.css('display', 'none');

	$(window).on('scroll', function(e){
		let $scrollWindow = $(e.target);
		let $target = $('main.first-screen');
		let targetParentHeight = $target.parents('.header').outerHeight();
		let scrolledPixels = $scrollWindow.scrollTop();
		let offset = (scrolledPixels / targetParentHeight) * 100 / 5;

		if(scrolledPixels < targetParentHeight + 50 ){
			$button.css('display', 'none').addClass('showed');
			$header.removeClass('scroll-header');
			$target.css({
				transition: 'transform 0.5s',
				transform: `translateY(${offset}%) `
			});
		} else {
			offset = 0;
			$header.addClass('scroll-header');
			$button.css('display', 'block');
			$target.css({
				transform: `translateY(${offset})`,
				transition: 'transform 0.5s'
			});
		}
	});

/* END Scroll functions */

/* Hamburger */

let $hamburger = $('.icon__hamburger');
let $menu = $('.navblock__menu');
let $links_menu = $menu.find('a:not(navblock__link_phone)');

	$hamburger.on('click', function(){
		$hamburger.toggleClass('clicked');
		$menu.toggleClass('hamburger');
	});

	$links_menu.on('click', function(){
		$menu.removeClass('hamburger');
		$hamburger.removeClass('clicked');
	});

/* END Hamburger */

});



// Работа с окнами (показ, скрытие)
/*$(document).ready(function(){
	$('img.closer').click(function(){
		$('.cont_menu').addClass('closed');
		$('.join_form').addClass('closed');
	});

	$('.hamburger-cont').click(function(){
		$('.cont_menu').removeClass('closed');
		$('.cont_menu').css({'z-index':'1001'});
	});

	$('.cont_menu nav a').click(function(){
		$('.cont_menu').addClass('closed');
	});

	$('button.connect-us').click(function(){
		$('.join_form').removeClass('closed');
	});
});*/

// Плавный скролл

/*function scroll(id){
	var offset = 100;
	$('html, body').animate({
		scrollTop: $(id).offset().top - offset
	}, 500);
	return false;
}*/

// Paralax

/*$(document).ready(function(){
	$(window).scroll(function(){
		var position = $(this).scrollTop();
		console.log(position);
		$('section.first-screen main .wrapper ').css({
			'transform' : 'translate(0%, ' + position/8 + '%)',
		});
	});
	$(window).scroll(function(){
		var position = $(this).scrollTop();
		if (position >= 2550 && position <= 3000){
			$('section.slogan h1').css({
				'transform' : 'translate(0%, ' + (position-2520)/5 + '%)',
			});
		}
		if(position >= 4500 && position <= 4950){
			$('section.slogan h1').css({
				'transform' : 'translate(0%, ' + (position-4470)/10 + '%)',
			});
		}
		
	});

});*/

// Header

/*$(window).scroll(function(){
	var position = $(this).scrollTop();
	if (position >= 700){
		$('.first-screen header').addClass('scroll-header');
	} 
	else{
		$('.first-screen header.scroll-header').removeClass('scroll-header');
	}
});*/

// Button up

/*$(window).scroll(function(){
	var position = $(this).scrollTop();
	if (position >= 3100){
		$('.button-up').removeClass('closed');
	} 
	else{
		$('.button-up').addClass('closed');
	}
});*/

// Header for table, fixed d-ostatok
/*$('.table_container').on('scroll', function(e){
	$('thead').offset({
		left: - e.target.scrollLeft + 10,
	});
});*/


// Работа с модальными окнами

/*let $modalContainer = $('section.modal-container');
let classForClose = 'd-n';
let activeContent = 'active';
let $iconCloser = $('section.modal-container i.fa.closer');*/
// Настройка кнопки закрытия модального окна
	/*$iconCloser.on('click', function(){
		$(activeContent).removeClass('active');
		$modalContainer.addClass(classForClose);
	});*/
// Для корректного отображения, надо сначала добавить в контент нужное содержимое
// потом задать ему класс active
// после чего убрать класс .d-n у section, а закрыть - наоборот