const burgerNavbar = document.getElementById('burger-navbar');
const mainVideo = document.getElementById('main-video');
const navbar = document.getElementById('navbar');
const menuWrapper = document.getElementById('menu-wrapper');

function navbarDisplay() {
	if (navbar.style.display === 'none') {
		navbar.style.display = 'block';
		mainVideo.style.width = '80%';
		mainVideo.style.left = '270px';
		mainVideo.style.height = '80%';
		menuWrapper.style.marginLeft = '170px';
		menuWrapper.style.width = '80%';
	} else {
		navbar.style.display = 'none';
		mainVideo.style.width = '92%';
		mainVideo.style.left = '105px';
		mainVideo.style.height = '100%';
		menuWrapper.style.marginLeft = '-0px';
		menuWrapper.style.width = '91%';
	}
}
