import { Injectable } from "@angular/core";
import { AnswerType } from "../core/enums/AnswerType";
import { Option } from "../core/models/option.model";
import { Question } from "../core/models/question.model";

@Injectable({
  providedIn: "root",
})
export class QuestionAnswerService {
  private questions: Question[] = [];
  private options: Option[] = [];

  constructor() {
    this.loadData();
  }

  getQuestions() {
    return [...this.questions];
  }
  getOptions() {
    return [...this.options];
  }

  private loadData() {
    const questions: Question[] = [];
    const options: Option[] = [];

    questions.push(
      new Question(
        1,
        "Which of the following statements is correct about Managed Code?",
        AnswerType.Single,
        3
      ),
      new Question(
        2,
        "Which of the following components of the .NET framework provide an extensible set of classes that can be used by any .NET compliant programming language?",
        AnswerType.Single,
        3
      ),
      new Question(
        3,
        "Code that targets the Common Language Runtime is known as",
        AnswerType.Single,
        3
      ),
      new Question(
        4,
        "Which of the following is the root of the .NET type hierarchy?",
        AnswerType.Single,
        3
      )
    );
    options.push(
      new Option(
        1,
        1,
        "Managed code is the code that is compiled by the JIT compilers."
      )
    );
    options.push(
      new Option(
        2,
        1,
        "Managed code is the code where resources are Garbage Collected."
      )
    );
    options.push(
      new Option(3, 1, "Managed code is the code that runs on top of Windows.")
    );
    options.push(
      new Option(
        4,
        1,
        "Managed code is the code that is written to target the services of the CLR."
      )
    );
    options.push(
      new Option(5, 1, "Managed code is the code that can run on top of Linux.")
    );

    options.push(new Option(6, 2, ".NET class libraries"));
    options.push(new Option(7, 2, "Common Language Runtime"));
    options.push(new Option(8, 2, "Common Language Infrastructure"));
    options.push(new Option(9, 2, "Common Type System"));

    options.push(new Option(10, 3, "Unmanaged"));
    options.push(new Option(11, 3, "Distributed"));
    options.push(new Option(12, 3, "Managed Code"));
    options.push(new Option(13, 3, "Native Code"));

    options.push(new Option(14, 4, "System.Object"));
    options.push(new Option(14, 4, "System.Type"));
    options.push(new Option(15, 4, "System.Base"));
    options.push(new Option(16, 4, "System.Parent"));
    options.push(new Option(17, 4, "System.Root"));

    this.questions = questions;
    this.options = options;
  }
}
