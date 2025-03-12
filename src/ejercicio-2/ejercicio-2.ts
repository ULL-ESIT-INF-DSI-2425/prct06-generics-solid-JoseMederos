/**
 * Interface que contiene las caracteristicas de una cancion.
 */
export interface Song {
  name: string;
  duration: number;
  genres: string[];
  isSingle: boolean;
  playCount: number;
}

/**
 * Clase que contiene las caracteristicas y canciones de un album.
 */
export class Album {
  constructor(
    public name: string,
    public year: number,
    public songs: Song[] = [],
  ) {}

  /**
   * Metodo para agregar una cancion a un album.
   * @param song - Cancion a agregar.
   */
  addSong(song: Song): void {
    this.songs.push(song);
  }

  /**
   * Metodo getter para obtener cuantas canciones tiene el album.
   * @returns Tamaño del array **songs**.
   */
  getNumberOfSongs(): number {
    return this.songs.length;
  }

  /**
   * Metodo getter para obtener la duracion del album.
   * @returns Duracion del album en segundos.
   */
  getTotalDuration(): number {
    return this.songs.reduce((total, song) => total + song.duration, 0);
  }

  /**
   * Metodo getter para obtener la cantidad de reproducciones que tiene un album.
   * @returns Numero de reproducciones.
   */
  getTotalPlayCount(): number {
    return this.songs.reduce((total, song) => total + song.playCount, 0);
  }

  /**
   * Metodo que imprime una tabla con las canciones del album.
   */
  showInfo(): void {
    console.table(this.songs);
  }
}

/**
 * Clase que representa a un artista.
 */
export class Artist {
  constructor(
    public name: string,
    public monthlyListeners: number,
    public discography: Album[] = [],
  ) {}

  /**
   * Metodo para añadir un album a la discografia.
   * @param album - album a añadir.
   */
  addAlbum(album: Album): void {
    this.discography.push(album);
  }

  /**
   * Metodo para imprimir los datos de la discografia en forma de tabla.
   */
  showInfo(): void {
    console.table({
      name: this.name,
      monthlyListeners: this.monthlyListeners,
      numberOfAlbums: this.discography.length,
    });
  }
}

/**
 * Clase para representar una biblioteca musical.
 */
export class MusicLibrary {
  private artists: Artist[] = [];

  /**
   * Metodo getter de artist
   * @returns artists
   */
  getArtist(): Artist[] {
    return this.artists;
  }

  /**
   * Metodo para añadir a un artita a la biblioteca.
   * @param artist - Artista a añadir.
   */
  addArtist(artist: Artist): void {
    this.artists.push(artist);
  }

  /**
   * Metodo para buscar a un artista en la biblioteca por su nombre.
   * @param name - Nombre del artista a buscar.
   * @returns Array con los artistas que tengan el nombre **name**.
   */
  searchArtistsByName(name: string): Artist[] {
    return this.artists.filter((artist) =>
      artist.name.toLowerCase().includes(name.toLowerCase()),
    );
  }

  /**
   * Metodo que busca un album en la biblioteca por su nombre.
   * @param name - Nombre del album.
   * @returns Array con los albumes que tengan el nombre **name**.
   */
  searchAlbumsByName(name: string): Album[] {
    const albums: Album[] = [];
    this.artists.forEach((artist) => {
      artist.discography.forEach((album) => {
        if (album.name.toLowerCase().includes(name.toLowerCase())) {
          albums.push(album);
        }
      });
    });
    return albums;
  }

  /**
   * Metodo que busca una cancion en la biblioteca por su nombre.
   * @param name - Nombre de la cancion.
   * @returns Array con las canciones que tengan el nombre **name**.
   */
  searchSongsByName(name: string): Song[] {
    const songs: Song[] = [];
    this.artists.forEach((artist) => {
      artist.discography.forEach((album) => {
        album.songs.forEach((song) => {
          if (song.name.toLowerCase().includes(name.toLowerCase())) {
            songs.push(song);
          }
        });
      });
    });
    return songs;
  }

  /**
   * Metodo para imprimir en formato de tabla el contenido de la biblioteca.
   */
  showLibrary(): void {
    console.table(
      this.artists.map((artist) => ({
        name: artist.name,
        monthlyListeners: artist.monthlyListeners,
        numberOfAlbums: artist.discography.length,
      })),
    );
  }
}

/**
 * Clase encargada de imprimir los contenidos de la MusicLibrary
 */
export class MusicLibraryPrinter {
  constructor(private musicLibrary: MusicLibrary) {}

  /**
   * Metodo para imprimir en formato de tabla el contenido de la biblioteca.
   */
  showLibrary(): void {
    console.table(
      this.musicLibrary.getArtist().map((artist) => ({
        name: artist.name,
        monthlyListeners: artist.monthlyListeners,
        numberOfAlbums: artist.discography.length,
      })),
    );
  }
}
