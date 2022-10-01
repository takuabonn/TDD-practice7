import RectangleDetection from "../src";

describe("整数 A,B,C,D を求める", () => {
  test("10 個の文字列のうち＃が現れた最初の位置を A として保持", () => {
    const stringArr = [
      "..........",
      "..........",
      "..........",
      "..........",
      "...######.",
      "...######.",
      "...######.",
      "...######.",
      "..........",
      "..........",
    ];
    const rectangleDetection = new RectangleDetection(stringArr);
    const result = rectangleDetection.getResult();
    expect(result).toBe(5);
  });
});
