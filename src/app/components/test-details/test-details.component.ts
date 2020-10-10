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

  constructor(
    private route: ActivatedRoute,
    private skillService: SkillTestService,
    private router: Router
  ) {}

  ngOnInit() {
    const skillTestId = +this.route.snapshot.paramMap.get("skillTestId");
    if (skillTestId) {
      this.skillTest = this.skillService.getSkillById(skillTestId);
      if (!this.skillTest) return this.invalidLink();
    } else return this.invalidLink();
  }
  invalidLink() {
    alert("Invalid url");
    this.router.navigate(["/"]);
    return false;
  }
}
