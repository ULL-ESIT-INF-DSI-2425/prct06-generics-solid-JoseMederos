import { describe, expect, test } from "vitest";
import { RationalNumber } from "../src/Mod/rational.ts"

const rationalNumber1 =  new RationalNumber(1, 3);
const rationalNumber2 =  new RationalNumber(2, 6);
const rationalNumber3 =  new RationalNumber(4, 3);
const rationalNumber4 =  new RationalNumber(1, 1);

describe("add function tests", () => {
  test("add(1 / 3, 2 / 6) returns value 3 + 9i", () => {
    expect(rationalNumber1.add(rationalNumber2)).toStrictEqual(
      new RationalNumber(12, 9),
    );
  });

  test("add(1 / 3, 2 / 6) returns value 0 + 2i", () => {
    expect(rationalNumber3.add(rationalNumber4)).toStrictEqual(
      new RationalNumber(7, 4),
    );
  });
});

describe("substract function tests", () => {
  test("sub(1 / 3, 2 / 6) returns value 3 + 9i", () => {
    expect(rationalNumber1.substract(rationalNumber2)).toStrictEqual(
      new RationalNumber(0, 9),
    );
  });

  test("sub(1 / 3, 2 / 6) returns value 3 + 9i", () => {
    expect(rationalNumber3.substract(rationalNumber4)).toStrictEqual(
      new RationalNumber(1, 4),
    );
  });
});

describe("multiply function tests", () => {
  test("mult(1 / 3, 2 / 6) returns value 3 + 9i", () => {
    expect(rationalNumber1.multiply(rationalNumber2)).toStrictEqual(
      new RationalNumber(2, 18),
    );
  });

  test("mult(1 / 3, 2 / 6) returns value 3 + 9i", () => {
    expect(rationalNumber3.multiply(rationalNumber4)).toStrictEqual(
      new RationalNumber(4, 3),
    );
  });
});

describe("divide function tests", () => {
  test("div(1 / 3, 2 / 6) returns value 3 + 9i", () => {
    expect(rationalNumber1.substract(rationalNumber2)).toStrictEqual(
      new RationalNumber(0, 9),
    );
  });

  test("div(1 / 3, 2 / 6) returns value 3 + 9i", () => {
    expect(rationalNumber3.divide(rationalNumber4)).toStrictEqual(
      new RationalNumber(4, 3),
    );
  });
});
