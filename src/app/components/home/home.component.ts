import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../services/movie-service.service";
import {Movie} from 'src/app/models/Movie.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movie: Movie

  constructor(private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.movieService.getPopular().subscribe(value => {
      this.movie = value
    })
  }

}
