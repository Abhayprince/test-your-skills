import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { SkillTestService } from "src/app/services/skill-test.service";
import { SkillTest } from "../../core/models/skill-test.model";

@Component({
  selector: "app-test-details",
  templateUrl: "./test-details.component.html",
  styleUrls: ["./test-details.component.css"],
})
export class TestDetailsComponent implements OnInit {
  @Input("skillTest") skillTest: SkillTest;
  toggleCameraTest = false;
  skillTestId = 0;
  firstQuestionId = 1;
  constructor(
    private route: ActivatedRoute,
    private skillService: SkillTestService,
    private router: Router
  ) {}

  ngOnInit() {
    this.skillTestId = +this.route.snapshot.paramMap.get("skillTestId");
    if (this.skillTestId) {
      this.skillTest = this.skillService.getSkillById(this.skillTestId);
      if (!this.skillTest) return this.invalidLink();
    } else return this.invalidLink();
  }
  invalidLink() {
    alert("Invalid url");
    this.router.navigate(["/"]);
    return false;
  }
}
