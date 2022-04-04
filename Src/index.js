//Applies to all elements that have the waiting class.
$(window).scroll(function() {
	$('.waiting').each(function(index) {
    //When height of browser + vertical position of the scroll bar >= element's top value.
  		if($(window).height() + $(window).scrollTop() >= $(this).offset().top + 0){
  			$(this).queue(function(){

						if ($(this).hasClass("L")){
							$(this).addClass('fadeInLeft');
						}
						else if ($(this).hasClass("R")){
							$(this).addClass('fadeInRight');
						}
						else{
							$(this).addClass('fadeInO');
						}

    		});
  		}
	});

});
