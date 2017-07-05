import { Component, OnInit, Input } from '@angular/core';

import * as $ from 'jquery';
@Component({
  selector: 'app-average-price',
  templateUrl: './average-price.component.html',
  styleUrls: ['./average-price.component.css']
})
export class AveragePriceComponent implements OnInit {

  public totalPrivate = 1;
  public privateAverage = 0.0;
  public totalShared = 1;
  public sharedAverage = 0.0;
  public totalEntire = 1;
  public entireAverage = 0.0;
  @Input()roomsByNeighborhood;
  constructor() { }

  ngOnInit() {
  }

  Init() {
    this.totalPrivate = 1;
    this.privateAverage = 0.0;
    this.totalShared = 1;
    this.sharedAverage = 0.0;
    this.totalEntire = 1;
    this.entireAverage = 0.0;
  }

  ngOnChanges() 
  {
    if (this.roomsByNeighborhood != null)
    {
      this.Init();
      var privatePrice = 0;
      var entirePrice = 0;
      var sharedPrice = 0;

      this.roomsByNeighborhood.forEach(element => {
        if (element.roomType == 'Private room')
        {
          this.totalPrivate++;
          privatePrice = privatePrice + Number(element.price);
        }
        else if (element.roomType == 'Entire home/apt')
        {
          this.totalEntire++;
          entirePrice = entirePrice + Number(element.price);
        }
        else if (element.roomType == 'Shared room')
        {
          this.totalShared++;
          sharedPrice = sharedPrice + Number(element.price);
        }
      });
      
      this.privateAverage = privatePrice / this.totalPrivate;
      this.entireAverage = entirePrice / this.totalEntire;
      this.sharedAverage = sharedPrice / this.totalShared;

      var CountTo1 = this.privateAverage;
      $('.average1').each(function () {
          $(this).prop('Counter',0).animate({
              Counter: ""+CountTo1
          }, {
              duration: 500,
              easing: 'swing',
              step: function (now) {                                        
                  $(this).text("Private Room: $" + Math.round(now));
              }
          });
      });

      var CountTo2 = this.entireAverage;
      $('.average2').each(function () {
          $(this).prop('Counter',0).animate({
              Counter: ""+CountTo2
          }, {
              duration: 500,
              easing: 'swing',
              step: function (now) {                                        
                  $(this).text("Entire House: $" + Math.round(now));
              }
          });
      });

      var CountTo3 = this.sharedAverage;
      $('.average3').each(function () {
          $(this).prop('Counter',0).animate({
              Counter: ""+CountTo3
          }, {
              duration: 500,
              easing: 'swing',
              step: function (now) {                                        
                  $(this).text("Shared Room: $" + Math.round(now));
              }
          });
      });
    }


  }
  
}
