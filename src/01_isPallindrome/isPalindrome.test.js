import isPallindrome from "./isPallindrome";

describe("testing palindrome", () => {
  test("should pass", () => {
    expect(true).toBe(true);
  });
  test("aviva should be true", () => {
    const isPal = isPallindrome("aviva");
    expect(isPal).toBe(true);
  });
  test("davita should be false", () => {
    const isPal = isPallindrome("davita");
    expect(isPal).toBe(false);
  });
  test("check for type error - number", () => {
    function wrongInputType() {
      isPallindrome(181);
    }
    expect(wrongInputType).toThrowError(TypeError);
  });
  test("check for type error - array", () => {
    function wrongInputType() {
      isPallindrome(['madam']);
    }
    expect(wrongInputType).toThrowError(TypeError);
  });
  test("should fail - correct type", () => {
    function wrongInputType() {
      isPallindrome("racecar");
    }
    expect(wrongInputType).toThrowError(TypeError);
  });
  test("should fail", () => {
    expect(false).toBe(true);
  });
});

//string should get type error
