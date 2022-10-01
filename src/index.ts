class RectangleDetection {
  private stringArr: string[];
  public AB: number[] = [];
  public CD: number[] = [];

  constructor(stringArr: string[]) {
    this.stringArr = stringArr;
  }

  getResultAB = () => {
    return this.AB;
  };

  getResultCD = () => {
    return this.CD;
  };

  findRetangle = () => {
    for (const [index, row] of this.stringArr.entries()) {
      if (!this.AB.length && row.indexOf("#") > 0) {
        this.AB.push(index + 1);
      }

      if (this.AB.length && row.indexOf("#") === -1) {
        this.AB.push(index);
      }

      if (!this.CD.length) {
        this.calchorizontalLength(row);
      }
    }
  };

  //   calverticalLength = (row: string) => {
  //     const index = row.indexOf("#");
  //     if (!this.AB.length && index > 0) {
  //       this.AB.push(index + 1);
  //     }

  //     if (!this.AB.length && index === -1) {
  //       this.AB.push(index);
  //     }
  //   };

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
