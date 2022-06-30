import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  MovieTheatersCreationDTO,
  MovieTheatersDTO,
} from '../movie-theater/movieTheatersCreationDTO.model';

@Injectable({
  providedIn: 'root',
})
export class MovieTheatersService {
  constructor(private http: HttpClient) {}
  private apiURL = environment.apiURL + '/movieTheaters';

  public get(): Observable<MovieTheatersDTO[]> {
    return this.http.get<MovieTheatersDTO[]>(this.apiURL);
  }

  public create(movieTheaterDTO: MovieTheatersCreationDTO) {
    console.log(movieTheaterDTO);
    return this.http.post(this.apiURL, movieTheaterDTO);
  }
}
