// Работа с окнами (показ, скрытие)
$(document).ready(function(){
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
});

// Плавный скролл

function scroll(id){
	var offset = 100;
	$('html, body').animate({
		scrollTop: $(id).offset().top - offset
	}, 500);
	return false;
}

// Paralax

$(document).ready(function(){
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

});

// Header

$(window).scroll(function(){
	var position = $(this).scrollTop();
	if (position >= 700){
		$('.first-screen header').addClass('scroll-header');
	} 
	else{
		$('.first-screen header.scroll-header').removeClass('scroll-header');
	}
});

// Button up

$(window).scroll(function(){
	var position = $(this).scrollTop();
	if (position >= 3100){
		$('.button-up').removeClass('closed');
	} 
	else{
		$('.button-up').addClass('closed');
	}
});

// Header for table, fixed d-ostatok
$('.table_container').on('scroll', function(e){
	$('thead').offset({
		left: - e.target.scrollLeft + 10,
	});
});


// Работа с модальными окнами

let $modalContainer = $('section.modal-container');
let classForClose = 'd-n';
let activeContent = 'active';
let $iconCloser = $('section.modal-container i.fa.closer');
// Настройка кнопки закрытия модального окна
	$iconCloser.on('click', function(){
		$(activeContent).removeClass('active');
		$modalContainer.addClass(classForClose);
	});
// Для корректного отображения, надо сначала добавить в контент нужное содержимое
// потом задать ему класс active
// после чего убрать класс .d-n у section, а закрыть - наоборот