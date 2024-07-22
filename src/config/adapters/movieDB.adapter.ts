import {AxiosAdapter} from './https/axios.adapter';

export const movieDBFetcher = new AxiosAdapter({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '2c92d9cd8896099df1f7eeb811e8a7d6',
    language: 'es',
  },
});
