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
    const [a, b] = rectangleDetection.getResultAB();
    expect(a).toBe(5);
  });
  test("#が現れてからまた.だけに戻った位置を B として保持", () => {
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
    const [a, b] = rectangleDetection.getResultAB();
    expect(b).toBe(8);
  });

  test("siの文字列から#があるかの判断", () => {
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
    expect(rectangleDetection.hasContainSharp("...######.")).toBe(true);
  });
});
