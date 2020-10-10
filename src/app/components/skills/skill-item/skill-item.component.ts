import { Component, Input, OnInit } from "@angular/core";
import { SkillTest } from "src/app/core/models/skill-test.model";

@Component({
  selector: "app-skill-item",
  templateUrl: "./skill-item.component.html",
  styleUrls: ["./skill-item.component.css"],
})
export class SkillItemComponent implements OnInit {
  @Input("skillTest") skillTest: SkillTest;

  constructor() {}

  ngOnInit() {}

  onSkillTestItemClick() {
    alert(JSON.stringify(this.skillTest));
  }
}
