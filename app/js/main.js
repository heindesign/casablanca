/* isotope */

$(window).on("load", function() {
	$(".sort-by__item").on("click", function() {
		$(".sort-by__item").removeClass("active");
		$(this).addClass("active");

		var data = $(this).attr("data-filter");
		$workGrid.isotope({
			filter: data
		});
	});
	if (document.getElementById("work")) {
		var $workGrid = $(".projects").isotope({
			itemSelector: ".grid-item",
			percentPosition: true,
			masonry: {
				columnWidth: ".grid-sizer"
			}
		});
	}
});

/**/


/* clients slider */

function clientsSlider(){
	if ( $('.clients-slider').length ){
		$('.clients-slider').owlCarousel({
			items: 5,
			autoplay: true,
			autoplayTimeout: 2500,
			loop: true,
			nav: false,
			dots: false,
			responsive: {
				0: {
					items: 1,
				},
				400: {
					items: 2,
				},
				576: {
					items: 3,
				},
				768: {
					items: 4,
				},
				992: {
					items: 5,
				}
				}
			})
		}
	}

clientsSlider();

/**/