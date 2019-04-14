import { init } from '@rematch/core';
import models from '../model';

describe('The cast process', () => {
  test('Should return cast list fo first movie', async () => {
    const store = init({
      models
    });

    await store.dispatch.movies.fetchMovies();

    const moviesData = store.getState().movies;

    expect(moviesData.items).toBeTruthy();
    expect(moviesData.items.length).toBe(20);

    expect(moviesData.items[0].id).toBeTruthy();

    await store.dispatch.cast.fetchCast(moviesData.items[0].id);

    const castData = store.getState().cast;

    expect(castData.items).toBeTruthy();
    expect(castData.items.length).toBeTruthy();
    expect(castData.items.length).toBeGreaterThan(1);

  });

  test('Should reset cast list', async () => {
    const store = init({
      models
    });

    await store.dispatch.movies.fetchMovies();

    const moviesData = store.getState().movies;

    expect(moviesData.items).toBeTruthy();
    expect(moviesData.items.length).toBe(20);

    expect(moviesData.items[0].id).toBeTruthy();

    await store.dispatch.cast.fetchCast(moviesData.items[0].id);

    const castData = store.getState().cast;

    expect(castData.items).toBeTruthy();
    expect(castData.items.length).toBeTruthy();
    expect(castData.items.length).toBeGreaterThan(1);


    await store.dispatch.cast.resetCast();

    const castData2 = store.getState().cast;

    expect(castData2.items.length).toBe(0);

  });

});