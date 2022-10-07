$(window).on("load",function() {
	if (typeof EventTarget !== "undefined") {
		let func = EventTarget.prototype.addEventListener;
		EventTarget.prototype.addEventListener = function (type, fn, capture) {
			this.func = func;
			if(typeof capture !== "boolean"){
				capture = capture || {};
				capture.passive = false;
			}
			this.func(type, fn, capture);
		};
	};

	let header=$('#header');
	let buttonArrow=$('#button-arrow');
	let headerHeight = header.innerHeight();
	let scrollTop=$(window).scrollTop();

	scrool(headerHeight,scrollTop);

	$(window).on("scroll resize",function(){
		scrollTop=$(window).scrollTop();
		scrool(headerHeight,scrollTop);
	});

	function scrool(headerHeight,scrollTop){
		if(scrollTop>=headerHeight){
			header.addClass("fixedJS");
			buttonArrow.addClass("visibility-arrow");
		}
		else{
			header.removeClass("fixedJS");
			buttonArrow.removeClass("visibility-arrow");
		}
	}

	//Scroll

	$("[data-scroll]").on("click",function(e){
		e.preventDefault();
		let val=$(this).attr("data-scroll");
		$('html, body').animate({
			scrollTop: $(val).offset().top  // класс объекта к которому приезжаем
		}, 500);
		$("#nav").removeClass("visibility");
	});

	//button burger

	function buttonBurger(){
		$("#nav").toggleClass("visibility");
	}
	$("#burger").on("click",buttonBurger);
	let slider=$(".slider__container");
	slider.slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		//fade: true,
		arrows: false,
		dots: true
	});
});

