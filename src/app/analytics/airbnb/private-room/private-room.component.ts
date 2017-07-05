import { Component, OnInit, Input } from '@angular/core';

import { BaseChartDirective } from 'ng2-charts/ng2-charts';
import { ChartsModule, Color } from 'ng2-charts/ng2-charts';
import * as $ from 'jquery';
@Component({
  selector: 'app-private-room',
  templateUrl: './private-room.component.html',
  styleUrls: ['./private-room.component.css']
})
export class PrivateRoomComponent implements OnInit {

  public privateRoomNumber = 0;
  public totalRoomNumber = 0;
  public percentage = 0.0;
  @Input() roomsByNeighborhood;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.roomsByNeighborhood != null)
    {
      this.privateRoomNumber =  this.roomsByNeighborhood.filter(d => d.roomType == 'Private room').length;
      this.totalRoomNumber = this.roomsByNeighborhood.length;
      var restNumber = this.totalRoomNumber - this.privateRoomNumber;

      this.doughnutChartData = [this.privateRoomNumber, restNumber];            
      this.percentage = this.totalRoomNumber == 0 ? 0 : Math.round(this.privateRoomNumber / this.totalRoomNumber * 100);
      var CountTo = this.percentage;
      
      $('.private-room').each(function () {
          $(this).prop('Counter',0).animate({
              Counter: ""+CountTo
          }, {
              duration: 500,
              easing: 'swing',
              step: function (now) {                                        
                  $(this).text(Math.round(now) + "%");
              }
          });
      });
      
    }
  }

  // Doughnut Initialization 
    public doughnutChartLabels:string[] = ['Private Room', 'Total'];
    public doughnutChartData:any[] = [350, 450];

    public doughnutChartType:string = 'doughnut';

    public options:any = {
        cutoutPercentage: 85,
        legend: {
            display: false
        },
        tooltips: {
            enabled: false
        },
        maintainAspectRatio: false,
        responsive: true,
    };

    colorsOverride: Array<Color> = [{
        backgroundColor: [
            "#2C81C0",
            "#f7f7f7"
        ],
        hoverBackgroundColor: [
            "#2C81C0",
            "#f7f7f7"
        ],
    }];

}
