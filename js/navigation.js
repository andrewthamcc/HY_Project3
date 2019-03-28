// select DOM objects associated with the menu button and menu navigation
const headerButton = document.querySelector('.header__button');
const menuBtn = document.querySelector('.header__menuBtn');
const mainNav = document.querySelector('.header__mainNav');
const menuList = document.querySelector('.mainNav__list');

// Set state of menu
// false = menu is not opened
let showMenu = false;

// calls menu function when user clicks on menu button
headerButton.addEventListener('click', toggleMenu);

// menu function to open and close menu
function toggleMenu() {
	// checks if menu is open or close
	if(!showMenu) { 
		// adds close class to menu button and open clase to menu navigation
		menuBtn.classList.add('close');
		mainNav.classList.add('open');
		menuList.classList.add('open');

		// sets new menu state to be opened
		showMenu = true;
	} else {
		// removes close class from menu button and open class from menu naigation
		menuBtn.classList.remove('close');
		mainNav.classList.remove('open');
		menuList.classList.remove('open');

		// sets menu state to be closed
    showMenu = false;
  }
}