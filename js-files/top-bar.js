const tabsBox = document.querySelector('.menu-bar');
const allTabs = tabsBox.querySelectorAll('.menu-btn');
const leftArrow = document.getElementById('menu-previous');
const rightArrow = document.getElementById('menu-next');
let isDragging = false;

// Show/hide arrow buttons
const handleIcons = () => {
	const scrollLeft = tabsBox.scrollLeft;
	const maxScroll = tabsBox.scrollWidth - tabsBox.clientWidth;

	// Left arrow
	if (scrollLeft <= 0) {
		leftArrow.parentElement.style.opacity = '0';
		leftArrow.parentElement.style.pointerEvents = 'none';
	} else {
		leftArrow.parentElement.style.opacity = '1';
		leftArrow.parentElement.style.pointerEvents = 'auto';
	}

	// Right arrow
	if (maxScroll - scrollLeft <= 1) {
		rightArrow.parentElement.style.opacity = '0';
		rightArrow.parentElement.style.pointerEvents = 'none';
	} else {
		rightArrow.parentElement.style.opacity = '1';
		rightArrow.parentElement.style.pointerEvents = 'auto';
	}
};

// On arrow click
leftArrow.addEventListener('click', () => {
	tabsBox.scrollLeft -= 340;
	setTimeout(handleIcons, 100);
});

rightArrow.addEventListener('click', () => {
	tabsBox.scrollLeft += 340;
	setTimeout(handleIcons, 100);
});

// Drag scroll
const dragging = (e) => {
	if (!isDragging) return;
	tabsBox.scrollLeft -= e.movementX;
	handleIcons();
};

tabsBox.addEventListener('mousedown', () => (isDragging = true));
tabsBox.addEventListener('mousemove', dragging);
document.addEventListener('mouseup', () => (isDragging = false));

// Initial load
window.addEventListener('load', handleIcons);
tabsBox.addEventListener('scroll', handleIcons);

// active
const allButton = document.getElementById('active');
let currentClicked = allButton;

allTabs.forEach((button) => {
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
