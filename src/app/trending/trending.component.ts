import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movie';
import { HttpService } from '../services/http.service';
import { Genre } from '../model/genre';
import { AuthenticationService } from '../services/authentication.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarService } from '../services/snackbar.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  public movies: Movie[];
  public genres: Genre[];

  // public num = 1;

  constructor(
    private httpService: HttpService,
    private authService: AuthenticationService,
    private snackbarService: SnackbarService) { }

  ngOnInit() {

    this.httpService.getGenres().subscribe(
      data => {
        this.genres = data.genres;
        console.log(this.genres);

        this.httpService.getTrending().subscribe(
          data => {
            // console.log('Data ', data);

            data.results.length = 10;
            this.movies = data.results as Array<Movie>;

            // console.log('Movies ', this.movies);

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

  addToFavourites(movie) {

    if (this.authService.isAuthenticated() === false) {
      this.snackbarService.showSnackBar('User not authenticated', 'Please login first');
      return;
    }

    this.httpService.getFavourites(this.authService.getUsername()).subscribe(
      data => {

        let found = data.find(m => m.id === movie.id);

        if (found) {
          this.snackbarService.showSnackBar('Already added', '');
          return;
        } else {

          this.httpService.addMovieToFavourites(this.authService.getUsername(), movie).subscribe(
            result => {

              this.snackbarService.showSnackBar('Added to favourites', '');
            }, error => {
              console.log(error.message);
            }
          );

        }

      },
      error => {
        console.log(error.message);

      }
    );

  }
}
