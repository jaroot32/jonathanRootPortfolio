---
layout: post
title:  "Using AJAX and the Instagram API"
date:   2015-07-02 14:43:02
categories: blog
tags: layout
---

## Using AJAX to integrate your Instagram account with your website.

Below I have the few lines of AJAX script that I am running on my about page.&nbsp;&nbsp; The accessToken you can get from Instagram by signing up with a developer account.&nbsp;&nbsp;

    var token = 'XXXXX', // learn how to obtain it below
    userid = XXXXX, // User ID - get it in source HTML of your Instagram profile or look at the next example :)
    num_photos = 12; // how many photos do you want to get

    $.ajax({
        url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent', // or /users/self/media/recent for Sandbox
        dataType: 'jsonp',
        type: 'GET',
        data: {access_token: token, count: num_photos},
        success: function(data){
            console.log(data);
            for( x in data.data ){
                $('.instagram-content').append('<a href="'+data.data[x].link+'"><img src="'+data.data[x].images.low_resolution.url+'"></a>');

                // data.data[x].images.low_resolution.url - URL of image, 306х306
                // data.data[x].images.thumbnail.url - URL of image 150х150
                // data.data[x].images.standard_resolution.url - URL of image 612х612
                // data.data[x].link - Instagram post URL
            }
        },
        error: function(data){
            console.log(data); // send the error notifications to console
        }


