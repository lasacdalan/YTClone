const burgerNavbar = document.getElementById('burger-navbar');
const mainVideo = document.getElementById('main-video');
const navbar = document.getElementById('navbar');
const menuBar = document.getElementById('menu-bar');

function navbarDisplay() {
	if (navbar.style.display === 'none') {
		navbar.style.display = 'block';
		mainVideo.style.width = '80%';
		mainVideo.style.left = '270px';
		mainVideo.style.height = '80%';
		menuBar.style.marginLeft = '250px';
	} else {
		navbar.style.display = 'none';
		mainVideo.style.width = '92%';
		mainVideo.style.left = '105px';
		mainVideo.style.height = '100%';
		menuBar.style.marginLeft = '90px';
	}
}
