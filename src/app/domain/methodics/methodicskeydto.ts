export class MethodicsKeyDto {
  id: number;
  nameScale: string;
  numbersQuestions: number[];
  stringQuestions: string;
  constructor() {
    this.numbersQuestions = [];
  }
  public static fillArray(key: MethodicsKeyDto): any {
    key.numbersQuestions = [];
    const numbers: string[] = key.stringQuestions.split(new RegExp('[,.; ]+').compile());
    for (const number of numbers) {
      const num = Number.parseInt(number);
      if (num !== null && num !== undefined && !isNaN(num)) {
        key.numbersQuestions.push(Number.parseInt(number));
      }
    }
  }
  public getStringByNumbers(): any {
    this.stringQuestions = this.numbersQuestions.toString();
  }
}
