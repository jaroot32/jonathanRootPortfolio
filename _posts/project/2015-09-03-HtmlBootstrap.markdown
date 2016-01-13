---
layout: post
title:  "HTML & Bootstrap"
date:   2015-09-07 23:13:02
categories: project
featured: true
featured_image: "/images/Portfolio.png"
---

## HTML & Bootstrap Starter Portfolio

## Udacity's Front-end Developer Nanodegree P1

## Built with HTML & Bootstrap

### [View on Github pages.](http://jaroot32.github.io/puppySite/)





		<!DOCTYPE html>
		<html>

		<head>
		    <meta charset="utf-8">
		    <meta http-equiv="X-UA-Compatible" content="IE=edge">
		    <meta name="viewport" content="width=device-width, initial-scale=1">
		    <title>P. Portfolio</title>
		    <link href="http://fonts.googleapis.com/css?family=Lato:100,300" rel="stylesheet">
		    <link rel="stylesheet" href="css/normalize.css">
		    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
		    <link rel="stylesheet" href="css/styles.css">
		</head>

		<body>
		    <div class="container">
		        <header class="row">
		            <div class="col-md-6">
		                <img class="title-logo img-responsive" src="http://placehold.it/150x150" alt="Udacity Logo">
		            </div>
		            <div class="col-md-6 text-right text-uppercase">
		                <h1 class="text-thin title-super">Jon Doette</h1>
		                <h4>Front-end Ninja</h4>
		            </div>
		        </header>
		        <hr>
		        <div class="row">
		            <div class="col-md-12">
		                <img class="img-responsive" src="http://placehold.it/2600x600" alt="Main Hero Image" data-toggle="modal" data-target="#project1">
		            </div>
		        </div>
		        <!--end main hero image row-->
		        <div class="row">
		            <div class="col-md-12">
		                <h2 class="text-muted text-center">Featured Work</h2>
		            </div>
		        </div>
		        <!--end featured work heading row-->
		        <div class="row text-center center-featuredWork">
		            <div class="col-md-4">
		                <img class="img-responsive" src="images/nature.jpg" alt="Appify Puppy" data-toggle="modal" data-target="#projectAppify">
		                <h3 class="text-uppercase">Appify</h3>
		                <p>https://github.com/udacity/appify</p>
		            </div>
		            <div class="col-md-4">
		                <img class="img-responsive" src="images/sports.jpg" alt="Sunflower Puppy" data-toggle="modal" data-target="#projectSunflower">
		                <h3 class="text-uppercase">Sunflower</h3>
		                <p>https://github.com/udacity/sunflower</p>
		            </div>
		            <div class="col-md-4">
		                <img class="img-responsive" src="images/technics.jpg" alt="Bokeh Puppy" data-toggle="modal" data-target="#projectBokeh">
		                <h3 class="text-uppercase">Bokeh</h3>
		                <p>https://github.com/udacity/bokeh</p>
		            </div>
		        </div>
		        <!--end featured work images row-->
		        <!-- Modal -->
		        <div class="modal fade" id="project1" tabindex="-1" role="dialog" aria-labelledby="myMainLabel" aria-hidden="true">
		            <div class="modal-dialog">
		                <div class="modal-content">
		                    <div class="modal-header text-center">
		                        <h4 class="modal-title" id="myMainLabel">Favorite App Page</h4>
		                    </div>
		                    <div class="modal-body text-center">
		                        <img class="img-responsive" src="http://placehold.it/2600x600" alt="Main Hero Image"> This was my first project in this class. I learned a lot about HTML and CSS.
		                    </div>
		                    <div class="modal-footer">
		                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
		                    </div>
		                </div>
		            </div>
		        </div>
		        <!-- Modal -->
		        <div class="modal fade" id="projectAppify" tabindex="-1" role="dialog" aria-labelledby="myAppifyLabel" aria-hidden="true">
		            <div class="modal-dialog">
		                <div class="modal-content">
		                    <div class="modal-header text-center">
		                        <h4 class="modal-title" id="myAppifyLabel">Nature</h4>
		                    </div>
		                    <div class="modal-body text-center">
		                        <img class="img-responsive" src="images/nature.jpg" alt="Nature Image"> Using Code For Good.
		                    </div>
		                    <div class="modal-footer">
		                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
		                    </div>
		                </div>
		            </div>
		        </div>
		        <!-- Modal -->
		        <div class="modal fade" id="projectSunflower" tabindex="-1" role="dialog" aria-labelledby="mySunflowerLabel" aria-hidden="true">
		            <div class="modal-dialog">
		                <div class="modal-content">
		                    <div class="modal-header text-center">
		                        <h4 class="modal-title" id="mySunflowerLabel">Ninja</h4>
		                    </div>
		                    <div class="modal-body text-center">
		                        <img class="img-responsive" src="images/sports.jpg" alt="Sports Image"> Coding As An Artform.
		                    </div>
		                    <div class="modal-footer">
		                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
		                    </div>
		                </div>
		            </div>
		        </div>
		        <!-- Modal -->
		        <div class="modal fade" id="projectBokeh" tabindex="-1" role="dialog" aria-labelledby="myTechnicsLabel" aria-hidden="true">
		            <div class="modal-dialog">
		                <div class="modal-content">
		                    <div class="modal-header text-center">
		                        <h4 class="modal-title" id="myTechnicsLabel">Technology</h4>
		                    </div>
		                    <div class="modal-body text-center">
		                        <img class="img-responsive" src="images/technics.jpg" alt="Technics Image"> Changing the World We Live In.
		                    </div>
		                    <div class="modal-footer">
		                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </div>
		    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
		    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
		</body>

		</html>