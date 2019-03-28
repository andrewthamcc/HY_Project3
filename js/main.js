// select DOM objects associated with the menu button and menu navigation
const headerBackground = document.querySelector('.header');
const heroImage = document.querySelector('.heroSection');
const scrollArrow = document.querySelector('.jumpArrow');
const scrollTitle = document.querySelector('.header__titleLink');

// detects when user scrolls page and calls function
$(window).on('scroll', function(){
	amountScrolled();
})

// scroll function to change header to solid color
function amountScrolled(){

	// calculates the percentage of window scrolled
	var winheight = $(window).height()
	var docheight = $(document).height()
	var scrollTop = $(window).scrollTop()
	var trackLength = docheight - winheight
	var pctScrolled = Math.floor(scrollTop/trackLength * 100)

	// header title is visible when scrolled
	if (pctScrolled > 15){
		headerBackground.classList.add('header--show');
		$('.header__title').fadeIn(300);
	} 
	// removes header title when near the top
	if (pctScrolled <= 15) {
		headerBackground.classList.remove('header--show');
		$('.header__title').fadeOut(300);
	}

	// changing the background image to grey scale
	if (pctScrolled > 15){
		heroImage.style.backgroundImage = "url('./assets/herogrey.jpg')";
	}

	// resets the image to color
	if (pctScrolled <= 10) {
		heroImage.style.backgroundImage = "url('./assets/herocolor.jpg')";
	}
}

//smooth scrolling with jump arrow or header button
$(scrollArrow).smoothScroll({
	offset: -100,
});

$(scrollTitle).smoothScroll({});
