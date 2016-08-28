$("document").ready(function() {
$(window).on("scroll", function() {
    if ($(window).scrollTop() > 5) {
      $("header").addClass("active");
    } else {
      //remove the background property so it comes transparent again (defined in your css)
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
        template: '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="photo-box"><div class="image-wrap"><a href="{{link}}"><img src="{{image}}"></a><div class="likes">{{likes}} Likes</div></div><div class="description">{{caption}}<div class="date">{{model.date}}</div></div></div></div>'
    });
    feed.run();

});

