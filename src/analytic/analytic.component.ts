import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'analytic',
  templateUrl: './analytic.component.html',
  styleUrls: ['./analytic.component.css']
})
export class AnalyticComponent implements OnInit {
  public city = "Boston";
  constructor() { }

  ngOnInit() {
  }

  GetHash(hash) {
      return window.location.href.indexOf(hash) > -1;
  }

}
