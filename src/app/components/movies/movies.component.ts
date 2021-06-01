import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../models/Movie.models";
import {MovieService} from "../../services/movie-service.service";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie

  constructor(private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.movieService.getMovie(1).subscribe(value => {
      this.movies = value
    })
  }

  next(page: number) {
    this.movieService.getMovie(this.movies.page + page).subscribe(value => {
      this.movies = value
    })
  }

  previous(page: number) {
    this.movieService.getMovie(this.movies.page - page).subscribe(value => {
      this.movies = value
    })
  }

  last(page: number) {
    this.movieService.getMovie(1).subscribe(value => {
      this.movies = value
    })
  }

  end(page: number) {
    this.movieService.getMovie(this.movies.total_pages).subscribe(value => {
      this.movies = value
    })
  }

}
