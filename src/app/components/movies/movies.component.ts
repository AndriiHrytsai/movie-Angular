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
  isLoading = false

  constructor(private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.movieService.getMovie(1).subscribe(value => {
      this.movies = value
    })
    setTimeout(() => {
      this.isLoading = true;
    }, 800)

  }

  next(page: number) {
    this.movieService.getMovie(this.movies.page + page).subscribe(value => {
      this.movies = value
    })
    this.isLoading = false
    setTimeout(() => {
      this.isLoading = true;
    }, 500)
  }

  previous(page: number) {
    this.movieService.getMovie(this.movies.page - page).subscribe(value => {
      this.movies = value
    })
    this.isLoading = false
    setTimeout(() => {
      this.isLoading = true;
    }, 500)
  }

  last(page: number) {
    this.movieService.getMovie(1).subscribe(value => {
      this.movies = value
    })
    this.isLoading = false
    setTimeout(() => {
      this.isLoading = true;
    }, 500)
  }

  end(page: number) {
    this.movieService.getMovie(this.movies.total_pages).subscribe(value => {
      this.movies = value
    })
    this.isLoading = false
    setTimeout(() => {
      this.isLoading = true;
    }, 500)
  }

}
