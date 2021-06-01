import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

import {MovieService} from "../../../services/movie-service.service";
import {MovieInfo} from "../../../models/movieInfo";
import {MovieVideo} from "../../../models/video";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: MovieInfo
  id: number
  video: MovieVideo

  constructor(
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer) {
    this.activatedRoute.params.subscribe(value => {
      this.id = +value.id;
      this.movieService.getMovieDetails(value.id).subscribe(value1 => this.movie = value1)
    })
    this.movieService.getVideoTrailer(this.id).subscribe(value => {
      this.video = value
      console.log(value)
    })
  }

  ngOnInit(): void {
  }

  backgroundImg(url: string) {
    return (
      `background-image:linear-gradient(rgba(0,0,0,0.9),
     rgba(0,0,0,0.55)),
     url(https://image.tmdb.org/t/p/original${url})`)
  }

  movieVideo(key: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${key}`)
  }

}
