export interface movieCreationDTO {
  title: string;
  summary: string;
  poster: any;
  inTheaters: boolean;
  releaseDate: Date;
  trailer: string;
  genresIds: number[];
  movieTheatersIds: number[];
}

export interface movieDTO {
  title: string;
  summary: string;
  poster: any;
  inTheaters: boolean;
  releaseDate: Date;
  trailer: string;
}
