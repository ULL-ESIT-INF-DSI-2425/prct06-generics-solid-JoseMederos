/**
 * Interface Arithmeticable donde se definen los metodos add, substract, multiply y divide.
 */
export interface Arithmeticable<T> {
  add(other: T): T;
  substract(other: T): T;
  multiply(other: T): T;
  divide(other: T): T;
}

/**
 * Clase generica ArithmeticableCollection
 */
export class ArithmeticableCollection<T extends Arithmeticable<T>> {
  private items: T[] = [];

  /**
   * Metodo para añadir un item a la coleccion
   * @param item - item a añadir
   */
  addArithmeticable(item: T) {
    this.items.push(item);
  }

  /**
   * Metodo para leer un item de la coleccion
   * @param index - indice del item a leer
   * @returns item con indice **index**
   */
  getArithmeticable(index: number): T | undefined {
    return this.items[index];
  }

  /**
   * Metodo para obtener la cantidad de intems en la lista
   * @returns numero de items
   */
  getNumberOfArithmeticables(): number {
    return this.items.length;
  }
}