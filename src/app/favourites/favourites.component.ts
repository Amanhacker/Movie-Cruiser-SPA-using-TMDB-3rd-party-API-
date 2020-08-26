import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { HttpService } from '../services/http.service';
import { Movie } from '../model/movie';
import { Genre } from '../model/genre';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarService } from '../services/snackbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  username: string;
  movies: Movie[] = [];

  public genres: Genre[];

  constructor(
    private authService: AuthenticationService,
    private httpService: HttpService,
    private snackbarService: SnackbarService,
    private router: Router) { }

  ngOnInit() {
    this.username = this.authService.getUsername();


    this.httpService.getGenres().subscribe(
      data => {
        this.genres = data.genres;
        console.log(this.genres);

        this.httpService.getFavourites(this.username).subscribe(
          data => {
            this.movies = data;
          },
          error => {
            console.log(error.message);

          }
        );

      },
      error => {
        console.log(error.message);

      }
    );



  }

  removeFavourite(id) {
    if (this.authService.isAuthenticated() === false) {
      this.snackbarService.showSnackBar('User not authenticated', 'Please login first');
      this.authService.logoutUser();
      this.router.navigate(['/login']);
      return;
    }

    this.httpService.removeMovieFromFavourites(this.authService.getUsername(), id).subscribe(
      data => {
        let index = this.movies.findIndex(m => m.id === id);
        this.movies.splice(index, 1);

        this.snackbarService.showSnackBar('Removed from favourites', '');

      },
      error => {
        console.log(error.message);
      }

    );
  }

  getGenreFromIds(arrGenre: number[]): string[] {
    // console.log('Num', this.num);
    // this.num++;

    let strArr: string[] = [];

    if (arrGenre.length === 0) {
      strArr.push('null');
      return strArr;
    }

    arrGenre.forEach(item => {
      let foundGenre = this.genres.find(val => val.id === item);
      if (foundGenre) {
        strArr.push(foundGenre.name);
      }
    });

    console.log(strArr);


    return strArr;
  }

}
