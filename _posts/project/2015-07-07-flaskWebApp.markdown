---
layout: post
title:  "Flask Web App"
date:   2015-07-13 14:43:02
categories: project
featured: true
featured_image: "/images/finalRecord.png"
---

###A Udacious Record Collection: Final project from Udacity's class on programming Python

###Flask and Bootstrap

###  I opted to make an album collection, Instead of a movie collection.

###Lessons Learned

####How to create a class. How to instantiate an object. How to access class attributes and methods. What is the self keyword. What are constructors (_init_). What are DocStrings. How to create and access Class Variables.

## entertainment_center.py

    __author__ = 'jonathanroot'
    import media
    import fresh_tomatoes

    lateralus = media.Movie("Lateralus",
                "",
                "https://upload.wikimedia.org/wikipedia/en/6/63/Tool_-_Lateralus.jpg",
                "https://youtu.be/6-uNyUmP9TA")
                curtains = media.Movie("Curtains","",
                "https://upload.wikimedia.org/wikipedia/en/f/f7/CurtainsFrusciante.jpg",
                "https://youtu.be/K-KSG75pLc0")
                purple = media.Movie("Purple","",
                "https://upload.wikimedia.org/wikipedia/en/3/36/Stonetemplepilotspurple.jpeg",
                "https://youtu.be/2GAQ62DYl-E")
                in_utero = media.Movie("In Utero","",
                "https://upload.wikimedia.org/wikipedia/en/e/e5/In_Utero_%28Nirvana%29_album_cover.jpg",
                "https://youtu.be/WZfh-aNBy00")
                revolver = media.Movie("Revolver","",
                "https://upload.wikimedia.org/wikipedia/en/1/16/Revolver.jpg",
                "https://youtu.be/1MMDugt8ZRk?list=PLYeF09gmFBSh9PK4xlkcHOWUNYWtaWCAD")
                 exile = media.Movie("Exile On Main St.","",
                "https://upload.wikimedia.org/wikipedia/en/c/ca/ExileMainSt.jpg",
                "https://youtu.be/8PatkEm6zrs")
                #print (chained_girls.storyline)
                #chained_girls.show_trailer()


    movies = [lateralus, curtains, purple, in_utero, revolver, exile]
    fresh_tomatoes.open_movies_page(movies)

## media.py

    from flask import Flask
    import webbrowser

    app = Flask(__name__)


    @app.route('/')
    def hello_world():
        return 'Hello World!'

    class Movie():
        VALID_RATINGS = ["G", "PG", "PG-13", "R"]

        def __init__(self, movie_title, movie_storyline, poster_image, trailer_youtube):
            self.title = movie_title
            self.storyline = movie_storyline
            self.poster_image_url = poster_image
            self.trailer_youtube_url = trailer_youtube

        def show_trailer(self):
            webbrowser.open(self.trailer_youtube_url)

    if __name__ == '__main__':
        app.run(port=8000)


