import RectangleDetection from "../src";

describe("整数 A,B,C,D を求める", () => {
  describe("#が含まれる文字列配列の#始まりと#の終わりの算出", () => {
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
    rectangleDetection.findRetangle();
    const [a, b] = rectangleDetection.getResultAB();
    test("10 個の文字列のうち＃が現れた最初の位置を A として保持", () => {
      expect(a).toBe(5);
    });
    test("#が現れてからまた.だけに戻った位置を B として保持", () => {
      expect(b).toBe(8);
    });
  });

  describe("siの中の#の始まりと#の終わりの算出", () => {
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
    rectangleDetection.findRetangle();
    const [c, d] = rectangleDetection.getResultCD();
    test(" si の文字列から一番最初に#が現れた位置を C として保持", () => {
      expect(c).toBe(4);
    });

    test("#が現れてからまた.だけに戻った位置を D として保持", () => {
      expect(d).toBe(9);
    });
  });
  test("#が一個だけの時", () => {
    const stringArr = [
      "..........",
      "..#.......",
      "..........",
      "..........",
      "..........",
      "..........",
      "..........",
      "..........",
      "..........",
      "..........",
    ];
    const rectangleDetection = new RectangleDetection(stringArr);
    rectangleDetection.findRetangle();
    const [a, b] = rectangleDetection.getResultAB();
    const [c, d] = rectangleDetection.getResultCD();
    expect(a).toBe(2);
    expect(b).toBe(2);
    expect(c).toBe(3);
    expect(d).toBe(3);
  });

  test("全て#の時", () => {
    const stringArr = [
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
      "##########",
    ];
    const rectangleDetection = new RectangleDetection(stringArr);
    rectangleDetection.findRetangle();
    const [a, b] = rectangleDetection.getResultAB();
    const [c, d] = rectangleDetection.getResultCD();
    expect(a).toBe(1);
    expect(b).toBe(10);
    expect(c).toBe(1);
    expect(d).toBe(10);
  });

  test("最後が#の時", () => {
    const stringArr = [
      "..........",
      "..........",
      "..........",
      "..........",
      "..........",
      "..........",
      "..........",
      "..........",
      "..........",
      "##########",
    ];
    const rectangleDetection = new RectangleDetection(stringArr);
    rectangleDetection.findRetangle();
    const [a, b] = rectangleDetection.getResultAB();
    const [c, d] = rectangleDetection.getResultCD();
    expect(a).toBe(10);
    expect(b).toBe(10);
    expect(c).toBe(1);
    expect(d).toBe(10);
  });
  test("siの最後がだけ#の時", () => {
    const stringArr = [
      "..........",
      ".........#",
      "..........",
      "..........",
      "..........",
      "..........",
      "..........",
      "..........",
      "..........",
      "..........",
    ];
    const rectangleDetection = new RectangleDetection(stringArr);
    rectangleDetection.findRetangle();
    const [a, b] = rectangleDetection.getResultAB();
    const [c, d] = rectangleDetection.getResultCD();
    expect(a).toBe(2);
    expect(b).toBe(2);
    expect(c).toBe(10);
    expect(d).toBe(10);
  });
});
