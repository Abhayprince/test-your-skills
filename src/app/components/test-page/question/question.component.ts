import { Component, Input, OnInit } from "@angular/core";
import { AnswerType } from "src/app/core/enums/AnswerType";
import { Option } from "src/app/core/models/option.model";
import { Question } from "src/app/core/models/question.model";

@Component({
  selector: "app-question",
  templateUrl: "./question.component.html",
  styleUrls: ["./question.component.css"],
})
export class QuestionComponent implements OnInit {
  @Input("currentQuestion") currentQuestion: Question;
  @Input("currentQuestionOptions") currentQuestionOptions: Option[];
  AnswerType = AnswerType;
  constructor() {}

  ngOnInit() {}
}
