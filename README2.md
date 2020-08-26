# Introduction

MovieCruiser is a simple application that lets you browse the trending movies, search for movies and adds them as favourite to your dashboard.

# Getting Started

1. Clone the repo into the local system. (Do not fork it)
2. Install dependencies `npm install`.
3. Start the server `json-server --watch server/fav.json`.
4. Start the app `ng serve -o`.

# Trending

Shows the top ten trending movies of the week. You can add them to your favourite if logged in.

# Searching

You can search the movies from the search bar and top ten results will be displayed on the page which can be added to favourite if user is logged in.

# Favourites

You can visit this page only if logged in and remove the movies from favourite if authenticated.

# Logout 

User is logged out from the session. Adding and removing can't be done if user is logged out.

# Login details

1. Username: `admin` Password: `12345678`
2. Username: `user1` Password: `12345678`
