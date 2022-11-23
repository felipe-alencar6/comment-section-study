import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'notificationPage';
  showMainPage = true;
  showResume = false;
  showPortfolio = false;
  showResumePt = false;
}
