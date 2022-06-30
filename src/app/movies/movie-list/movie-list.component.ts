import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent {
  @Input()
  movies: any;

  constructor() {}

  remove(index: number) {
    this.movies.splice(index, 1);
  }
}
