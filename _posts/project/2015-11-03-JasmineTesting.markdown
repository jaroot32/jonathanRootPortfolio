---
layout: post
title:  "JavaScript Testing w/Jasmine"
date:   2015-10-16 23:13:02
categories: project
featured: true
featured_image: "/images/JasmineTesting.png"
---

# Project Overview

<p>The student is given a web-based application that reads RSS feeds.  The application has an incomplete test suite. The student must complete the suite of tests below to meet specification.</p>


# How will I complete this project?

<ul>
<li> 1. Write a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.</li>

<li> 2. Write a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.</li>

<li> 3. Write a new test suite named "The menu".</li>

<li> 4. Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.</li>

<li> 5. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.</li>

<li> 6. Write a test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container. Remember, loadFeed() is asynchronous so this test wil require the use of Jasmine's beforeEach and asynchronous done() function.</li>

<li> 7. Write a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes. Remember, loadFeed() is asynchronous.</li>
</ul>

## Run the project


## [View on gh-pages](http://jaroot32.github.io/JasmineTest-Project6/)
