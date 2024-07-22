import {HttpAdapter} from '../../../config/adapters/https/http.adapter';
import {GeneralResponse} from '../../../infrastructure/interfaces/movie-db.responses';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import {Movie} from '../../entities/movie.entity';

export const moviesPopularUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const popular = await fetcher.get<GeneralResponse>('/popular');
    console.log('Popular: ', {popular});

    return popular.results.map(MovieMapper.fromMovieDBResultToEntity);
  } catch (error) {
    throw new Error('Error fetching popular movies - Popular');
  }
};
