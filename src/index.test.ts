import { hello } from "./index";

describe("Hello", () => {
  test("It should pass basic test", () => {
    expect(hello("Jaime")).toBe("Hello Jaime!");
  });
});
