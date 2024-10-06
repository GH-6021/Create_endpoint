import { Controller, Body, Post} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './createMovieDto';

@Controller('movies')
export class MoviesController {
    private movieService: MoviesService;
    constructor(movieService: MoviesService){
        this.movieService = movieService;
    }
    
    @Post('/create')
    createMovie(@Body() createMovieDto: CreateMovieDto) {
        const title = createMovieDto.title;
        const rating = createMovieDto.rating;
        return {title, rating};
    }
}
