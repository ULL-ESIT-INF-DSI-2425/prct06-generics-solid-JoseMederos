import { describe, expect, test } from "vitest";
import { ComplexNumber, ArithmeticableCollection } from "../src/mod.ts";

const complexNumber1 = new ComplexNumber(1, 3);
const complexNumber2 = new ComplexNumber(2, 6);

const complexNumber3 = new ComplexNumber(-2, 3);
const complexNumber4 = new ComplexNumber(2, -1);
const complexNumber5 = new ComplexNumber(1, 1);

describe("add function tests", () => {
  test("add(1 + 3i, 2 + 6i) returns value 3 + 9i", () => {
    expect(complexNumber1.add(complexNumber2)).toStrictEqual(
      new ComplexNumber(3, 9),
    );
  });

  test("add(-2 + 3i, 2 -1i) returns value 0 + 2i", () => {
    expect(complexNumber3.add(complexNumber4)).toStrictEqual(
      new ComplexNumber(0, 2),
    );
  });
});

describe("substract function tests", () => {
  test("substract(1 + 3i, 2 + 6i) returns value -1 - 3i", () => {
    expect(complexNumber1.substract(complexNumber2)).toStrictEqual(
      new ComplexNumber(-1, -3),
    );
  });

  test("substract(-2 + 3i, 2 -1i) returns value -4 + 4i", () => {
    expect(complexNumber3.substract(complexNumber4)).toStrictEqual(
      new ComplexNumber(-4, 4),
    );
  });
});

describe("miltiply function tests", () => {
  test("multiply(1 + 3i, 2 + 6i) returns value -16", () => {
    expect(complexNumber1.multiply(complexNumber2)).toStrictEqual(
      new ComplexNumber(-16, 12),
    );
  });

  test("multiply(-2 + 3i, 2 -1i) returns value -1 + -4i", () => {
    expect(complexNumber3.multiply(complexNumber4)).toStrictEqual(
      new ComplexNumber(-1, 8),
    );
  });
});

describe("divide function tests", () => {
  test("divide(1 + 3i, 2 + 6i) return vakue -1 - 3i", () => {
    expect(complexNumber1.substract(complexNumber2)).toStrictEqual(
      new ComplexNumber(-1, -3),
    );
  });

  test("divide(1 + 1i, -2 + 3i) returns value 10 + 4i", () => {
    expect(complexNumber3.divide(complexNumber5)).toStrictEqual(
      new ComplexNumber(-1.7, 3.2),
    );
  });
});

describe("ArithmeticableCollection tests", () => {
  const collection = new ArithmeticableCollection();
  collection.addArithmeticable(complexNumber1);
  test("addArithmeticable(complexNumber1) and getArithmeticable(0)", () => {
    expect(collection.getArithmeticable(0)).toStrictEqual(complexNumber1);
  });

  collection.addArithmeticable(complexNumber1);
  test("getNumberOfArithmeticables", () => {
    expect(collection.getNumberOfArithmeticables()).toStrictEqual(2);
  });
});
