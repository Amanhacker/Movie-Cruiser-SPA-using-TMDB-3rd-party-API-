import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';
import { DataService } from '../services/data.service';
import { Movie } from '../model/movie';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public movies: Movie[] = [];

  public movieName;
  constructor(private router: Router, private httpService: HttpService, private dataService: DataService) { }

  ngOnInit() {

  }

  searchMovie(movie) {
    if (movie.search === '') {
      return;
    }
    console.log('Movie search name :', movie.search);

    this.dataService.sendMovieName(movie.search);

    this.httpService.searchMovie(movie.search).subscribe(
      data => {
        data.results.length = 10;
        this.movies = data.results as Array<Movie>;

        console.log('Searched Movies :', this.movies);


        this.dataService.sendDataToService(this.movies);

        this.router.navigate(['searchResults']);

        this.movieName = '';

        document.getElementById('search-input-field').blur();
      },
      error => {
        console.log(error.message);

      }
    );


  }

}
