import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  Output,
  EventEmitter,
} from "@angular/core";
import { Observable, Subject, Subscription } from "rxjs";

@Component({
  selector: "app-timer",
  templateUrl: "./timer.component.html",
  styleUrls: ["./timer.component.css"],
})
export class TimerComponent implements OnInit, OnDestroy {
  @Input("displayName") displayTime: string;
  @Input("totalMinutes") totalTimeInMinutes: number;
  @Input("exitTestObservable") exitTestObservable: Observable<void>;
  @Output("timeOver") timeOver: Subject<void> = new Subject<void>();

  remainingDisplayTime = "00:00:00";
  remainingSeconds: number;
  private interval;
  private eventsSubscription: Subscription;
  constructor() {
    console.log("Timer contructor");
  }

  ngOnInit() {
    console.log("Timer ngOnInit");
    this.eventsSubscription = this.exitTestObservable.subscribe(() => {
      console.log("Test Finished from Parent");
      this.finishTimer();
    });
    this.remainingSeconds = this.totalTimeInMinutes * 60;
    //this.remainingSeconds = 20;
    this.interval = setInterval(() => {
      this.remainingDisplayTime = this.createDisplayTime(this.remainingSeconds);
      if (this.remainingSeconds === 0) {
        this.finishTimer();
        return;
      }
      this.remainingSeconds--;
    }, 1000);
  }

  ngOnDestroy() {
    console.log("Timer ngOnDestroy");
    this.clearTimer();
    this.eventsSubscription.unsubscribe();
  }
  private finishTimer() {
    this.clearTimer();
    this.timeOver.next();
  }
  private createDisplayTime(totalSeconds: number): string {
    //console.log("createDisplayTime: " + totalSeconds);
    const h = Math.floor(totalSeconds / 3600).toString();
    const m = Math.floor((totalSeconds % 3600) / 60).toString();
    const s = Math.floor((totalSeconds % 3600) % 60).toString();

    return `${h.padStart(2, "0")}:${m.padStart(2, "0")}:${s.padStart(2, "0")}`;
  }

  private clearTimer() {
    clearInterval(this.interval);
  }
}
