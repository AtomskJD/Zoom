var Zoom = {
	mobile: 480,
	tablet: 768,
	desktop: 980,

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
					skinsPath : '../layerslider/skins/',
					skin : 'glass',
					thumbnailNavigation : 'hover',
					hoverPrevNext : false,
					autoStart : true
				});
		}
//TODO: переписать под инициализацию-тело

/*$('.test-container').isotope({
	itemSelector: '.item',
	layoutMode: 'fitRows'
});*/var iii = 1;
		$('.contact-button').mouseover(function(){
			$('.contact-panel').slideDown();
		});
		$('.contact-panel').mouseout(function(){
			$(this).slideUp();
		});

		$('h3').click(function(){

			$('.test-container').load('item1.html #item'+iii);
			iii = iii + 1;
			/*$(window).scrollTo('h1', 400);
			$(window).queue(function(){
				$('.scene').slideToggle(1000);
				$(this).dequeue();
			});*/
			
			// $('.scene').load('grid.html');
				// $('.scene').slideToggle(1000);
				// $('.scene').show().animate({height:'500px'}, 500);

				/*var newItems = $('<div class="item"><div class="item2" /></div>');
				$('.test-container').isotope( 'insert', newItems );*/

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