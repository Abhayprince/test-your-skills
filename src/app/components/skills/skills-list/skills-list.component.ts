import { Component, OnInit } from "@angular/core";
import { SkillTest } from "../../../core/models/skill-test.model";
import { SkillTestService } from "../../../services/skill-test.service";

@Component({
  selector: "app-skills-list",
  templateUrl: "./skills-list.component.html",
  styleUrls: ["./skills-list.component.css"],
})
export class SkillsListComponent implements OnInit {
  skillTests: SkillTest[];
  constructor(private skillService: SkillTestService) {}

  ngOnInit() {
    this.skillTests = this.skillService.getSkillTests();
    console.log(this.skillService.getSkillTests());
    console.log(this.skillTests);
  }
}
