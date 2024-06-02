import { Component, inject, OnInit } from '@angular/core';
import { IMovies } from '../interfaces/movies';
import { MoviesService } from '../services/movies.service';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent implements OnInit {
  private moviesService = inject(MoviesService);
  movies: IMovies[] = [];

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    this.moviesService.fetchMovies().subscribe({
      next: (movies) => {
        this.movies = movies.results;
      },
      error: (error) => console.log(error),
    });
  }

  getFullImageUrl(posterPath: string) {
    return environment.imageUrl + posterPath;
  }
}
