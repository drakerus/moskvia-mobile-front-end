$(function() {


	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".menu-button .menu").slideToggle();
		return false;
	});

	$(".action .action-list").owlCarousel({
		items: 3,
		dots: false,
		startPosition: 1,
		autoWidth: true,
		loop: true
	});

	$(".spec-list").owlCarousel({
		items: 3,
		dots: false,
		startPosition: 1,
		autoWidth: true,
		loop: true
	});
	var wWidth = $(window).width();
	var itemWidth = $(".owl-stage-outer .owl-stage .owl-item").width();
	var leftP = (wWidth - itemWidth)/2;
	$(".owl-stage-outer .owl-stage").css("left", leftP + 'px');

	$(window).resize( function() {
		wWidth = $(window).width();
		itemWidth = $(".owl-stage-outer .owl-stage .owl-item").width();
		leftP = (wWidth - itemWidth)/2;
		$(".owl-stage-outer .owl-stage").css("left", leftP + 'px');
	});

	$(".about-list").owlCarousel({
		items: 1
	});

	 $(".custom-select").niceSelect();

	$('.accordion__trigger').on('click', function(e) {
		e.preventDefault();
		
		var $this = $(this),
		accordionItem = $this.closest('.accordion__item'),
		accordionList = $this.closest('.accordion__list'),
		accordionItems = accordionList.find('.accordion__item'),
		accordeonContent = accordionItem.find('.accordion__content'),
		accordeonOtherContent = accordionList.find('.accordion__content'),
		
		duration = 250;
		
		if (!accordionItem.hasClass('is-active')) {
			accordionItem.addClass('is-active').siblings().removeClass('is-active');
			accordeonOtherContent.slideUp(duration);
			accordeonContent.slideDown(duration);
		} else {
			accordeonOtherContent.slideUp(duration);
			
			accordionItem.removeClass('is-active');
		}
	});

	$('.accordion__trigger2').on('click', function(e) {
		e.preventDefault();
		
		var $this = $(this),
		accordionItem = $this.closest('.accordion__item2'),
		accordionList = $this.closest('.accordion__list2'),
		accordionItems = accordionList.find('.accordion__item2'),
		accordeonContent = accordionItem.find('.accordion__content2'),
		accordeonOtherContent = accordionList.find('.accordion__content2'),
		
		duration = 250;
		
		if (!accordionItem.hasClass('is-active')) {
			accordionItem.addClass('is-active').siblings().removeClass('is-active');
			accordeonOtherContent.slideUp(duration);
			accordeonContent.slideDown(duration);
		} else {
			accordeonOtherContent.slideUp(duration);
			
			accordionItem.removeClass('is-active');
		}
	});

	$(".collapse-link").on("click", function() {
		$(this).parent().css("display", "none");
		$(this).parent().parent().removeClass("is-active");
	});


	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
