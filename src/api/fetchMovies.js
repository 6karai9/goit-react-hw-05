import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    _language: 'en-US',
  },
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzE1NmZmMzg4YzFjMjhmMjI0YmNhMDUyYTdhMDkxNyIsIm5iZiI6MTczMDMxOTI4Ny4zMjUyNjI4LCJzdWIiOiI2NzIyOTFhMzE4MGIwYTVhYjkwYzMzZjIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.4-oZ5blKt5OqhJkEHnRj7GmPseYeF4PU8diKT1ebUR4',
  },
});

export const getTrendingMovies = async () => {
  const data = await instance.get('trending/movie/day');
  return data;
};

export const getMovies = async (query = '') => {
  const data = await instance.get('search/movie', {
    params: { query, include_adult: false },
  });
  return data;
};

export const getMovie = async id => {
  const data = await instance.get(`movie/${id}`);
  return data;
};

export const getCast = async id => {
  const data = await instance.get(`movie/${id}/credits`);
  return data;
};

export const getReviews = async (id, page = 1) => {
  const data = await instance.get(`movie/${id}/reviews`, { params: { page } });
  return data;
};
