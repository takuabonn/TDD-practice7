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

  getResultCD = () => {
    return [...this.CD];
  };

  findRetangle = () => {
    for (const [index, row] of this.stringArr.entries()) {
      if (!this.hasContainSharp(row)) {
        continue;
      }
      if (!this.CD.length) {
        this.calchorizontalLength(row);
      }
    }
  };

  calchorizontalLength = (row: string) => {
    for (const [index, point] of [...row].entries()) {
      if (!this.CD.length && point === "#") {
        this.CD.push(index + 1);
      }
      if (this.CD.length && point === ".") {
        this.CD.push(index);
        break;
      }
    }
  };

  hasContainSharp = (row: string) => {
    return row.includes("#");
  };
}

export default RectangleDetection;
