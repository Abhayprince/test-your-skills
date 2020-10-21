import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AnswerType } from "src/app/core/enums/AnswerType";
import { Question } from "src/app/core/models/question.model";
import { SkillTest } from "src/app/core/models/skill-test.model";
import { QuestionAnswerService } from "src/app/services/question-answer.service";
import { SkillTestService } from "src/app/services/skill-test.service";
import { Subject } from "rxjs";

@Component({
  selector: "app-test-page-layout",
  templateUrl: "./test-page-layout.component.html",
  styleUrls: ["./test-page-layout.component.css"],
})
export class TestPageLayoutComponent implements OnInit {
  skillTestId = 0;
  questionId = 0;
  skillTest: SkillTest;
  questions: Question[] = [];
  exitTestEventSubject: Subject<void> = new Subject<void>();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private skillService: SkillTestService,
    private service: QuestionAnswerService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((p) => {
      console.log(`p`, p);
      console.log(`skillTestId`, p.get("skillTestId"));
      console.log(`questionId`, p.get("questionId"));

      this.skillTestId = +p.get("skillTestId");
      this.questionId = +p.get("questionId");

      this.skillTest = this.skillService.getSkillById(this.skillTestId);
      console.log(this.skillTest.totalQuestions);
      for (let i = 1; i <= this.skillTest.totalQuestions; i++) {
        //this.questions.push(new Question(i, `Q_${i}`, AnswerType.Single));
      }
      this.questions = this.service.getQuestions();
    });
  }
  onExitTest() {
    if (confirm("Do you really want to exit test?")) {
      console.log("Emit exit test event");
      this.exitTestEventSubject.next();
    }
  }
  onTimeOver() {
    console.log("Time Over from Timer");
    alert("Time over");
  }
}
