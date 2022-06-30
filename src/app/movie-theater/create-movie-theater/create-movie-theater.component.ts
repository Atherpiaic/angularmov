import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieTheatersService } from 'src/app/movie-theaters/movie-theaters.service';
import { MovieTheatersCreationDTO } from '../movieTheatersCreationDTO.model';

@Component({
  selector: 'app-create-movie-theater',
  templateUrl: './create-movie-theater.component.html',
  styleUrls: ['./create-movie-theater.component.css'],
})
export class CreateMovieTheaterComponent implements OnInit {
  constructor(
    private movieTheaterService: MovieTheatersService,
    private router: Router
  ) {}

  movieTheaters: any;
  ngOnInit(): void {

  }

  saveChanges(movieTheater: MovieTheatersCreationDTO) {
    this.movieTheaterService
      .create(movieTheater)
      .subscribe(() => this.router.navigate(['/movietheaters']));
  }
}
