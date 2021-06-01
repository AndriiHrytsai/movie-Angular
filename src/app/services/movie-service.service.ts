import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Movie} from "../models/Movie.models";
import {MovieInfo} from "../models/movieInfo";
import {MovieVideo} from "../models/video";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  baseUrl = "https://api.themoviedb.org/3";
  apiKey = "?api_key=8aaf14eada5c1779a594aaa553b31207";
  page = "&page=";

  constructor(private httpClient: HttpClient) {
  }

  getMovie(page: number): Observable<Movie> {
    return this.httpClient.get<Movie>(this.baseUrl + "/discover/movie" + this.apiKey + this.page + page)
  }

  getMovieDetails(id: number): Observable<MovieInfo> {
    return this.httpClient.get<MovieInfo>(this.baseUrl + "/movie/" + id + this.apiKey)
  }

  getVideoTrailer(id: number): Observable<MovieVideo> {
    return this.httpClient.get<MovieVideo>(`https://api.themoviedb.org/3/movie/${id}/videos${this.apiKey}`)
  }

  getPopular(): Observable<Movie> {
    return this.httpClient.get<Movie>(this.baseUrl + "/movie/popular" + this.apiKey + "&page=1")
  }

}

