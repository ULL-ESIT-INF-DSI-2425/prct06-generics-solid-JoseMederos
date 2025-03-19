import { describe, expect, test } from "vitest";
import { RationalNumber } from "../src/Mod/rational.ts";
import { ComplexNumber } from "../src/Mod/complex.ts"
import { AdapterRC } from "../src/Mod/adapter.ts"
const complexNumber1 = new ComplexNumber(1, 3);
const complexNumber2 = new ComplexNumber(2, 6);
const complexNumber3 = new ComplexNumber(-2, 3);
const complexNumber4 = new ComplexNumber(2, -1);

const rationalNumber1 =  new RationalNumber(1, 2);
const rationalNumber2 =  new RationalNumber(2, 8);
const rationalNumber3 =  new RationalNumber(8, 4);
const rationalNumber4 =  new RationalNumber(1, 1);

describe("add function tests", () => {
  test("add(1 + 3i, 1 / 3) returns value 1.5 + 3i", () => {
    const adapter = new AdapterRC(rationalNumber1)
    expect(complexNumber1.add(adapter)).toStrictEqual(
      new ComplexNumber(1.5, 3),
    );
  });

  test("add(-2 + 3i, 2 -1i) returns value 0 + 2i", () => {
    const adapter = new AdapterRC(rationalNumber2)
    expect(complexNumber2.add(adapter)).toStrictEqual(
      new ComplexNumber(2.25, 6),
    );
  });

  test("add(1 + 3i, 1 / 3) returns value 3 + 9i", () => {
    const adapter = new AdapterRC(rationalNumber3)
    expect(complexNumber3.add(adapter)).toStrictEqual(
      new ComplexNumber(0, 3),
    );
  });

  test("add(-2 + 3i, 2 -1i) returns value 0 + 2i", () => {
    const adapter = new AdapterRC(rationalNumber4)
    expect(complexNumber4.add(adapter)).toStrictEqual(
      new ComplexNumber(3, -1),
    );
  });
});

describe("substract function tests", () => {
  test("substract(1 + 3i, 2 + 6i) returns value -1 - 3i", () => {
    const adapter = new AdapterRC(rationalNumber1)
    expect(complexNumber1.substract(adapter)).toStrictEqual(
      new ComplexNumber(0.5, 3),
    );
  });

  test("substract(1 + 3i, 2 + 6i) returns value -1 - 3i", () => {
    const adapter = new AdapterRC(rationalNumber2)
    expect(complexNumber2.substract(adapter)).toStrictEqual(
      new ComplexNumber(1.75, 6),
    );
  });

  test("substract(1 + 3i, 2 + 6i) returns value -1 - 3i", () => {
    const adapter = new AdapterRC(rationalNumber3)
    expect(complexNumber3.substract(adapter)).toStrictEqual(
      new ComplexNumber(-4, 3),
    );
  });

  test("substract(1 + 3i, 2 + 6i) returns value -1 - 3i", () => {
    const adapter = new AdapterRC(rationalNumber4)
    expect(complexNumber4.substract(adapter)).toStrictEqual(
      new ComplexNumber(1, -1),
    );
  });
});

describe("miltiply function tests", () => {
  test("multiply(1 + 3i, 2 + 6i) returns value -16", () => {
    const adapter = new AdapterRC(rationalNumber1)
    expect(complexNumber1.multiply(adapter)).toStrictEqual(
      new ComplexNumber(0.5, 1.5),
    );
  });

  test("multiply(1 + 3i, 2 + 6i) returns value -16", () => {
    const adapter = new AdapterRC(rationalNumber2)
    expect(complexNumber2.multiply(adapter)).toStrictEqual(
      new ComplexNumber(0.5, 1.5),
    );
  });

  test("multiply(1 + 3i, 2 + 6i) returns value -16", () => {
    const adapter = new AdapterRC(rationalNumber3)
    expect(complexNumber3.multiply(adapter)).toStrictEqual(
      new ComplexNumber(-4, 6),
    );
  });

  test("multiply(1 + 3i, 2 + 6i) returns value -16", () => {
    const adapter = new AdapterRC(rationalNumber4)
    expect(complexNumber4.multiply(adapter)).toStrictEqual(
      new ComplexNumber(2, -1),
    );
  });
});

describe("divide function tests", () => {
  test("divide(1 + 3i, 2 + 6i) returns value -16", () => {
    const adapter = new AdapterRC(rationalNumber1)
    expect(complexNumber1.divide(adapter)).toStrictEqual(
      new ComplexNumber(0.5, 1.5),
    );
  });

  test("divide(1 + 3i, 2 + 6i) returns value -16", () => {
    const adapter = new AdapterRC(rationalNumber2)
    expect(complexNumber2.divide(adapter)).toStrictEqual(
      new ComplexNumber(0.5, 1.5),
    );
  });

  test("divide(1 + 3i, 2 + 6i) returns value -16", () => {
    const adapter = new AdapterRC(rationalNumber3)
    expect(complexNumber3.divide(adapter)).toStrictEqual(
      new ComplexNumber(-4, 6),
    );
  });

  test("divide(1 + 3i, 2 + 6i) returns value -16", () => {
    const adapter = new AdapterRC(rationalNumber4)
    expect(complexNumber4.divide(adapter)).toStrictEqual(
      new ComplexNumber(2, -1),
    );
  });
});
