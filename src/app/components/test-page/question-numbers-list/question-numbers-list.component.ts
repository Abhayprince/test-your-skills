import { Component, Input, OnInit, Output } from "@angular/core";
import { Subject } from "rxjs";
import { QuestionTracker } from "src/app/core/models/question-tracker.model";

@Component({
  selector: "app-question-numbers-list",
  templateUrl: "./question-numbers-list.component.html",
  styleUrls: ["./question-numbers-list.component.css"],
})
export class QuestionNumbersListComponent implements OnInit {
  @Input() questionTracker: QuestionTracker[];
  @Input() skillTestId: number;
  @Output("questionNumberClickEvent") questionNumberClickEvent: Subject<number>;

  constructor() {
    this.questionNumberClickEvent = new Subject<number>();
  }

  ngOnInit() {
    console.log("ngOnInit", "questionTracker ", this.questionTracker);
  }
  onQuestionNumberClick(questionId: number) {
    console.log(
      "QuestionNumbersListComponent - onQuestionNumberClick",
      questionId
    );
    this.questionNumberClickEvent.next(questionId);
  }
}
