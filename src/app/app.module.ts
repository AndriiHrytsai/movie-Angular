import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MoviesComponent} from './components/movies/movies.component';
import {MovieComponent} from './components/movies/movie/movie.component';
import {HttpClientModule} from "@angular/common/http";
import {HeaderComponent} from './components/header/header.component';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from './components/home/home.component';
import {LikeComponent} from './components/like/like.component';
import {MovieDetailsComponent} from './components/movies/movie-details/movie-details.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatBadgeModule} from "@angular/material/badge";
import {ReactiveFormsModule} from "@angular/forms";

let routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'movies/:id', component: MovieDetailsComponent},
  {path: 'like', component: LikeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent,
    HeaderComponent,
    HomeComponent,
    LikeComponent,
    MovieDetailsComponent,
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(routes),
        MatButtonModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatBadgeModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
