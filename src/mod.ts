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

/**
 * Clase ComplexNumber que implementa la interfaz Arithmeticable
 */
export class ComplexNumber implements Arithmeticable<ComplexNumber> {
  constructor(
    private real: number,
    private imag: number,
  ) {}

  /**
   * Implementacion del metodo add
   * @param other - segundo operando
   * @returns suma de op y other
   */
  add(other: ComplexNumber): ComplexNumber {
    return new ComplexNumber(this.real + other.real, this.imag + other.imag);
  }

  /**
   * Implementacion del metodo substract
   * @param other - segundo operando
   * @returns resta de op y other
   */
  substract(other: ComplexNumber): ComplexNumber {
    return new ComplexNumber(this.real - other.real, this.imag - other.imag);
  }

  /**
   * Implementacion del metodo multiply
   * @param other - segundo operando
   * @returns producto de op y other
   */
  multiply(other: ComplexNumber): ComplexNumber {
    return new ComplexNumber(
      this.real * other.real - this.imag * other.imag,
      this.real * other.imag + this.imag * other.real,
    );
  }

  /**
   * Implementacion del metodo divide
   * @param other - segundo operando
   * @returns cociente de op y other
   */
  divide(other: ComplexNumber): ComplexNumber {
    return new ComplexNumber(
      this.real * other.real +
        (this.imag * other.imag) /
          (this.imag * this.imag + other.imag * other.imag),
      this.imag * other.real -
        (this.real * other.imag) /
          (this.imag * this.imag + other.imag * other.imag),
    );
  }
}
