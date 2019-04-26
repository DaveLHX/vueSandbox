let isHappy;
describe("When is happy", () => {
  beforeAll(() => {
    isHappy = true;
  });
  test("then he is happy", () => {
    expect(isHappy).toBeTruthy();
  });
});

describe("When is not happy", () => {
  beforeAll(() => {
    isHappy = false;
  });
  test("then he is not happy", () => {
    expect(isHappy).toBeFalsy();
  });
});
