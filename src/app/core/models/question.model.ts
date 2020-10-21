import { AnswerType } from "../enums/AnswerType";

export class Question {
  constructor(
    public id: number,
    public text: string,
    public answerType: AnswerType,
    public skillTestId: number
  ) {}
}
