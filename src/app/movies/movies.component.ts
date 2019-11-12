import { Component, OnInit } from '@angular/core';
import { movies } from '../../data/movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies = movies;
 // director = '';
 // films = '';
  activeGenre = 'all';
  drama = 'Drama';
  comedy = 'Comedy';
  action = 'Action';

  constructor() { }

  ngOnInit() {
  }

  filterGenre(event) {
    this.activeGenre = event;
  }

  getMovies() {
     return this.activeGenre === 'all' ? this.movies : this.movies.filter(movie =>
                               movie.genre.includes(this.activeGenre));
   }

}
