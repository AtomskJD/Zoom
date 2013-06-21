var Zoom = {
	mobile: 480,
	tablet: 768,
	desktop: 980,
	
	sid: 'id0',

	init: function(container){
		var _this = this;
		console.log("load once");
		/*init полуразмер банера*/
		if(container.find('.half-sized').length){
			Zoom.HalfSize.init(container.find('.half-sized'));

			$(window).resize(function(){
				Zoom.HalfSize.init(container.find('.half-sized'));
				});
		}
		
		if(container.find('#scroll-to-content').length){
			Zoom.scrollToContent.init(container.find('#scroll-to-content'));
		}

		/*init navigation*/
		if (container.find('nav a').length) {
			Zoom.Navigation.init(container.find('nav a'));
		};

		/*init Waypoints*/
		$('#logo img').waypoint(function(){
			console.log("спрятал");
			$('#scroll-to-content').fadeOut();
		});
		$('#logo img').waypoint(function(){
			console.log("показал");
			$('#scroll-to-content').fadeIn();
		},{offset:20});

		/* Init layerSlider*/
		if(container.find('.slider').length){
			$('.slider').layerSlider({
					skinsPath : 'layerslider/skins/',
					skin : 'noskin',
					thumbnailNavigation : 'none',
					navButtons : false,
					pauseOnHover : false,
					hoverPrevNext : false,
					showBarTimer : true,
					showCircleTimer : false,
					autoStart : true
				});
		}		
		if(container.find('.slider-preview').length){
			$('.slider-preview').layerSlider({
					skinsPath : 'layerslider/skins/',
					skin : 'minimal',
					thumbnailNavigation : 'hover',
					showBarTimer : true,
					showCircleTimer : false,
					hoverPrevNext : false,
					autoStart : false
				});
		}

//TODO: переписать под инициализацию-тело

/*$('.test-container').isotope({
	itemSelector: '.item',
	layoutMode: 'fitRows'
});*/var iii = 1;
		/* Init slideDown contacts*/
		$('.contact-button').mouseenter(function(){
			$('.contact-panel').slideDown();
		});
		$('.contact-panel*').mouseleave(function(){
			// $(this).hide();
			$(this).slideUp();
		});
		/* INIT scene*/
		/* Click scene*/
		$('.thumbnails .mybtn').click(function(){
			$('.scene').show();
			$('.myicon-close-black').show();
			var sid = $(this).parent().data('sceneId');

			if(Zoom.sid != sid){
			console.log('is ZOOM sid ' + Zoom.sid);
				// $('#'+Zoom.sid).remove();
				// $('.ls-bottom-nav-wrapper').remove();
				$('.scene').layerSlider('stop');
				$('.scene').empty();
			Zoom.sid = sid;
				console.log('sid is ' + sid);
				$('.scene').load('gallery.html #'+ sid);
				$(window).scrollTo('.scene', 600);
				$('.scene').layerSlider({
						skinsPath : 'layerslider/skins/',
						skin : 'minimal',
						thumbnailNavigation : 'hover',
						showBarTimer : true,
						showCircleTimer : false,
						hoverPrevNext : false,
						autoStart : true
					});
			} 

			iii = iii + 1;
			
			// $('.scene').load('grid.html');
				// $('.scene').slideToggle(1000);
				// $('.scene').show().animate({height:'500px'}, 500);

				/*var newItems = $('<div class="item"><div class="item2" /></div>');
				$('.test-container').isotope( 'insert', newItems );*/

		});
		/*INIT close button*/
		$('.myicon-close-black').click(function(){
						console.log('hide scene');
						$('.scene').slideUp(600);
						$('.myicon-close-black').hide();
					});
		$('.scene').layerSlider({
					skinsPath : 'layerslider/skins/',
					skin : 'minimal',
					thumbnailNavigation : 'hover',
					hoverPrevNext : false,
					autoStart : false
				});
	}//END INIT

};

Zoom.scrollToContent = {

	init: function(e){
		var obj = $(e).find('a');
		$(obj).click(function(){

			$(window).scrollTo('.content', 600);
		});
	}
}

Zoom.HalfSize = {
	init: function(e){
		$(e).each(function(){
			if($(window).width()>Zoom.desktop){
				$(this).height($(window).height() / 2);
			}else if( ($(window).width()<Zoom.desktop) && ($(window).width()>=Zoom.tablet) ) {
				//$(this).height($(window).height() / 4);
				//console.log("есть свойство")
				if($(this).attr('style')){
					$(this).removeAttr('style');
				}
				//$(this).attr
			}
		});

	}
}

Zoom.Navigation = {
	init: function(e){
		var _this = this,
		defaults = {
			child: 'span',
			parent: 'nav',
			speed: 200
		};
	$(e).click(function(){
		var $this = $(this);
		_this.setActive($this, defaults);
	});
	},
	setActive: function($active, defaults){
		var _this = this,
			$li = $active.parent('li');

		if(!$li.hasClass('active')){
			 console.log("menu slide");
			$active.parents(defaults.parent).find('.active ' + defaults.child).slideToggle(defaults.speed, 
				function(){
					$(this).parents('.active').removeClass('active');
					$active.find(defaults.child).slideToggle(defaults.speed, 
						function(){
							//$(this).parents('li').addClass('active');
							$li.addClass('active');
						});
				});
		}
	}
};

$(function(){
	Zoom.init($('body'));
	$(window).scrollTo(0,400);
});


/*$(function(){

$('#container').isotope({
  // options
  itemSelector : '.item',
  layoutMode : 'fitRows'
});


$('.row').isotope({
  // options
  itemSelector : '.color1',
  layoutMode : 'fitRows'
});
$(".row").first().height($(window).height() / 2);	

$('h1').click(function(){
	$(".row").first().height($(document).height() +200);	
});
$('h2').click(function(){
	$(document).scrollTo('#scroll', 800);	
});
});
*/