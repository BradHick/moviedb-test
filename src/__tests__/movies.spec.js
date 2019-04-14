import { init } from '@rematch/core';
import models from '../model';

describe('The movies list process', () => {
  test('Should return a list of movies', async () => {
    const store = init({
      models
    });

    await store.dispatch.movies.fetchMovies();

    const moviesData = store.getState().movies;

    expect(moviesData.items).toBeTruthy();
    expect(moviesData.items.length).toBe(20);

  });

  test('Should return a list of movies with 40 registers and second page', async () => {
    const store = init({
      models
    });

    //call fetch movies two times to fetch 40 registers
    await store.dispatch.movies.fetchMovies();
    await store.dispatch.movies.fetchMovies();

    const moviesData = store.getState().movies;

    expect(moviesData.items).toBeTruthy();
    expect(moviesData.items.length).toBe(40);
    expect(moviesData.page).toBe(3);

  });

  test('Should reset movie list', async () => {
    const store = init({
      models
    });

    //call fetch movies two times to fetch 40 registers
    await store.dispatch.movies.fetchMovies();
    await store.dispatch.movies.fetchMovies();

    const moviesData = store.getState().movies;

    expect(moviesData.items).toBeTruthy();
    expect(moviesData.items.length).toBe(40);
    expect(moviesData.page).toBe(3);

    //reseting movies list
    await store.dispatch.movies.resetMovies();

    const moviesData2 = store.getState().movies;

    expect(moviesData2.items.length).toBe(0);
    expect(moviesData2.page).toBe(1);

  });

});