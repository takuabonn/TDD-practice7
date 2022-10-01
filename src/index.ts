class RectangleDetection {
  private stringArr: string[];
  private AB: number[] = [];
  private CD: number[] = [];

  constructor(stringArr: string[]) {
    this.stringArr = stringArr;
  }

  getResultAB = () => {
    return this.AB;
  };

  getResultCD = () => {
    return this.CD;
  };

  private sideConstitution = (start: number, end: number) => {
    if (start === end || !end) {
      return [start, start];
    }

    return [start, end];
  };

  findRetangle = () => {
    let start = 0;
    let end = 0;
    for (const [index, row] of this.stringArr.entries()) {
      if (!this.CD.length && row.indexOf("#") >= 0) {
        this.calchorizontalLength(row);
      }
      if (row.indexOf("#") >= 0 && !start) {
        start = index + 1;
        end = index + 1;
        continue;
      }
      if (row.indexOf("#") >= 0 && start) {
        end = end + 1;
        continue;
      }
    }
    this.AB = this.sideConstitution(start, end);
  };

  private calchorizontalLength = (row: string) => {
    let start = 0;
    let end = 0;
    for (const [index, point] of [...row].entries()) {
      if (point === "#" && !start) {
        start = index + 1;
        end = index + 1;
        continue;
      }
      if (point === "#" && start) {
        end = end + 1;
        continue;
      }
    }
    this.CD = this.sideConstitution(start, end);
  };
}

export default RectangleDetection;
