'use strict';

var leftKeeper = document.getElementById('goalkeeper_left'),
rightKeeper = document.getElementById('goalkeeper_right');

function goalKeeperMover(event) {
	if (event.which === 119) {
		let value = 20,
		// startValue = leftKeeper.getComputedStyle();
		console.log(leftKeeper[0].clientWidth);
		//leftKeeper.style.top = startValue + value + 'px';
		//console.log(leftKeeper.style.top = startValue + value + 'px')
	}
}

document.documentElement.addEventListener("keypress", goalKeeperMover);