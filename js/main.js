'use strict';

var leftKeeper = document.getElementById('goalkeeper_left'),
	rightKeeper = document.getElementById('goalkeeper_right');

function goalKeeperMover(event) {
	var value = 20,
		leftStartValue = leftKeeper.offsetTop,
		rightStartValue = rightKeeper.offsetTop;
		console.log(event)
	if (event.which === 119 || event.which === 1094) {
		if (leftKeeper.offsetTop < 20) {
			return false;
		}

		leftKeeper.style.top = leftStartValue - value + 'px';
	}

	if (event.which === 115 || event.which === 1099) {
		if (leftKeeper.offsetTop > 460) {
			return false;
		}
		leftKeeper.style.top = leftStartValue + value + 'px';
	}

	if (event.which === 105 || event.which === 1096) {
		if (rightKeeper.offsetTop < 20) {
			return false;
		}

		rightKeeper.style.top = rightStartValue - value + 'px';
	}

	if (event.which === 107 || event.which === 1083) {
		if (rightKeeper.offsetTop > 460) {
			return false;
		}
		rightKeeper.style.top = rightStartValue + value + 'px';
	}
}
document.documentElement.addEventListener("keypress", goalKeeperMover);