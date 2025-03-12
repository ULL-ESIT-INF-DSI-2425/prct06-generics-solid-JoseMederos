import { describe, expect, test } from "vitest";
import { Artist, Album, Song, MusicLibrary, MusicLibraryPrinter } from "../src/ejercicio-2/ejercicio-2.ts";

describe("Music Library functionality", () => {
  const song1: Song = {
    name: "Bohemian Rhapsody",
    duration: 354,
    genres: ["Rock"],
    isSingle: true,
    playCount: 1000000,
  };

  const song2: Song = {
    name: "We Will Rock You",
    duration: 122,
    genres: ["Rock"],
    isSingle: true,
    playCount: 2000000,
  };

  const song3: Song = {
    name: "Shape of You",
    duration: 233,
    genres: ["Pop"],
    isSingle: true,
    playCount: 3000000,
  };

  const album1 = new Album("A Night at the Opera", 1975);
  album1.addSong(song1);
  album1.addSong(song2);

  const album2 = new Album("÷", 2017);
  album2.addSong(song3);

  const queen = new Artist("Queen", 50000000);
  queen.addAlbum(album1);

  const edSheeran = new Artist("Ed Sheeran", 70000000);
  edSheeran.addAlbum(album2);

  const musicLibrary = new MusicLibrary();
  musicLibrary.addArtist(queen);
  musicLibrary.addArtist(edSheeran);

  const showMusicLibrary = new MusicLibraryPrinter(musicLibrary);

  test("Album - getNumberOfSongs()", () => {
    expect(album1.getNumberOfSongs()).toBe(2);
    expect(album2.getNumberOfSongs()).toBe(1);
  });

  test("Album - getTotalDuration()", () => {
    expect(album1.getTotalDuration()).toBe(476);
    expect(album2.getTotalDuration()).toBe(233);
  });

  test("Album - getTotalPlayCount()", () => {
    expect(album1.getTotalPlayCount()).toBe(3000000);
    expect(album2.getTotalPlayCount()).toBe(3000000);
  });

  test("Artist - addAlbum()", () => {
    expect(queen.discography.length).toBe(1);
    expect(edSheeran.discography.length).toBe(1);
  });

  test("Artist - showInfo()", () => {
    expect(() => queen.showInfo()).not.toThrow();
    expect(() => edSheeran.showInfo()).not.toThrow();
  });

  test("MusicLibrary - addArtist()", () => {
    expect(musicLibrary.searchArtistsByName("Queen")).toEqual([queen]);
    expect(musicLibrary.searchArtistsByName("Ed Sheeran")).toEqual([edSheeran]);
  });

  test("MusicLibrary - searchArtistsByName()", () => {
    expect(musicLibrary.searchArtistsByName("Queen")).toEqual([queen]);
    expect(musicLibrary.searchArtistsByName("Ed Sheeran")).toEqual([edSheeran]);
    expect(musicLibrary.searchArtistsByName("Adele")).toEqual([]);
  });

  test("MusicLibrary - searchAlbumsByName()", () => {
    expect(musicLibrary.searchAlbumsByName("Night")).toEqual([album1]);
    expect(musicLibrary.searchAlbumsByName("÷")).toEqual([album2]);
    expect(musicLibrary.searchAlbumsByName("Thriller")).toEqual([]);
  });

  test("MusicLibrary - searchSongsByName()", () => {
    expect(musicLibrary.searchSongsByName("Bohemian")).toEqual([song1]);
    expect(musicLibrary.searchSongsByName("Shape")).toEqual([song3]);
    expect(musicLibrary.searchSongsByName("Hello")).toEqual([]);
  });

  test("MusicLibrary - showLibrary()", () => {
    expect(() => showMusicLibrary.showLibrary()).not.toThrow();
  });
});
