import { Component, DoCheck, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-resume-ptbr',
  templateUrl: './resume-ptbr.component.html',
  styleUrls: ['./resume-ptbr.component.scss'],
})
export class ResumePtbrComponent implements OnInit, DoCheck {
  myModel2 = true;

  constructor(private component: AppComponent) {}
  ngDoCheck(): void {
    setTimeout(() => {
      if (this.myModel2 == false) {
        this.component.showResume = true;
      }
    }, 0);
  }

  ngOnInit(): void {}
}
