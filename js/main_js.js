$(document).ready(function(){ 

	
	//search_modul
	$('select').styler();

	$('.search_top').on('click', function(){
		$('.search_modul').animate({'left':'0'}, 200);
	});
	$('.cloused_search img').on('click', function(){
		$('.search_modul').animate({'left':'-100%'}, 200);
	});
	//search_modul


	//video_youtube
	$('.play').on('click', function(){
		$('.play, .video_title').animate({'opacity':'0'}, 100);
		$('.video_youtube').delay(100).fadeIn(500);
		$('.video').animate({'padding-top':'102px'}, 1000);

	});

	$('.cloused_video img').on('click', function(){
		$('.play, .video_title').animate({'opacity':'1'}, 100);
		$('.video_youtube').hide();
		$('.video').css({'padding-top':'154px'});

	});
	//video_youtube


//You have to add jQuery.
//Function.
function lateral(button, classShow, classHide, menu){
	var laBarra = document.querySelectorAll('.barra');
	$(button).click(function(){
		$(menu).toggleClass(classShow);
		$(menu).toggleClass(classHide);

		for(i = 0;i < laBarra.length; ++i){
			if ($(laBarra[i]).hasClass('barra'+(i+1)+'on')) {
				$(laBarra[i]).removeClass('barra'+(i+1)+'on');
				$(laBarra[i]).addClass('barra'+(i+1)+'off');
			}else{
				$(laBarra[i]).removeClass('barra'+(i+1)+'off');
				$(laBarra[i]).addClass('barra'+(i+1)+'on');
			}
		}
	});
}
//Call function.
lateral('#header_btn_menu','latAparece','latDesaparece','aside');

//Explanation the call.
//lateral('button-class-or-id','class--makes-appear','class-make-disappear','the-element-that-contain-the-menu');


















var Accordion = function(el, multiple) {
	this.el = el || {};
	this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
		$this = $(this),
		$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('#accordion'), false);





	var tabs =  $(".tabs li a");

	tabs.click(function() {
		var content = this.hash.replace('/','');
		tabs.removeClass("active");
		$(this).addClass("active");
		$("#content").find('div').hide();
		$(content).fadeIn(200);
	});








});