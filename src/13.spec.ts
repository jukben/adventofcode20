import { findNearestBus } from "./13";

it("simple 1a/2", () => {
  expect(findNearestBus(939, "7,13,x,x,59,x,31,19")).toBe(295);
});

it("solution 1/2", () => {
  expect(
    findNearestBus(
      1000511,
      "29,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,37,x,x,x,x,x,409,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,17,13,19,x,x,x,23,x,x,x,x,x,x,x,353,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,41"
    )
  ).toBe(222);
});
