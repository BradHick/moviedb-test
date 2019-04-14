import { init } from '@rematch/core';
import models from '../model';

describe('The movie process', () => {
  test('Should return first movie of list', async () => {
    const store = init({
      models
    });

    await store.dispatch.movies.fetchMovies();

    const moviesData = store.getState().movies;

    expect(moviesData.items).toBeTruthy();
    expect(moviesData.items.length).toBe(20);

    expect(moviesData.items[0].id).toBeTruthy();

    await store.dispatch.movie.fetchMovie(moviesData.items[0].id);

    const movieData = store.getState().movie;

    expect(movieData.item).toBeTruthy();
    expect(movieData.item.id).toBeTruthy();

  });

  test('Should reset movie', async () => {
    const store = init({
      models
    });

    await store.dispatch.movies.fetchMovies();

    const moviesData = store.getState().movies;

    expect(moviesData.items).toBeTruthy();
    expect(moviesData.items.length).toBe(20);

    expect(moviesData.items[0].id).toBeTruthy();

    await store.dispatch.movie.fetchMovie(moviesData.items[0].id);

    const movieData = store.getState().movie;

    expect(movieData.item).toBeTruthy();
    expect(movieData.item.id).toBeTruthy();

    await store.dispatch.movie.resetMovie();

    const movieData2 = store.getState().movie;

    expect(movieData2.item.id).toBeFalsy();

  });

  test('Should return a error when id does not exist', async () => {
    const store = init({
      models
    });


    await store.dispatch.movie.fetchMovie('00');

    const movieData = store.getState().movie;

    expect(movieData.error).toBeTruthy();
    expect(movieData.item.id).toBeFalsy();

  });


});