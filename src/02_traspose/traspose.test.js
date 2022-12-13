import traspose from "./traspose";

describe("testing traspose", () => {
  test("should transpose with strings ", () => {
    const transposed = traspose([
      ["a", "b"],
      ["c", "d"],
    ]);
    expect(transposed).toStrictEqual([
      ["a", "c"],
      ["b", "d"],
    ]);
  });
  test("should throw type error -string", () => {
    function wrongInputType() {
      traspose("racecar");
    }
    expect(wrongInputType).toThrowError(TypeError);
  });
  test("should throw type error - reg obj", () => {
    function wrongInputType() {
      traspose({ foo: "foo", bar: "bar"});
    }
    expect(wrongInputType).toThrowError(TypeError);
  });
  test("should transpose with long strings ", () => {
    const transposed = traspose([
      ["apple", "banana"],
      ["carrot", "date"],
    ]);
    expect(transposed).toStrictEqual([
      ["apple", "carrot"],
      ["banana", "date"],
    ]);
  });
  test("should transpose with different sizes of arrays ", () => {
    const transposed = traspose([["a", "b"], ["c"]]);
    expect(transposed).toStrictEqual([["a", "c"], ["b"]]);
  });
  test("should transpose with different sizes of arrays and types ", () => {
    const transposed = traspose([["a", 2], ["c"]]);
    expect(transposed).toStrictEqual([["a", "c"], [2]]);
  });
  test("should transpose with numbers ", () => {
    const transposed = traspose([
      [1, 2],
      [3, 4],
    ]);
    expect(transposed).toStrictEqual([
      [1, 3],
      [2, 4],
    ]);
  });
  test("should transpose with numbers ", () => {
    const transposed = traspose([
      [1, 2],
      [3, 4],
    ]);
    expect(transposed).toStrictEqual([
      [1, 3],
      [2, 4],
    ]);
  });
  test("should transpose with more arrays", () => {
    const transposed = traspose([
      [1, 2],
      [3, 4],
      [5, 6],
    ]);
    expect(transposed).toStrictEqual([
      [1, 3, 5],
      [2, 4, 6],
    ]);
  });
  test("should transpose with fewer arrays", () => {
    const transposed = traspose([
      [1, 2, 3],
      [4, 5, 6],
    ]);
    expect(transposed).toStrictEqual([
      [1, 4],
      [2, 5],
      [3, 6],
    ]);
  });
  test("should pass", () => {
    expect(true).toBe(true);
  });
  test("should fail", () => {
    expect(false).toBe(true);
  });
});
