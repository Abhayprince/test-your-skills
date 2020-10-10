import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SkillsListComponent } from "./components/skills/skills-list/skills-list.component";
import { SkillItemComponent } from "./components/skills/skill-item/skill-item.component";
import { TestDetailsComponent } from "./components/test-details/test-details.component";
import { TestPageLayoutComponent } from "./components/test-page/test-page-layout/test-page-layout.component";
import { QuestionComponent } from "./components/test-page/question/question.component";
import { OptionsComponent } from "./components/test-page/options/options.component";
import { TimerComponent } from "./components/test-page/timer/timer.component";
import { QuestionNumbersListComponent } from "./components/test-page/question-numbers-list/question-numbers-list.component";
import { LiveVideoComponent } from "./components/test-page/live-video/live-video.component";

@NgModule({
  declarations: [
    AppComponent,
    SkillsListComponent,
    SkillItemComponent,
    TestDetailsComponent,
    TestPageLayoutComponent,
    QuestionComponent,
    OptionsComponent,
    TimerComponent,
    QuestionNumbersListComponent,
    LiveVideoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
