# Movie Cruiser Application

### Project Description

I was searching of a platform where users can search for any movie, and add their favorite movies to a favorite list, exclusively for registered and authenticated users.

Although IMDB exists, I aimed to create my own version with unique features and a personalized touch.

**Movie Cruiser Application** is a Single Page Application (SPA) developed using Angular. It fetches movie data from the TMDB API, allowing authenticated users to:

- Search for any movie based on keywords.
- View trending movies.
- Add or remove movies from their favorites list.

This application provides a seamless and intuitive experience for movie enthusiasts to search, explore, and manage their favorite movies.

### Key Features

1. **User Authentication**:
   - Secure login and logout functionality.
   - User authentication ensures that only registered users can access personalized features.

2. **Search Functionality**:
   - Users can search for movies based on keywords.
   - Provides a list of movies matching the search criteria.

3. **Trending Movies**:
   - Displays a list of currently trending movies fetched from the TMDB API.
   - Users can explore popular and trending titles.

4. **Favorite Movies**:
   - Authenticated users can add movies to their favorites list.
   - Users can remove movies from their favorites list as well.

5. **Movie Details**:
   - For each movie, the application displays detailed information including:
     - **Movie Overview**: A brief synopsis of the movie.
     - **Ratings**: The number of votes and average rating.
     - **Genre**: The genre(s) of the movie.
     - **Release Date**: The release date of the movie.

6. **Modular Structure**:
   - **Login Module**: Handles user authentication.
   - **Trending Movies Module**: Displays a list of trending movies.
   - **Search Module**: Allows users to search for movies.
   - **Favorites Module**: Manages the user's favorite movies list.
   - **Logout Module**: Handles user logout.

7. **SnackBarService**:
   - Provides feedback messages to the user at the bottom of the application.
   - Ensures that users are informed about actions like adding/removing favorites or logging out.
   - Prevents access to the favorites module once the user logs out.

### Technical Details

- **Frontend**: Developed using Angular, a powerful framework for building dynamic SPAs.
- **API Integration**: Utilizes the TMDB API for fetching movie data. More details on the API can be found [here](https://developers.themoviedb.org/3/getting-started/introduction).

### Conclusion

**Movie Cruiser Application** is my take on creating a personalized movie browsing and management platform. By leveraging Angular and the TMDB API, I've developed a robust and user-friendly application that caters to movie enthusiasts looking for a tailored experience. Explore, search, and manage your favorite movies with ease!


Check out the [TMDB API](https://developers.themoviedb.org/3/getting-started/introduction) for more details on the data source.

## Deployed Website

[Movie Cruiser Application](https://amanhacker.github.io/Movie-Cruiser-SPA-using-TMDB-3rd-party-API-/)

## Introduction

MovieCruiser is a simple application that lets you browse trending movies, search for movies, and add them as favorites to your dashboard.

## Getting Started

1. Clone the repo into the local system. (Do not fork it)
2. Install dependencies using `npm install`.
3. Start the server using `json-server --watch server/fav.json`.
4. Start the app using `ng serve -o`.


## Modules

### Trending

Shows the top ten trending movies of the week. You can add them to your favorites if logged in.

### Searching

You can search for movies from the search bar, and the top ten results will be displayed on the page. These can be added to favorites if the user is logged in.

### Favorites

Accessible only if logged in, where users can remove movies from favorites if authenticated.

### Logout

Logs the user out of the session, preventing further adding or removing of movies until re-authenticated.

## Login Details

1. Username: `admin`, Password: `12345678`
2. Username: `user1`, Password: `12345678`

## Pro-Tip

Browse the code directly in your browser at [GitHub1s](https://github1s.com/AMANHACKER/MOVIE-CRUISER-SPA-USING-TMDB-3RD-PARTY-API-).

View snapshots of the application at [Google Drive](https://drive.google.com/drive/folders/1uew12KDwiRrIEJE3D__IVnIbKWVC3Xwl?usp=sharing).


## Technologies Used

### Frontend

- HTML5
- CSS3
- Angular
- Angular Material
- TMDB API

## Steps to Run the Angular Project

1. Open the project in Visual Studio Code and open the terminal.
2. Run `npm install` to install all dependencies.
3. Run `ng serve -o` to start the application.
4. The project will be viewable at localhost:4200.

## Movie Cruiser Application 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.25.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Deployment Steps :

    - Run this command "ng build --prod --base-href "https://Amanhacker.github.io/Movie-Cruiser-SPA-using-TMDB-3rd-party-API-"
    - It will generate the built files under this path "dist/app"
    - Go inside this path using "cd dist/app"
    - git init
    - git add remote origin "https://github.com/Amanhacker/Movie-Cruiser-SPA-using-TMDB-3rd-party-API-.git"
    - git add .
    - git commit -m "Initial Deployment to Github pages"
    - git push -u origin master:gh-pages


  Once the code is pushed, it will automatically deploy your application to this url : [Movie Cruiser Application](https://Amanhacker.github.io/Movie-Cruiser-SPA-using-TMDB-3rd-party-API-). 
