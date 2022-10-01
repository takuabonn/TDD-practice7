class RectangleDetection {
  private stringArr: string[];
  public AB: number[] = [];

  constructor(stringArr: string[]) {
    this.stringArr = stringArr;
  }

  getResult = () => {
    return [5, 8];
  };
}

export default RectangleDetection;
