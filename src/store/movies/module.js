import * as type from './type';
import * as api from './api';


const mutations = {
  [type.FETCH_MOVIES](state, payload) {
    state.movies[payload.type].subjects =
        state.movies[payload.type].subjects.concat(payload.subjects);
    state.movies[payload.type].total = state.movies[payload.type].subjects.length;
  },
  [type.FETCH_MOVIES_QUERY](state, payload) {
    state.movieQuery.subjects = state.movieQuery.subjects.concat(payload.subjects);
    state.movieQuery.total = state.movies[payload.type].subjects.length;
  },
  [type.CLEAR_MOVIES_QUERY](state) {
    state.movieQuery.total = 0;
    state.movieQuery.subjects = [];
  },
  [type.FETCH_MOVIES_TAB](state, tab) {
    state.tab = tab;
  },
};

const actions = {
  [type.FETCH_MOVIES](context, payload) {
    api.fetchMovies(payload.type, { start: payload.start || 0 })
            .then(data => context.commit(type.FETCH_MOVIES, {
              type: payload.type,
              subjects: data.subjects,
            }));
  },
  [type.FETCH_MOVIES_QUERY](context, payload) {
    api.fetchMoviesQuery(payload)
            .then(data => context.commit(type.FETCH_MOVIES_QUERY, data));
  },
  [type.CLEAR_MOVIES_QUERY](context) {
    context.commit(type.CLEAR_MOVIES_QUERY);
  },
  [type.FETCH_MOVIES_TAB](context, tab) {
    context.commit(type.FETCH_MOVIES_TAB, tab);
  },
};

export default {
  state: {
    movies: {
      [api.MOVIESTYPE.inTheaters]: {
        total: 0,
        subjects: [],
        describe: '',
      },
      [api.MOVIESTYPE.comingSoon]: {
        total: 0,
        subjects: [],
        describe: '',
      },
    },
    movieQuery: {
      total: 0,
      subjects: [],
      describe: '',
    },
    tab: 'in_theaters',
  },
  mutations,
  actions,
};
