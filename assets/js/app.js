jQuery(document).ready(function($) {

	///////////////
	// Nightmode //
	///////////////

	var nightButton = $("#nightmode");
	var dayButton = $("#daymode");
	var container = $('main');
	var nightmode = "nightmode";

	nightButton.click(function() {

		container.addClass(nightmode);
		$(this).toggle();
		dayButton.toggle();
		location.hash = "night";

		$("a").each(function() {
			jQuerythis = $(this);
			jQuerythis.attr("href", jQuerythis.attr("href") + "#night");
		});
	});

	dayButton.click(function() {

		container.removeClass(nightmode);
		$(this).toggle();
		nightButton.toggle();
		location.hash = "day";

		$("a").each(function() {
			jQuerythis = $(this);
			jQuerythis.attr("href", jQuerythis.attr("href").split('#')[0]);
		});
	});

	if(location.hash){
		var hashValue = location.hash.split('#')[1];
		if (hashValue == "night") {
			nightButton.trigger("click");
		};
	}

	////////////////////
	// Scroll Sidebar //
	////////////////////

	var scroll = $('.scroll');
	var scrollHeight = scroll.outerHeight() + parseInt(scroll.css('marginBottom'));
	var fixPoint = scroll.offset().top;
	$(window).scroll(function(){
		if($(window).width() > 760){
			if ($(window).scrollTop() >= fixPoint){
				scroll.addClass('fixed');
				// scroll.previous().css({'margin-bottom': scrollHeight + 'px'});
			}
			else{
				scroll.removeClass('fixed');
				// scroll.previous().css({'margin-bottom': 0});
			}
		}
	});
});