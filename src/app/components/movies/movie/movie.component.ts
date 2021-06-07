import {Component, Input, OnInit} from '@angular/core';
import {MovieInfo} from "../../../models/movieInfo";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input()
  movie: MovieInfo

  constructor() {
  }

  ngOnInit(): void {
  }


}
