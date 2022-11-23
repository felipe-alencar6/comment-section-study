import { Component, DoCheck, OnInit, ChangeDetectorRef } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit, DoCheck {
  myModel!: boolean;

  constructor(
    private component: AppComponent,
    private cdRef: ChangeDetectorRef
  ) {}

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
