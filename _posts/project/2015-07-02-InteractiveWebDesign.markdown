---
layout: post
title:  "Interactive Web Templating"
date:   2015-07-02 14:43:02
categories: project
featured: true
featured_image: "/images/resumeFinal.png"
---

##Online Interactive Resume: Final Project from Udacity's Class on JavaScript

###Built with JavaScript, jQuery, and JSON objects

###Deployed on Github pages.
<br>[motis](http://www.wtfpl.net/)

    var bio = {
    "name" : "Jonathan Ari Root",
    "contacts": {
        "mobile": " 845 796 6569",
        "email": " jonroot@me.com",
        "github": " jaroot32",
        "location": " Seattle, WA" 
    },
    "welcomeMessage": "<pre><p>README<br>Situation: Final Project for the Online JavaScript Basics class by Udacity.<br>Objective: Develop an application that reads and displays content from a JSON file, within a provided template.<br>Action: Complete the project and also add custom typography, responsive video, photography, and data.<br>Result: Skills gained/exercised while completing this project include. Data Types, Flow Control, and Chrome Developer Tools <br>Tech Credits:jQuery and Fitvids.JS</p></pre>",
    "skills": [  "UI/UX", "Business Development", "Content Marketing"],
    "bioPic": "images/NewJonPic.jpg"
    }

    var work = { 
    "jobs" :[
    {
    "employer": "Jonathan Root Design",
    "type": "Portfolio Site",
    "title": "UI/UX Design",
    "dates": "December 2013 - Present",
    "location": "Various Locations",
    "description": " While returning to school to pursue my second bachelor degree/MBA, I started to educated myself about web development and entrepreneurship.   I used a variety of MOOCs for training purposes.  Skills and Software include,  Mac OS X Terminal, Pixelmator, Bohemian Sketch, DSLR Photography and Video, HTML5, CSS3, JavaScript, jQuery, Sublime Text, NPM, Ghost, Github, HighCharts, Google Fonts, and JavaScript APIs."
    },  
    
    {
    "employer": "Marvin J. Rapaport, MD",
    "type": "Health Website & Blog",
    "title": "Marketing Director",
    "dates": "October 2012 - December 2013",
    "location": "New Paltz,  NY",
    "description":"Blog/Site Developement utilizing the Ghost blogging platform. Custom Typography, Photography, and CSS. Applied and won $100,000 annual advertising grant with Google. Wrote national press releases via PRWeb to help increase awareness about Red Skin Syndrome. Designed and edited HTML eNewsletter and Launched to readers with MailChimp and Excel. Edited HTML and authored personal blog on experience and subject matter. Directed high-definition cinematic interview with Marvin J. Rapaport, MD on Red Skin Syndrome: Corticosteroid Addiction & Withdrawal.  Developed strategic plan and donation strategies that yield several thousands of dollars monthly."
    },  
    {
    "employer": "Smith & Jones",
    "title": "Marketing Director",
    "type": "Healthcare Advertising Agency",
    "location": "Troy, NY",
    "dates": "September 2011 - October 2012",
    "description":"Trained employees on social media presence and SEO best practices. Wrote company blog to educate on hospital marketing best practices. (published on Ragan Healthcare Communications.com).  Negotiated and implemented PR Web contract for news  releases for SEO & lead generation.  Gained editorial exposure by having agency featured in AMA health magazine supplement. Created strategy for new marketing collateral i.e. bi-monthly Beat: News for Hospital Marketers & Administrators. and Agency/Client Relationship Brochure.  Implemented the Win Without Pitching business development strategy."
    },
    {
    "employer": "Engineering 360, an IHS Company",
    "title": "Account Executive",
    "type": "Online Media Company for Engineering & Manufacturing",
    "location": "East Greenbush, NY",
    "dates": "April 2008 - September 2011",
    "description":"Awarded Silver Rookie of the Year Award with only 6 months on the books.  Met first and second quarterly quota in down economy, exceeded third quarter goal earned $2,000 bonus for selling 6 new unit sales in a quarter. Ended 2009 102% to goal and 201% to goal in Q4 earning $76,759 in December alone. Sold both national and international clients including well-known brand Bobcat Construction. Awarded account executive of the month for Dec 2010 for winning over $145,000 in contracts."
    }
    ]
    }

    var education = {
    "schools": [
        {
        "name": "SUNY New Paltz",
        "degree": "BS",
        "major": "Accounting",
        "graduation": "2014",
        "location": "New Paltz, NY"
        },
        {
        "name": "SUNY New Paltz",
        "degree": "BA",
        "major": "History",
        "graduation": "",
        "location": "New Paltz, NY"
        }
        ]
    }

    var projects = {
    "projects": [
        {
        "title": "Jonathan Root Design",
        "dates": "2015",
        "description": "My portfolio showcasing UI/UX, Content Development, and Video Production."
        }
        ]
    }



    function displayWork() { for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedLocation);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedworkDates);
    var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedworkDescription);
    }
    }
    displayWork();

    education.displayEducation = function(){
    for (var schools in education.schools ) {
    $('#education').append(HTMLschoolStart);
    var formatSchoolName = HTMLschoolName.replace('%data%',education.schools[schools].name);
    var formatSchoolLocation = HTMLschoolLocation.replace('%data%',education.schools[schools].location);
    var formatSchoolDegree = HTMLschoolDegree.replace('%data%',education.schools[schools].degree);
    var formatSchoolDates = HTMLschoolDates.replace('%data%',education.schools[schools].graduation);
    var formatSchoolMajor = HTMLschoolMajor.replace('%data%',education.schools[schools].major);
    $('.education-entry:last').append(formatSchoolLocation);
    $('.education-entry:last').append(formatSchoolName + formatSchoolDegree);
    $('.education-entry:last').append(formatSchoolDates);
    $('.education-entry:last').append(formatSchoolMajor);
        }
    }
    education.displayEducation();


    projects.display = function() {
        for (var project = 0, n = projects.projects.length;
        project < n; project++) {
            $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%",
            projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%",
            projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%",
            projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);


    }
    }

    projects.display();


    var name = bio.name;
    var formattedName = HTMLheaderName.replace("%data%", name);
    $("#header").prepend(formattedName);

    var mobile = bio.contacts.mobile;
    var formattedMobile = HTMLmobile.replace("%data%", mobile);
    $("#topContacts").append(formattedMobile);

    var email = bio.contacts.email;
    var formattedEmail = HTMLemail.replace("%data%", email);
    $("#topContacts").append(formattedEmail);

    var github = bio.contacts.github;
    var formattedGithub = HTMLgithub.replace("%data%", github);
    $("#topContacts").append(formattedGithub);

    var _location = bio.contacts.location;
    var formattedLocation = HTMLlocation.replace("%data%", _location);
    $("#topContacts").append(formattedLocation);

    var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
        $("#header").append(formattedbioPic);



    if(bio.skills.length > 0)
    {
      $("#header").append(HTMLskillsStart);
      for (var i = 0; i < bio.skills.length; i++) {
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
      };
    }

    var formattedwelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#welcome-message").append(formattedwelcomeMessage);
    
    function displayEducation() { for (school in education.schools) {
        $("#Education").append(HTMLSchoolStart);
        }

    }


        

    clickLocations = [];

    function logClicks(x,y) {
      clickLocations.push(
        {
          x: x,
          y: y
        }
      );
      console.log('x location: ' + x + '; y location: ' + y);
    }

    $(document).click(function(loc) {
        var x = loc.pageX;
        var y = loc.pageY;
      logClicks(x,y);
    });

