import { Arithmeticable } from "./arithmeticable.js";
/**
 * Clase RationalNumber que implementa la interfaz Arithmeticable
 */
export class RationalNumber implements Arithmeticable<RationalNumber> {
  constructor(
    private num: number,
    private den: number,
  ) {}

  /**
   * Getter del numerador
   * @returns numerador
   */
  getNum() {
    return this.num;
  }

  /**
   * Getter del denominador
   * @returns denominador
   */
  getDen() {
    return this.den;
  }

  /**
   * Implementacion del metodo add
   * @param other - segundo operando
   * @returns suma de op y other
   */
  add(other: RationalNumber): RationalNumber {
    return new RationalNumber(
      this.num * other.den + this.den * other.num,
      this.den + other.den,
    );
  }

  /**
   * Implementacion del metodo substract
   * @param other - segundo operando
   * @returns resta de op y other
   */
  substract(other: RationalNumber): RationalNumber {
    return new RationalNumber(
      this.num * other.den - this.den * other.num,
      this.den + other.den,
    );
  }

  /**
   * Implementacion del metodo multiply
   * @param other - segundo operando
   * @returns producto de op y other
   */
  multiply(other: RationalNumber): RationalNumber {
    return new RationalNumber(this.num * other.num, this.den * other.den);
  }

  /**
   * Implementacion del metodo divide
   * @param other - segundo operando
   * @returns cociente de op y other
   */
  divide(other: RationalNumber): RationalNumber {
    return new RationalNumber(this.num * other.den, this.den * other.num);

  }
}