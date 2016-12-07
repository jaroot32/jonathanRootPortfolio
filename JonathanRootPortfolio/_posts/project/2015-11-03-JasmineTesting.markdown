---
layout: post
title:  "JavaScript Testing w/Jasmine"
date:   2015-10-16 23:13:02
categories: project
featured: true
featured_image: "/images/UdaciFeeds.png"
---

## Project Overview

### The student is given a web-based application that reads RSS feeds.  The application has an incomplete test suite. The student must complete the suite of tests below to meet specification.


## How will I complete this project?

### 1. Write a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.</li>

### 2. Write a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.

### 3. Write a new test suite named "The menu".

### 4. Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.

### 5. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.

### 6. Write a test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container. Remember, loadFeed() is asynchronous so this test wil require the use of Jasmine's beforeEach and asynchronous done() function.

### 7. Write a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes. Remember, loadFeed() is asynchronous.


## Run the project


## [View on Github Pages](http://jaroot32.github.io/JasmineTest-Project6/)

## Final feedreader.js spec file

	'use strict';
	$(function() {
	    describe('RSS Feeds', function() {
	        /* A test to make sure that the
	         * allFeeds variable has been defined and that it is not
	         * empty.
	         */
	        it('variable is defined and not empty', function() {
	            expect(allFeeds).toBeDefined();
	            expect(allFeeds.length).not.toBe(0);
	        });


	        /* This is a test that loops through each feed
	         * in the allFeeds object and ensures it has a URL defined
	         * and that the URL is not empty.
	         */
	        it("has URLs defined and is not empty", function() {
	            allFeeds.forEach(function(feed) {

	                expect(feed.url).toBeDefined();
	                expect(feed.url.length).not.toBe(0);
	            });
	        });


	        /* This is a test that loops through each feed
	         * in the allFeeds object and ensures it has a name defined
	         * and that the name is not empty.
	         */
	        it("name is defined and not empty", function() {
	            allFeeds.forEach(function(feed) {

	                expect(feed.name).toBeDefined();
	                expect(feed.name.length).not.toBe(0);
	            });
	        });
	    });


	    /*  a new test suite named "The menu" */
	    describe("The menu", function() {

	        /* A test that ensures the menu element is
	         * hidden by default. You'll have to analyze the HTML and
	         * the CSS to determine how we're performing the
	         * hiding/showing of the menu element.
	         */
	        var body = $('body');
	        it("is hidden by default", function() {

	            expect(body.hasClass('menu-hidden')).toEqual(true);
	        });

	        /* A test that ensures the menu changes
	         * visibility when the menu icon is clicked. This test
	         * has two expectations: does the menu display when
	         * clicked and does it hide when clicked again.
	         */

	        it("is visible on click", function() {
	            $('a.menu-icon-link').trigger('click');
	            expect(body.hasClass('menu-hidden')).toEqual(false);
	        });


	        it("is hidden when clicked again", function() {

	            $('a.menu-icon-link').trigger('click');
	            expect(body.hasClass('menu-hidden')).toEqual(true);
	        });

	    });

	    /*  A test suite named "Initial Entries" */
	    describe("Initial Entries", function() {
	        beforeEach(function(done) {
	            loadFeed(0, done);

	        });


	        /* A test that ensures when the loadFeed
	         * function is called and completes its work, there is at least
	         * a single .entry element within the .feed container.
	         * loadFeed() is asynchronous so this test requires
	         * the use of Jasmine's beforeEach and asynchronous done() function.
	         */

	        it('feed actually loads and .feed has articles', function() {
	            //compare html contents of .feed with current title
	            expect($('.feed').length).not.toBe(0);
	        });
	    });

	    /* A test suite named "New Feed Selection" */
	    describe("New Feed Selection", function() {

	        var feed;
	        beforeEach(function(done) {
	            loadFeed(0, function() {
	                feed = $('.feed').html();
	                loadFeed(1, done);
	            });
	        });


	        it('is loaded and the content actually changes', function() {
	            expect($('.feed').html()).not.toEqual(feed);
	        });
	    });
	}());
