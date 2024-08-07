import {HttpAdapter} from '../../../config/adapters/https/http.adapter';
import {GeneralResponse} from '../../../infrastructure/interfaces/movie-db.responses';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import {Movie} from '../../entities/movie.entity';

export const moviesNowPlayingUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const nowPlaying = await fetcher.get<GeneralResponse>('/now_playing');
    console.log('nowPlaying: ', {nowPlaying});

    return nowPlaying.results.map(MovieMapper.fromMovieDBResultToEntity);
  } catch (error) {
    throw new Error('Error fetching playing movies - NowPlaying');
  }
};
