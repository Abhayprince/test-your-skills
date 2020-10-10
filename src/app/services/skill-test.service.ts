import { Injectable } from "@angular/core";
import { SkillTest } from "../core/models/skill-test.model";

@Injectable({
  providedIn: "root",
})
export class SkillTestService {
  private skillTests: SkillTest[] = [];
  constructor() {
    this.skillTests = this.loadTests();
  }

  getSkillTests(): SkillTest[] {
    return this.skillTests;
  }
  getSkillById(id: number): SkillTest {
    return this.skillTests.find((s) => s.id === id);
  }

  private loadTests() {
    return [
      new SkillTest(
        1,
        "Asp.Net Core",
        10,
        5,
        null,
        "This test contains questions from Microsoft Asp.Net Core Ecosystem",
        ["C#", "Dependency Injection", "Linq"]
      ),
      new SkillTest(
        2,
        "C#",
        25,
        15,
        null,
        "This test contains questions from Microsoft Asp.Net Core Ecosystem",
        ["C#", "Dependency Injection", "Linq"]
      ),
      new SkillTest(
        3,
        ".Net Fullstack",
        50,
        50,
        null,
        "This test contains questions from Microsoft Asp.Net Core Ecosystem",
        ["C#", "Dependency Injection", "Linq"]
      ),
      new SkillTest(
        4,
        "Javascript",
        25,
        10,
        null,
        "This test contains questions from Microsoft Asp.Net Core Ecosystem",
        ["C#", "Dependency Injection", "Linq"]
      ),
    ];
  }
}
