---
layout: post
title:  "Object Oriented JavaScript"
date:   2015-09-21 23:40:02
categories: project
featured: true
featured_image: "/images/bugGame.png"
---

## Frogger Arcade Game Clone

### Udacity's Front-end Developer Nanodegree P3

## Situation:

### Learn OOJ via creating objects and functions to make a Frogger Game clone.

## Objective:

### The game runs on a loop that connects and renders the images once all objects and related methods have been created in app.js.

## Action:

### 1) Take the OOJ and HTML5Canvas Class.

### 2) Understand comments in engine.js and resources.js.

### 3) Create empty functions in app.js to render images.

### 4) Use Math.random to add randomness to the game.

### 5) Create loop that renders enemy bugs on and off the screen.

### 6) Write input handlers so player moves across the screen and stays on stage.

### 7) Reset player when he reaches the water.

### 8) Reset player when he collides with an enemy bug.

## Result:

### A game where the player has to get to the other side of the stage without getting hit by an enemy bug.  The player will reset to the start position if hit by a bug or if the player reaches the other side.

## [Play on Github Pages](http://jaroot32.github.io/bugGame/)


	// Enemies our player must avoid
	var Enemy = function() {
	    'use strict';
	    // Variables applied to each of our instances go here,
	    // we've provided one for you to get started
	    this.reset();
	    // The image/sprite for our enemies, this uses
	    // a helper we've provided to easily load images
	    this.sprite = 'images/enemy-bug.png';
	};

	Enemy.prototype.reset = function() {
	    'use strict';
	    this.col = -2;
	    this.row = getRandomIntInclusive(1, 3);
	    this.x = 101 * this.col;
	    this.y = 83 * this.row;
	    this.speed = getRandomIntInclusive(1, 6);
	};

	// Update the enemy's position, required method for game
	// Parameter: dt, a time delta between ticks
	Enemy.prototype.update = function(dt) {
	    'use strict';
	    // You should multiply any movement by the dt parameter
	    // which will ensure the game runs at the same speed for
	    // all computers.
	    this.x = (this.x + this.speed);
	    this.y = 83 * this.row;

	    if (this.x > 505) {
	        this.reset();
	    }
	    if (player.row === this.row && this.x + 101 > player.x) {
	        player.reset();
	        this.reset();
	    }
	};

	// Draw the enemy on the screen, required method for game
	Enemy.prototype.render = function() {
	    'use strict';
	    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
	};


	// Now write your own player class
	// This class requires an update(), render() and
	// a handleInput() method.


	var Player = function() {
	    'use strict';
	    this.reset();
	    this.sprite = 'images/char-boy.png';
	};



	// Now instantiate your objects.
	// Place all enemy objects in an array called allEnemies

	var allEnemies = [];
	for (var i = 0; i < 4; i++) {
	    allEnemies.push(new Enemy());
	}

	Player.prototype.render = function() {
	    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
	};

	Player.prototype.reset = function() {
	    this.col = 3;
	    this.row = 5;
	    this.moveable = true;
	};

	// Parameter: dt, a time delta between ticks
	Player.prototype.update = function(dt) {
	    // You should multiply any movement by the dt parameter
	    // which will ensure the game runs at the same speed for
	    // all computers.
	    if (this.moveable) {
	        this.x = 101 * this.col;
	        this.y = 83 * this.row;
	    }
	    if (this.y < 83 && this.moveable) {
	        this.moveable = false;
	        return true;
	    }
	};



	Player.prototype.handleInput = function(key) {
	    switch (key) {
	        case "left":
	            this.col--;
	            break;
	        case "up":
	            this.row--;
	            break;
	        case "right":
	            this.col++;
	            break;
	        case "down":
	            this.row++;
	            break;
	    }
	    if (this.col < 0) this.col = 0;
	    if (this.col > 4) this.col = 4;
	    if (this.row > 5) this.row = 5;
	    //Player wins the game reset
	    if (this.row < 0) this.reset();
	};

	// This function is used to generate x and y coordinates between 0 and 1 with a noneven distribution.
	function getRandomIntInclusive(min, max) {
	    return Math.round(Math.floor(Math.random() * (max - min + 1)) + min);
	}

	// Place the player object in a variable called player

	var player = new Player();

	// This listens for key presses and sends the keys to your
	// Player.handleInput() method. You don't need to modify this.
	document.addEventListener('keyup', function(e) {
	    var allowedKeys = {
	        37: 'left',
	        38: 'up',
	        39: 'right',
	        40: 'down'
	    };

	    player.handleInput(allowedKeys[e.keyCode]);
	});