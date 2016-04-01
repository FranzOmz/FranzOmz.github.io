'use strict';


/* ------------------ИГРОК------------------ */

function Keeper(identity) {
	this.speed = 20;
	this.identity = document.getElementById(identity);
}

let player1 = new Keeper('goalkeeper_left'),
	player2 = new Keeper('goalkeeper_right');



// /* ------------------КНОПКИ------------------ */

let keys = {
	_pressed: {},

	firstPlayer: {
      UP: 87,
      DOWN: 83
	},

	secondPlayer: {
		UP: 38,
		DOWN: 40
	},

      isDown: function(keyCode) {
        return this._pressed[keyCode];
      },

      onKeydown: function(event) {
        if (event.keyCode === keys.firstPlayer.UP || event.keyCode === keys.firstPlayer.DOWN) {
    		keys._pressed[event.keyCode] = true;
    		event.preventDefault();
    	}
    	if (event.keyCode === keys.secondPlayer.UP || event.keyCode === keys.secondPlayer.DOWN) {
    		keys._pressed[event.keyCode] = true;
    	}

    	if (keys.isDown(this.firstPlayer.UP)) player1.moveUp(player1.identity.offsetTop);
    	if (keys.isDown(this.secondPlayer.UP)) player2.moveUp(player2.identity.offsetTop);
    	if (keys.isDown(this.firstPlayer.DOWN)) player1.moveDown(player1.identity.offsetTop);
    	if (keys.isDown(this.secondPlayer.DOWN)) player2.moveDown(player2.identity.offsetTop);
      },

      onKeyup: function(event) {
      	if (event.keyCode === keys.firstPlayer.UP || event.keyCode === keys.firstPlayer.DOWN) {
    		delete this._pressed[event.keyCode];
    	}
    	if (event.keyCode === keys.secondPlayer.UP || event.keyCode === keys.secondPlayer.DOWN) {
    		delete this._pressed[event.keyCode];
    	}
      }
}

/* ------------------ДВИЖЕНИЯ------------------ */

    Keeper.prototype.moveUp = function(position) {
    	if (this.identity.offsetTop < 20) {
      		return false
      	}
      	this.identity.style.top = position - this.speed + 'px';
    };

    Keeper.prototype.moveDown = function(position) {
    	if (this.identity.offsetTop > 460) {
      		return false
      	}
      this.identity.style.top = position + this.speed + 'px';
    };

    document.addEventListener('keyup', function(event) { keys.onKeyup(event); });
    document.addEventListener('keydown', function(event) { keys.onKeydown(event); });