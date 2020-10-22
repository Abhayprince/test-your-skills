import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AnswerType } from "src/app/core/enums/AnswerType";
import { Question } from "src/app/core/models/question.model";
import { SkillTest } from "src/app/core/models/skill-test.model";
import { QuestionAnswerService } from "src/app/services/question-answer.service";
import { SkillTestService } from "src/app/services/skill-test.service";
import { Subject } from "rxjs";
import { Option } from "src/app/core/models/option.model";
import { QuestionTracker } from "src/app/core/models/question-tracker.model";

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
  currentQuestion: Question;
  currentQuestionOptions: Option[] = [];
  AnswerType = AnswerType;
  questionTracker: QuestionTracker[] = [];
  shownQuestionChangeConfirmation = false;
  currentTrackedQuestion: QuestionTracker;
  isLastQuestion = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private skillService: SkillTestService,
    private service: QuestionAnswerService
  ) {
    console.log("Constructor - TestPageLayoutComponent");
  }

  ngOnInit() {
    console.log("ngOnInit - TestPageLayoutComponent");

    this.route.paramMap.subscribe((p) => {
      this.skillTestId = +p.get("skillTestId");
      this.questionId = +p.get("questionId");

      this.skillTest = this.skillService.getSkillById(this.skillTestId);
      //console.log(this.skillTest.totalQuestions);
      //this.questionTracker = [...Array(this.skillTest.totalQuestions)];

      for (let i = 1; i <= this.skillTest.totalQuestions; i++) {
        //this.questions.push(new Question(i, `Q_${i}`, AnswerType.Single));
      }
      this.questions = this.service.getQuestions().filter((q) => {
        //console.log(q);
        return q.skillTestId == this.skillTestId;
      });

      //console.log(this.questions);
      this.currentQuestion = this.questions.find(
        (q) => q.id === this.questionId
      );
      console.log("this.currentQuestion", this.currentQuestion);
      this.currentQuestionOptions = this.service
        .getOptions()
        .filter((o) => o.questionId === this.questionId);
      //console.log("this.currentQuestionOptions", this.currentQuestionOptions);

      if (this.questionTracker.length === 0) {
        this.questionTracker = this.questions.map(
          (q, i) => new QuestionTracker(i + 1, q.id)
        );
      }
      const qIndex = this.questionTracker.findIndex(
        (q) => q.questionId === this.questionId && !q.isTouched
      );
      if (qIndex > -1) {
        this.currentTrackedQuestion = this.questionTracker[qIndex];
        if (qIndex === this.questions.length - 1) {
          this.isLastQuestion = true;
        }
        this.questionTracker[qIndex].isTouched = true;
      }
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
  onQuestionNumberClick(questionId: number) {
    if (!this.shownQuestionChangeConfirmation) {
      if (
        confirm(
          "You will not be able to revisit the current question. Are you sure want to leave this question?"
        )
      ) {
        this.shownQuestionChangeConfirmation = true;
        this.navigateToNextQuestion(questionId);
      }
    } else this.navigateToNextQuestion(questionId);
  }
  onNextClickHandler() {
    if (this.isLastQuestion) {
      if (this.questionTracker.some((q) => !q.isTouched)) {
        if (
          confirm(
            "You have some un-attempted question(s). Do you really want to submit the test?"
          )
        ) {
          alert("Last question. Submitting Test");
        } else {
          alert(
            "Please navigate to the un-attempted questions from the question number section"
          );
        }
      } else alert("Last question. Submitting Test");
    } else {
      const nextQuestionNumber = this.currentTrackedQuestion.sno + 1;
      const nextQuestionId = this.questionTracker.find(
        (q) => q.sno === nextQuestionNumber
      )?.questionId;
      this.navigateToNextQuestion(nextQuestionId);
    }
  }
  private navigateToNextQuestion(questionId: number) {
    if (questionId) {
      this.router.navigate(["/test-page", this.skillTestId, "q", questionId]);
    }
  }
}
