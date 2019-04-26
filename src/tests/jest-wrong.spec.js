let isHappy;

describe("When is happy", () => {
  isHappy = true;
  test("then he is happy", () => {
    expect(isHappy).toBeTruthy();
  });
});

describe("When is not happy", () => {
  isHappy = false;
  test("then he is not happy", () => {
    expect(isHappy).toBeFalsy();
  });
});
