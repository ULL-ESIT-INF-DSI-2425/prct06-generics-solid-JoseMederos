import { RationalNumber } from "./rational.js";
import { ComplexNumber } from "./complex.js";

/**
 * Adapter para que Complex pueda operar con Rational
 */
export class AdapterRC extends ComplexNumber {
  constructor(private service: RationalNumber) {
    super(service.getNum() / service.getDen(), 0)
  }

  /**
   * Getter de Rational adaptado
   * @returns rational adaptado
   */
  getData() {
    return this;
  }
}