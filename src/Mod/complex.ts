import { Arithmeticable } from "./arithmeticable.js";

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


