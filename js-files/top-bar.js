// for menu

const buttons = document.querySelectorAll('.menu-btn');
const allButton = document.getElementById('active');
let currentClicked = allButton;

buttons.forEach((button) => {
	button.addEventListener('click', () => {
		if (button === currentClicked) {
			currentClicked.classList.remove('menu-clicked');
			allButton.classList.add('menu-clicked');
			currentClicked = allButton;
		} else {
			currentClicked.classList.remove('menu-clicked');
			button.classList.add('menu-clicked');
			currentClicked = button;
		}
	});
});

// slide buttons
const menuBar = document.getElementById('menu-bar');
const nextBtn = document.getElementById('menu-next');
const prevBtn = document.getElementById('menu-previous');

nextBtn.addEventListener('click', () => {
	menuBar.scrollBy({ left: 300, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
	menuBar.scrollBy({ left: -300, behavior: 'smooth' });
});
