import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieTheatersCreationDTO } from '../movieTheatersCreationDTO.model';

@Component({
  selector: 'app-edit-movie-theater',
  templateUrl: './edit-movie-theater.component.html',
  styleUrls: ['./edit-movie-theater.component.css'],
})
export class EditMovieTheaterComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  model: MovieTheatersCreationDTO = {
    name: 'Agora',
    latitude: 67.02621459960939,
    longitude: 24.926139095058716,
  };
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      // alert(params.id);
    });
  }

  saveChanges(movieTheater: MovieTheatersCreationDTO) {}
}
