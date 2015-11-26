---
layout: post
title:  "AJAX, APIs, & KnockoutJS"
date:   2015-11-17 23:13:02
categories: project
featured: true
featured_image: "/images/Neighborhood.png"
---

## Situation:

Udacity final project for the courseware on AJAX and Design Patterns.

## Features:

[KnockoutJS](http://knockoutjs.com/)

AJAX calls to [Wikipedia API](https://www.mediawiki.org/wiki/MediaWiki)

[jQuery](https://jquery.com/)

[Google Maps API](https://developers.google.com/maps/?hl=en)

[Google Fonts](https://www.google.com/fonts)

[Bootstrap CSS](http://getbootstrap.com/)

[Normalize CSS](https://necolas.github.io/normalize.css/)


## Run:

[View on gh-pages](http://jaroot32.github.io/movingApp/)

Download or clone repository and open index.html

## Objective

### Complete the app with the following specification requirements.

#### Interface Design

1) All application components render on-screen in a responsive manner.

2) All application components are usable across modern desktop, tablet, and phone browsers.

#### App Functionality

1) The search bar filters both the locations in the list view and the markers on the map.

2) List view shows locations that have been searched for, additionally clicking on a location activates its associated map marker.

3) Map shows each searched location as a marker, each maker can be clicked and shows unique information about a location in an infowindow.  Markers should animate when clicked (e.g. bouncing, color change).

#### App Architecture

1) Code is properly seperated based upon Knockout's best practices (following MVVM pattern,
avoiding updating the DOM manually, using observables rather than forcing refreshes manually, etc).

2) Student hard codes at least 5 locations in their model.

#### Asynchronous Data Usage

1) Application utilizes Google's Map Api and at least one additional third-party "data API."

2) All data requests are retrieved in an asynchronous manner.

3) Data requests that fail are handled using common fallback techniques (i.e. AJAX error or fail methods).

#### Location Details Functionality

1) Functionality providing additional data about a location is provided.

2) Application runs error free.

3) Functionality is presented in a usable and responsive manner.

#### Search Functionality

1) A search function is provided.

2) Search function runs error free.

3) A search function is presented in a usable and responsive manner.

#### List View Functionality

1) A "list view", or some other variation of browsing the content (beyond search/map) is provided.

2) List view functionality runs error free.

3) A "list view", or some other variation of browsing the content (beyond search/map) is presented in a usable and responsive manner.

#### Code Quality

1) Code is ready for personal review and neatly formatted.

#### Comments

1) Comments are present and effectively explain longer code procedures.

#### Documentation

1) A README file is included detailing all steps required to run the application.


## Attribution:

Special thanks to Matt Prather for his mentorship on the [Udacity Forum](https://discussions.udacity.com/t/filtering-google-maps-markers-with-list-view/34660/9)

Menu code is partially from the P6 feedreader project.


##Script.JS the main js file for the program

		var googleSuccess = function() {
		    "use strict";
		    // markersData variable stores the information necessary to each marker
		    var cityData = [{
		        cityName: "Seattle, WA",
		        cityDescript: "Where I currently live!",
		        cityStr: "Seattle",
		        streetView: "http://maps.googleapis.com/maps/api/streetview?size=400x200&location=seattleneedle",
		        latLng: {
		            lat: 47.606209,
		            lng: -122.332071
		        },
		    }, {
		        cityName: "New York City, NY",
		        cityDescript: "The Big Apple!",
		        cityStr: "New York City",
		        streetView: "http://maps.googleapis.com/maps/api/streetview?size=400x200&location=newyorkcity",
		        latLng: {
		            lat: 40.712784,
		            lng: -74.005941
		        },
		    }, {
		        cityName: "Austin, TX",
		        cityDescript: "Home to Austin City Limits and SXSW. I want to go one year!",
		        cityStr: "Austin",
		        streetView: "http://maps.googleapis.com/maps/api/streetview?size=400x200&location=austintexas",
		        latLng: {
		            lat: 30.438557,
		            lng: -97.626785
		        },
		    }, {
		        cityName: "Mountainview, CA",
		        cityDescript: "Home to the most udacious software engineering school.",
		        cityStr: "Mountainview",
		        streetView: "http://maps.googleapis.com/maps/api/streetview?size=400x200&location=MountainviewCalifornia",
		        latLng: {
		            lat: 37.3894,
		            lng: -122.0819
		        },
		    }, {
		        cityName: "Liberty, NY",
		        cityDescript: "My hometown!",
		        cityStr: "Liberty",
		        streetView: "http://maps.googleapis.com/maps/api/streetview?size=400x200&location=LibertyNewYork",
		        latLng: {
		            lat: 41.8014,
		            lng: -74.7467
		        }
		    }];

		    var ViewModel = function() {

		        var self = this;
		        // self.googleMap is a reference storing the Google Map Object.
		        self.googleMap = new google.maps.Map(document.getElementById('map'), {
		            center: {
		                lat: 55.513299,
		                lng: -97.1628807
		            },
		            zoom: 3
		        });



		        // Create empty array to temporarily create and store place objects.
		        // The forEach loop will loop through the cityData array above.
		        // The push method will execute after each time creating a new "Place"
		        // object for each index.

		        self.allPlaces = [];
		        cityData.forEach(function(place) {
		            self.allPlaces.push(new Place(place));
		        });

		        // loop through the self.allPlaces array and add a map marker
		        // for each location.
		        // set place marker infowindow and click settings.

		        self.allPlaces.forEach(function(place) {
		            var contentString = '<div class="infoBox text-center row">' + '<h1>' + place.cityName + '</h1>' + '<h2>' + place.cityDescript + '</h2>' +
		                '<img class="bgimg img-responsive" src=" ' + place.streetView + '"> ' + "<div id='content'></div>" + '</div>';

		            var markerOptions = {
		                map: self.googleMap,
		                position: place.latLng,
		                draggable: false,
		                animation: google.maps.Animation.DROP,
		                content: contentString
		            };
		            place.marker = new google.maps.Marker(markerOptions);

		            place.marker.infoWindow = new google.maps.InfoWindow({
		                position: place.latLng,
		                content: contentString
		            });
		            place.marker.infoWindow.setContent(place.marker.content);

		            place.marker.addListener('click', function toggleBounce() {
		                place.marker.infoWindow.open(self.googleMap);
		                getApi();
		                if (place.marker.getAnimation() !== null) {
		                    place.marker.setAnimation(null);
		                } else {
		                    place.marker.setAnimation(google.maps.Animation.BOUNCE);
		                }
		                setTimeout(function() {
		                    place.marker.setAnimation(null);
		                }, 1400);
		            });

		            var getApi = function() {

		                var $windowContent = $('#content');
		                var wikiUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + place.cityStr + '&format=json&callback=wikiCallback';
		                var wikiRequestTimeout = setTimeout(function() {
		                    $windowContent.text("failed to get wikipedia resources");
		                }, 8000);

		                $.ajax({
		                    url: wikiUrl,
		                    dataType: "jsonp",
		                    jsonp: "callback",
		                    success: function(response) {
		                        var articleList = response[1];
		                        var i;
		                        var articleStr;
		                        var url;
		                        $windowContent.text('');
		                        for (i = 0; i < articleList.length; i += 1) {
		                            articleStr = articleList[i];
		                            url = 'http://en.wikipedia.org/wiki/' + articleStr;
		                            $windowContent.append('<li class="text-center"><a href="' + url + '">' + articleStr + '</a></li>');
		                        }
		                        clearTimeout(wikiRequestTimeout);
		                    }
		                });
		            };
		        });
		        // setting observable array to observe when to show the map marker on the map.
		        self.visible = ko.observableArray();
		        // looping through the self.allPlaces array and setting the maker when visible.
		        self.allPlaces.forEach(function(place) {
		            self.visible.push(place);
		        });
		        // this variable will store and observe the user input string of characters.
		        self.userInput = ko.observable('');
		        // The filter will look at the names of the places the Markers are standing
		        // for, and look at the user input in the search box. If the user input string
		        // can be found in the place name, then the place is allowed to remain
		        // visible. All other markers are removed.

		        self.filterMarkers = function() {

		            var searchInput = self.userInput().toLowerCase();

		            self.visible.removeAll();

		            // This looks at the name of each places and then determines if the user
		            // input can be found within the place name.

		            self.allPlaces.forEach(function(place) {
		                place.marker.setMap(null);

		                if (place.cityName.toLowerCase().indexOf(searchInput) !== -1) {
		                    self.visible.push(place);
		                };
		            });

		            self.visible().forEach(function(place) {
		                place.marker.setMap(self.googleMap);
		            });
		        };

		        function Place(dataObj) {
		            this.cityName = dataObj.cityName;
		            this.cityDescript = dataObj.cityDescript;
		            this.streetView = dataObj.streetView;
		            this.latLng = dataObj.latLng;
		            this.cityStr = dataObj.cityStr;
		            this.openInfoWindow = function() {
		                this.marker.infoWindow.open(self.googleMap, this.marker);
		            };
		            // You will save a reference to the Places' map marker after you build the
		            // marker:
		            this.marker = null;
		        };
		        /* All of this functionality is heavily reliant upon the DOM, so we
		         * place our code in the $() function to ensure it doesn't execute
		         * until the DOM is ready.
		         */
		        $(function() {
		            var locationList = $('.location-list'),
		                menuIcon = $('.menu-icon-link');
		            /* When a link in our locationList is clicked on, we want to hide
		             * the menu, load the feed, and prevent the default action
		             * (following the link) from occuring.
		             */
		            locationList.on('click', 'a', function() {
		                $('body').addClass('menu-hidden');
		                return false;
		            });

		            /* When the menu icon is clicked on, we need to toggle a class
		             * on the body to perform the hiding/showing of our menu.
		             */
		            menuIcon.on('click', function() {
		                $('body').toggleClass('menu-hidden');
		            });
		        }());
		    };
		    ko.applyBindings(new ViewModel());
		};
