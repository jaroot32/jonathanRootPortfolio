---
layout: post
title:  "AJAX Web App"
date:   2015-07-14 14:43:02
categories: project
featured: true
featured_image: "/images/aJaxApp.png"
---

###A Udacious Record Collection: Final project from Udacity's class on programming Python

###AJAX and jQuery

###  Moving Planner App

###Type in your street name and city and see data on Wikipedia, NY Times, as well as a Google Street View in a single page.

Creating this web app involved how to use jQuery and Public APIs to make AJAX requests for different types of data.

##[Test it out on Github Pages](http://jaroot32.github.io/movingApp/)

##Sample Code Snippet

API Keys are unique and available by signing up with a developer account on the NY Times website.

        var nytimesUrl = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + cityStr + '&sort=newest&api-key=XXXXX';
        $.getJSON(nytimesUrl, function(data){

            $nytHeaderElem.text('New York Times Articles About ' + cityStr);

            articles = data.response.docs;
            for (var i = 0; i < articles.length; i++) {
                var article = articles[i];
                $nytElem.append('<li class="article">'+
                    '<a href="'+article.web_url+'">'+article.headline.main+'</a>'+
                    '<p>' + article.snippet + '</p>'+
                '</li>');
            };

        }).error(function(e){
            $nytHeaderElem.text('New York Times Articles Could Not Be Loaded');
        });


