/**
 * Interfaz generica para elementos que pueden ser buscados por nombre
 */
export interface SearchableByName<T> {
  searchByName(name: string): T[];
}

/**
 * Interfaz generica para elementos que pueden ser buscados por año
 */
export interface SearchableByYear<T> {
  searchByYear(year: number): T[];
}

/**
 * Interfaz generica principal que combina las interfaces anteriores
 */
export interface Streamable<T>
  extends SearchableByName<T>,
    SearchableByYear<T> {
  addItem(item: T): void;
  getItems(): T[];
}

/**
 * Clase generica abstracta que implementa Streamable<T> para crear una coleccion
 */
export abstract class BasicStreamableCollection<T> implements Streamable<T> {
  protected items: T[];

  constructor() {
    this.items = [];
  }

  /**
   * Implementación concreta para añadir un ítem
   * @param item - item a añadir
   */
  addItem(item: T): void {
    this.items.push(item);
  }

  /**
   * Implementación concreta para obtener todos los ítems
   */
  getItems(): T[] {
    return this.items;
  }

  abstract searchByName(name: string): T[];
  abstract searchByYear(year: number): T[];
}

/**
 * Interface para almacenar datos de series
 */
export interface Series {
  name: string;
  year: number;
  seasons: number;
}

/**
 * Interface para almacenar datos de peliculas
 */
export interface Movie {
  name: string;
  year: number;
  duration: number;
}

/**
 * Interface para almacenar datos de documentales
 */
export interface Documentary {
  name: string;
  year: number;
  topic: string;
}

/**
 * Especializacion para coleccion de series
 */
export class SeriesCollection extends BasicStreamableCollection<Series> {
  /**
   * Busqueda de series por nombre
   * @param name - nombre a buscar
   * @returns lista de series que coincidan con el nombre
   */
  searchByName(name: string): Series[] {
    return this.items.filter((item) => item.name.includes(name));
  }

  /**
   * Busqueda de series por año
   * @param year - año a buscar
   * @returns lista de series que coincidan con el año
   */
  searchByYear(year: number): Series[] {
    return this.items.filter((item) => item.year === year);
  }
}

/**
 * Especializacion para coleccion de peliculas
 */
export class MoviesCollection extends BasicStreamableCollection<Movie> {
  /**
   * Busqueda de peliculas por nombre
   * @param name - nombre a buscar
   * @returns lista de peliculas que coincidan con el nombre
   */
  searchByName(name: string): Movie[] {
    return this.items.filter((item) => item.name.includes(name));
  }

  /**
   * Busqueda de series por año
   * @param year - año a buscar
   * @returns lista de series que coincidan con el año
   */
  searchByYear(year: number): Movie[] {
    return this.items.filter((item) => item.year === year);
  }
}

/**
 * Especializacion para coleccion de documentales
 */
export class DocumentariesCollection extends BasicStreamableCollection<Documentary> {
  /**
   * Busqueda de documentales por nombre
   * @param name - nombre a buscar
   * @returns lista de documentales que coincidan con el nombre
   */
  searchByName(name: string): Documentary[] {
    return this.items.filter((item) => item.name.includes(name));
  }

  /**
   * Busqueda de documentales por año
   * @param year - año a buscar
   * @returns lista de documentales que coincidan con el año
   */
  searchByYear(year: number): Documentary[] {
    return this.items.filter((item) => item.year === year);
  }
}
