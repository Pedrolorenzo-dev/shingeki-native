import {useEffect, useState} from 'react';
import {Movie} from '../../core/entities/movie.entity';

import * as UseCases from '../../core/use-cases';
import {movieDBFetcher} from '../../config/adapters/movieDB.adapter';

export const useMovies = () => {
  const [nowPlaying, setNowPlaying] = useState<Movie[]>();
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([]);
  const [upcoming, setUpcoming] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    //   const nowPlayingMovies = await UseCases.moviesNowPlayingUseCase(
    //     movieDBFetcher,
    //   );
    //   const topRatedMovies = await UseCases.moviesTopRatedUseCase(movieDBFetcher);
    //   const popularMovies = await UseCases.moviesPopularUseCase(movieDBFetcher);
    //   const upcomingMovies = await UseCases.moviesUpcomingUseCase(movieDBFetcher);
    // };

    try {
      const [nowPlayingMovies, topRatedMovies, popularMovies, upcomingMovies] =
        await Promise.all([
          UseCases.moviesNowPlayingUseCase(movieDBFetcher),
          UseCases.moviesTopRatedUseCase(movieDBFetcher),
          UseCases.moviesPopularUseCase(movieDBFetcher),
          UseCases.moviesUpcomingUseCase(movieDBFetcher),
        ]);

      setNowPlaying(nowPlayingMovies);
      setTopRated(topRatedMovies);
      setPopular(popularMovies);
      setUpcoming(upcomingMovies);
    } catch (error) {
      console.error('Error loading movies:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    nowPlaying,
    topRated,
    popular,
    upcoming,
  };
};
