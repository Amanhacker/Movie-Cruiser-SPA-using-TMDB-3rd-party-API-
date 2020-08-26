import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  getTrending(): Observable<any> {
    const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${environment.api_key}`;

    return this.httpClient.get<any>(url);
  }

  searchMovie(movieName): Observable<any> {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${environment.api_key}&language=en-US&query=${movieName}&page=1&include_adult=true`;

    return this.httpClient.get<any>(url);
  }

  getFavourites(username): Observable<Array<Movie>> {
    const url = `http://localhost:3000/${username}`;

    return this.httpClient.get<Array<Movie>>(url);
  }

  addMovieToFavourites(username, movie): Observable<Movie> {
    const url = `http://localhost:3000/${username}`;

    return this.httpClient.post<Movie>(url, movie);
  }

  removeMovieFromFavourites(username, id): Observable<any> {
    const url = `http://localhost:3000/${username}/${id}`;

    return this.httpClient.delete(url);
  }

  getGenres(): Observable<any> {
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${environment.api_key}&language=en-US`;

    return this.httpClient.get(url);
  }

}
