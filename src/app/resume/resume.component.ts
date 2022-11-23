import { Component, DoCheck, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { ResumePtbrComponent } from '../resume-ptbr/resume-ptbr.component';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit, DoCheck {
  myModel!: boolean;

  constructor(private component: AppComponent) {}

  ngDoCheck(): void {
    setTimeout(() => {
      this.component.showResumePt = this.myModel;

      if (this.component.showResumePt == true) {
        this.component.showResume = false;
      }
    }, 0);
  }

  ngOnInit(): void {}
}
