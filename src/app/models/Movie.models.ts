import {MovieInfo} from "./movieInfo";

export interface Movie {
  page: number;
  results: MovieInfo[]
  total_pages: number;
  total_results: number;
}
