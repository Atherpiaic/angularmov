import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
      this.moviesIntheaters = [
        {
          title: 'Spider-Man',
          relaseDate: new Date(),
          poster:
            'https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg',
          price: 1400.99,
        },
        {
          title: 'Moana',
          relaseDate: new Date('2016-11-14'),
          poster:
            'https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg',
          price: 300.99,
        },
      ];

      this.moviesFutureReleases = [];
    }, 1000);
  }
  moviesIntheaters: any;
  moviesFutureReleases: any;
}
