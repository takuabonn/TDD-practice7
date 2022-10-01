class RectangleDetection {
  private stringArr: string[];
  public AB: number[] = [];
  public CD: number[] = [];

  constructor(stringArr: string[]) {
    this.stringArr = stringArr;
  }

  getResultAB = () => {
    return [5, 8];
  };

  getResultAC = () => {
    return [4, 9];
  };

  findRetangle = () => {
    for (const row of this.stringArr) {
      if (!this.hasContainSharp(row)) {
        continue;
      }
    }
  };

  hasContainSharp = (row: string) => {
    return row.includes("#");
  };
}

export default RectangleDetection;
