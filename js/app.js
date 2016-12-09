$("document").ready(function() {
$(window).on("scroll", function() {
    if ($(window).scrollTop() > 5) {
      $("header").addClass("active");
    } else {
      //remove the background property so it comes transparent again (defined in css)
      $("header").removeClass("active");
    }
  });
});

$(function() {

    //Set up instafeed
    var feed = new Instafeed({
        clientId: 'b04a526f69844ebab4f021b1d54a6fe1',
        target: 'instafeed',
        get: 'user',
        userId: 1408653501,
        accessToken: '1408653501.b04a526.f87ffd928214443f9c998470619e8290',
        links: true,
        limit: 12,
        sortBy: 'most-recent',
        resolution: 'standard_resolution',
        template: '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="photo-box"><div class="image-wrap"><a href="{{link}}"><img class="img-rounded" src="{{image}}"></a><div class="likes">{{likes}} Likes</div></div><div class="description">{{caption}}<div class="date">{{model.date}}</div></div></div></div>'
    });
    feed.run();

});
/*
var token = '1408653501.b04a526.f87ffd928214443f9c998470619e8290', // learn how to obtain it below
    userid = 1408653501, // User ID - get it in source HTML of your Instagram profile or look at the next example :)
    num_photos = 4; // how much photos do you want to get

$.ajax({
    url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent', // or /users/self/media/recent for Sandbox
    dataType: 'jsonp',
    type: 'GET',
    data: {access_token: token, count: num_photos},
    success: function(data){
        console.log(data);
        for( x in data.data ){
            $('ul').append('<li><img src="'+data.data[x].images.low_resolution.url+'"></li>'); // data.data[x].images.low_resolution.url - URL of image, 306х306
            // data.data[x].images.thumbnail.url - URL of image 150х150
            // data.data[x].images.standard_resolution.url - URL of image 612х612
            // data.data[x].link - Instagram post URL
        }
    },
    error: function(data){
        console.log(data); // send the error notifications to console
    }
});
*/