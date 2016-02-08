---
layout: post
title:  "Using the InstafeedJS API"
date:   2015-07-02 14:43:02
categories: blog
tags: layout
---

## A fun way to integrate your Instagram account with your website.

Below I have the few lines of script that I am running on my about page.  The accessToken you can get from Instagram by signing up with a developer account.  Remember to link your source code at the bottom of your html document. 

[View InstafeedJS](http://www.instafeedjs.com)

    <script type="text/javascript">

    var userFeed = new Instafeed({
        get: 'user',
        userId: 1408653501,
        accessToken: 'XXXXXXXXXXXXX’',
        useHttp: true,
        links: true,
        limit: 28,
        resolution: 'thumbnail',

    });
    userFeed.run();

    </script>


