import candyStore from "./candyStore";
const CandyStore = new candyStore();

describe("testing candy store", () => {
  test("should pass", () => {
    expect(true).toBe(true);
  });
  test("get a candy by id", () => {
    const candy = CandyStore.getCandy("5hd7y");
    expect(candy).toStrictEqual({
      amount: 4,
      id: "5hd7y",
      name: "twix",
      price: 5,
    });
  });
  
  test("get price of candy by id", () => {
    const price = CandyStore.getPrice("5hd7y");
    expect(price).toBe(5);
  });

  test("add new candy", () => {
    const newCandy = CandyStore.addCandy("1", "klik", 8);
    const isNewCandy = CandyStore.getCandy("1");
    expect(isNewCandy).toStrictEqual({
      amount: 1,
      id: "1",
      name: "klik",
      price: 8,
    });
  });

  test("add existing candy", () => {
    const oldTotal = CandyStore.getCandy("5hd7y").amount;
    const existingCandy = CandyStore.addCandy("5hd7y", "twix", 5);
    const newTotal = CandyStore.getCandy("5hd7y").amount;
    expect(newTotal).toBe(oldTotal + 1);
  });

  test("buy candy", () => {
    const oldTotal = CandyStore.getCandy("5hd7y").amount;
    const purchase = CandyStore.buy("5hd7y");
    const newTotal = CandyStore.getCandy("5hd7y").amount;
    expect(newTotal).toBe(oldTotal -1);
  });

  test("should fail", () => {
    expect(false).toBe(true);
  });
});
