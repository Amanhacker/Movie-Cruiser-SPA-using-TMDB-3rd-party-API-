import { Component, OnInit } from '@angular/core';
import { Movie } from '../model/movie';
import { DataService } from '../services/data.service';
import { HttpService } from '../services/http.service';
import { AuthenticationService } from '../services/authentication.service';
import { Genre } from '../model/genre';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarService } from '../services/snackbar.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  movies: Movie[] = [];

  movieName: string;

  public genres: Genre[];

  constructor(
    private dataService: DataService,
    private httpService: HttpService,
    private authService: AuthenticationService,
    private snackbarService: SnackbarService) { }

  ngOnInit() {

    this.dataService.movieNameSubject.subscribe(
      data => {
        this.movieName = data;
      },
      error => {
        console.log(error.message);

      }
    );

    this.httpService.getGenres().subscribe(
      data => {
        this.genres = data.genres;
        console.log(this.genres);

        this.dataService.moviesSubject.subscribe(
          data => {
            console.log('Search results component :', data);

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
              console.log(result);
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
