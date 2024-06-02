import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMoviesAPIResponse } from '../interfaces/movies';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  fetchMovies(): Observable<IMoviesAPIResponse> {
    return this.http.get<IMoviesAPIResponse>('/trending/movie/day?language=en-US');
  }
}
