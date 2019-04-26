beforeAll(() => {
  console.log("before all");
});
afterAll(() => {
  console.log("after all");
});
beforeEach(() => {
  console.log("before each");
});
afterEach(() => {
  console.log("after each");
});
describe("describe 1", () => {
  console.log("DESCRIBE 1");
  beforeEach(() => {
    console.log("describe 1 - before each");
  });
  test("describe 1 - test", () => {
    console.log("describe 1 - test");
    expect(true).toBeTruthy();
  });
  describe("describe 1 - 1", () => {
    console.log("DESCRIBE 1 - 1");
    test("describe 1 - 1 test", () => {
      console.log("describe 1 - 1 test");
      expect(true).toBeTruthy();
    });
    test("describe 1 - 2 test", () => {
      console.log("describe 1 - 2 test");
      expect(true).toBeTruthy();
    });
  });
});

describe("describe 2", () => {
  console.log("DESCRIBE 2");
  beforeEach(() => {
    console.log("describe 2 - before each");
  });
  beforeAll(() => {
    console.log("describe 2 - before all");
  });

  test("describe 2 - test", () => {
    console.log("describe 2 - test");
    expect(true).toBeTruthy();
  });
  test("describe 2 - test2", () => {
    console.log("describe 2 - test2");
    expect(true).toBeTruthy();
  });
});
