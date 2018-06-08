jQuery(document).ready(function($) {

	var breakPoint = 800;

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
		if($(window).width() > breakPoint){
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

	/////////////////
	// Mobile Menu //
	/////////////////

	var mobileOpenState = false;
	var mobileNav = $('#menu');
	var navSlide = $('.scroll');

	mobileNav.click(function(e) {
		e.stopPropagation();
		if (mobileOpenState) {
			navSlide.css({"transform":"translate(0px, 0px)"});
			mobileNav.removeClass('active');
			mobileOpenState = false;
		} 
		else{
			navSlide.css({"transform":"translate(" + (-1 * navSlide.outerWidth()) + "px, 0px)"});
			mobileNav.addClass('active');
			mobileOpenState = true;
		};
	});

	$('#close').click(function(e) {
		if (mobileOpenState) {
			navSlide.css({"transform":"translate(0px, 0px)"});
			mobileNav.removeClass('active');
			mobileOpenState = false;
		}
	});

	$('html').click(function() {
		if (mobileOpenState) {
			navSlide.css({"transform":"translate(0px, 0px)"});
			mobileNav.removeClass('active');
			mobileOpenState = false;
		}
	});

	$(window).resize(function() {
		if($(window).width() > breakPoint){
			if (mobileOpenState) {
				navSlide.css({"transform":"translate(0px, 0px)"});
				mobileNav.removeClass('active');
				mobileOpenState = false;
			}
		}
	});

	////////////////
	// Search API //
	////////////////

	$('#search').submit(function(e){
		e.preventDefault();

		var searchTerm = $('#searchTerms').val();
		if(searchTerm.length > 1){
			$.ajax({
				type: 'GET',
				url: '/search.php',
				data: {s:searchTerm},
				async: false,
				complete: function(response) {
					var results = JSON.parse(response.responseText);
					console.log(results);
					var html = '';

					for (var i = 0; i < results['hits'].length; i++) {
						if(results['hits'][i].type == 'post'){
							html += '<article class="post">\
										<h2><a href="' + results['hits'][i].url + '">' + results['hits'][i].title + '</a></h2>\
										<div class="post-content">' + results['hits'][i].html + '</div>\
									</article>';
						}
					}
					$('.content-container').html(html);
				}
			});
		}
	});

	if($('#searchTitle').length){
		
	}
});


















