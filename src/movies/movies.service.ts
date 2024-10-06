import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './createMovieDto';
@Injectable()
export class MoviesService {
    private movies: CreateMovieDto;

    createMovie(createMovieDto: CreateMovieDto): CreateMovieDto {
        this.movies = createMovieDto;
        return this.movies;
    }
}
