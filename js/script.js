var Zoom = {
	mobile: 480,
	tablet: 768,
	desktop: 980,

	init: function(container){
		var _this = this;
		/*init полуразмер банера*/
		if(container.find('.half-sized').length){
			Zoom.HalfSize.init(container.find('.half-sized'));

			$(window).resize(function(){
				Zoom.HalfSize.init(container.find('.half-sized'));
				});
		}
		
	}

};

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