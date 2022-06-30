import { Component, OnInit } from '@angular/core';
import { MovieTheatersService } from 'src/app/movie-theaters/movie-theaters.service';

@Component({
  selector: 'app-index-movie-theater',
  templateUrl: './index-movie-theater.component.html',
  styleUrls: ['./index-movie-theater.component.css'],
})
export class IndexMovieTheaterComponent implements OnInit {
  constructor(private movieTheaterService: MovieTheatersService) {}
  movieTheaters: any;
  displayColumns = ['name', 'actions'];
  ngOnInit(): void {
    this.movieTheaterService
      .get()
      .subscribe((movieTheaters) => (this.movieTheaters = movieTheaters));
  }

  delete() {}
}
