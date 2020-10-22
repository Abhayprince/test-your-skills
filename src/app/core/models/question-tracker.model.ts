export class QuestionTracker {
  constructor(
    public sno: number,
    public questionId: number,
    public isTouched = false
  ) {}
}
