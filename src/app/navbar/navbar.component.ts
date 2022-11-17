import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private appComponent: AppComponent) {}

  showMainPage() {
    this.appComponent.showMainPage = true;
    this.appComponent.showResume = false;
  }
  showResume() {
    this.appComponent.showMainPage = false;
    this.appComponent.showResume = true;
  }

  ngOnInit(): void {}
}
