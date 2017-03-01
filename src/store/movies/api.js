import fetch from './../base';

export const MOVIESTYPE = {
  inTheaters: 'in_theaters',
  comingSoon: 'coming_soon',
};

export function fetchMovies(type, { city = '广州', start = 0 } = {}) {
  return fetch(`movie/${type}`, { city, start });
}
export function fetchMoviesQuery({ q, start = 0 }) {
  return fetch('/movie/search', { q, start });
}
export function fetchMovieSubject(id) {
  return fetch(`movie/subject/${id}`);
}
