class RectangleDetection {
  private stringArr: string[];
  public AB: number[] = [];

  constructor(stringArr: string[]) {
    this.stringArr = stringArr;
  }

  getResultAB = () => {
    return [5, 8];
  };

  findRetangle = () => {
    this.stringArr.forEach((row) => {});
  };

  hasContainSharp = (row: string) => {
    return true;
  };
}

export default RectangleDetection;
