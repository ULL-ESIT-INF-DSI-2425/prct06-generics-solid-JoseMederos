import { describe, it, expect, beforeEach } from 'vitest';
import { SeriesCollection, MoviesCollection, DocumentariesCollection } from '../src/ejercicio-1/ejercicio-1';

describe('SeriesCollection', () => {
  let seriesCollection: SeriesCollection;

  beforeEach(() => {
    seriesCollection = new SeriesCollection();
    seriesCollection.addItem({ name: 'Breaking Bad', year: 2008, seasons: 5 });
    seriesCollection.addItem({ name: 'Game of Thrones', year: 2011, seasons: 8 });
  });

  it('should add a series to the collection', () => {
    expect(seriesCollection.getItems().length).toBe(2);
  });

  it('should search series by name', () => {
    const results = seriesCollection.searchByName('Bad');
    expect(results.length).toBe(1);
    expect(results[0].name).toBe('Breaking Bad');
  });

  it('should search series by year', () => {
    const results = seriesCollection.searchByYear(2011);
    expect(results.length).toBe(1);
    expect(results[0].name).toBe('Game of Thrones');
  });
});

describe('MoviesCollection', () => {
  let moviesCollection: MoviesCollection;

  beforeEach(() => {
    moviesCollection = new MoviesCollection();
    moviesCollection.addItem({ name: 'Inception', year: 2010, duration: 148 });
    moviesCollection.addItem({ name: 'Interstellar', year: 2014, duration: 169 });
  });

  it('should add a movie to the collection', () => {
    expect(moviesCollection.getItems().length).toBe(2);
  });

  it('should search movies by name', () => {
    const results = moviesCollection.searchByName('Inception');
    expect(results.length).toBe(1);
    expect(results[0].name).toBe('Inception');
  });

  it('should search movies by year', () => {
    const results = moviesCollection.searchByYear(2014);
    expect(results.length).toBe(1);
    expect(results[0].name).toBe('Interstellar');
  });
});

describe('DocumentariesCollection', () => {
  let documentariesCollection: DocumentariesCollection;

  beforeEach(() => {
    documentariesCollection = new DocumentariesCollection();
    documentariesCollection.addItem({ name: 'Planet Earth', year: 2006, topic: 'Nature' });
    documentariesCollection.addItem({ name: 'The Social Dilemma', year: 2020, topic: 'Technology' });
  });

  it('should add a documentary to the collection', () => {
    expect(documentariesCollection.getItems().length).toBe(2);
  });

  it('should search documentaries by name', () => {
    const results = documentariesCollection.searchByName('Planet');
    expect(results.length).toBe(1);
    expect(results[0].name).toBe('Planet Earth');
  });

  it('should search documentaries by year', () => {
    const results = documentariesCollection.searchByYear(2020);
    expect(results.length).toBe(1);
    expect(results[0].name).toBe('The Social Dilemma');
  });
});