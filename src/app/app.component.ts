import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'notificationPage';
  showMainPage = false;
  showResume = false;
  showPortfolio = true;
}
