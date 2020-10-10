import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SkillsListComponent } from "./components/skills/skills-list/skills-list.component";
import { TestDetailsComponent } from "./components/test-details/test-details.component";
import { TestPageLayoutComponent } from "./components/test-page/test-page-layout/test-page-layout.component";

const routes: Routes = [
  {
    path: "",
    component: SkillsListComponent,
    pathMatch: "full",
  },
  {
    path: "details/:skillTestId",
    component: TestDetailsComponent,
  },
  {
    path: "test-page/:skillTestId/q/:questionId",
    component: TestPageLayoutComponent,
  },
  {
    path: "**",
    redirectTo: "/",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
