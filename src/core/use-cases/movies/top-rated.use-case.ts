import {HttpAdapter} from '../../../config/adapters/https/http.adapter';
import {GeneralResponse} from '../../../infrastructure/interfaces/movie-db.responses';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import {Movie} from '../../entities/movie.entity';

export const moviesTopRatedUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const topRated = await fetcher.get<GeneralResponse>('/top_rated');
    console.log('topRated: ', {topRated});

    return topRated.results.map(MovieMapper.fromMovieDBResultToEntity);
  } catch (error) {
    throw new Error('Error fetching top rated movies - topRated');
  }
};
