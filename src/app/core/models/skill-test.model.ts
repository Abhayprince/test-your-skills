export class SkillTest {
  constructor(
    public id: number,
    public name: string,
    public totalQuestions: number,
    public totalTimeMinutes: number,
    public displayTime?: string,
    public description?: string,
    public topics?: string[],
    public note?: string
  ) {
    if (!this.displayTime) {
      this.displayTime = this.totalTimeMinutes + " Minutes";
    }
  }
}
