import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public moviesSubject = new BehaviorSubject<any>([]);

  public movieNameSubject = new BehaviorSubject<any>('');

  constructor() { }

  sendDataToService(movies) {
    console.log('From data service :', movies);

    this.moviesSubject.next(movies);
  }


  sendMovieName(movieName) {
    this.movieNameSubject.next(movieName);
  }
}
