# Movie Cruiser Application

## Project Overview

I was searching of a platform where we can search any movie, and can add my fav movies to my favorite list for registered and authenticated users.
However, I know the website IMDB, but I want to create my own version of IMDB.

Created a Single Page Application using Angular for fetching movies from TMDB API for authenticated user.

I have created my own version of IMDB - "Movie Cruiser Application" website developed using Angular whose primary goal is to fetch data of trending movies from TMDB API ((https://developers.themoviedb.org/3/getting-started/introduction). Once the user gets authenticated, a user can add or remove movie in their favorite list, and can search any movie based on some keyword.

It has different modules like Login, Trending movies, Search module, Logout, Add to Favorites, etc.

I am only fetching and displaying these datas of trending Movies like "Movie Overview", "No of votes this movie gets in terms of ratings", "Genre" and "Release Date". These datas are shown for every movie, which is being fetched from TMDB API.

Also, I have used SnackBarService(used to show messages in the bottom of the application with swiping enabled) to refrain from accessing the favorite module once a user gets logged out.

## Pro-Tip :
Go to https://github1s.com/AMANHACKER/MOVIE-CRUISER-SPA-USING-TMDB-3RD-PARTY-API- for browsing through the code in the browser itself.

Go to https://drive.google.com/drive/folders/1uew12KDwiRrIEJE3D__IVnIbKWVC3Xwl?usp=sharing for seeing the glimpse(some snapshots of each module) of our Movie Cruiser Application.

## Technologies used :

### FrontEnd : 
HTML5, CSS3, Angular, Angular Material, TMDB API

## Steps to run the above Angular Project : 

- Open the project in Visual Studio code and open terminal
- Run "npm install" command to install all the dependencies
- Run "ng serve -o" 
- You are good to go and view the project in the local host 4200.

# CaseStudy

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.25.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
