'use strict';

var leftKeeper = document.getElementById('goalkeeper_left'),
rightKeeper = document.getElementById('goalkeeper_right');

function goalKeeperMover(event) {
	var value = 20,
		leftStartValue = leftKeeper.offsetTop,
		rightStartValue = rightKeeper.offsetTop;

	if (event.which === 119) {
		if (leftKeeper.offsetTop < 20) {
			return false;
		}

		leftKeeper.style.top = leftStartValue - value + 'px';
	}

	if (event.which === 115) {
		if (leftKeeper.offsetTop > 460) {
			return false;
		}
		leftKeeper.style.top = leftStartValue + value + 'px';
	}

	if (event.which === 105) {
		if (rightKeeper.offsetTop < 20) {
			return false;
		}

		rightKeeper.style.top = rightStartValue - value + 'px';
	}

	if (event.which === 107) {
		if (rightKeeper.offsetTop > 460) {
			return false;
		}
		rightKeeper.style.top = rightStartValue + value + 'px';
	}
}

document.documentElement.addEventListener("keypress", goalKeeperMover);