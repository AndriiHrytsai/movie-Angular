import {Component, OnInit} from '@angular/core';
import {MovieInfo} from "../../models/movieInfo";
import {DataTransferService} from "../../services/data-transfer.service";

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
  isLoading = false;

  constructor(private dataTransferService: DataTransferService) {
  }

  ngOnInit(): void {
    this.info = JSON.parse(<string>localStorage.getItem("like"));
    setTimeout(() => {
      this.isLoading = true;
    }, 700)
  }

  removeFilm(id: number): void {
    this.info = this.info.filter(value => value.id !== id)
    localStorage.setItem('like', JSON.stringify(this.info))
    this.dataTransferService.store.next(this.info.length)
    localStorage.setItem('likeNumber', JSON.stringify(this.dataTransferService.store.value))
  }

  removeAllFilm(id: number): void {
    this.info = this.info.filter(value => value.id === id)
    localStorage.removeItem('like')
    this.dataTransferService.store.next(this.info.length)
    localStorage.setItem('likeNumber', JSON.stringify(this.dataTransferService.store.value))
  }

}
