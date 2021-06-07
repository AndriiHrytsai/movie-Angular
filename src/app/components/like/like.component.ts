import {Component, OnInit} from '@angular/core';
import {MovieInfo} from "../../models/movieInfo";

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  info: MovieInfo[];
  movieImg = 'https://image.tmdb.org/t/p/original'
  private like = JSON.parse(<string>localStorage.getItem("like"));
  listMovie = this.like || [];

  constructor() {
  }

  ngOnInit(): void {
    this.info = JSON.parse(<string>localStorage.getItem("like"));
  }

  removeFilm(id: number): void {
    this.info = this.info.filter(value => value.id !== id)
    localStorage.setItem('like', JSON.stringify(this.info))
  }

  removeAllFilm(id: number): void {
    this.info = this.info.filter(value => value.id === id)
    localStorage.removeItem('like')
  }
}
