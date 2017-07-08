import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analytics-side-menu',
  templateUrl: './analytics-side-menu.component.html',
  styleUrls: ['./analytics-side-menu.component.css']
})
export class AnalyticsSideMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  GetHash(hash) {
      return window.location.href.indexOf(hash) > -1;
  }
}
