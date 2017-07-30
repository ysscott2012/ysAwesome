import { Component, OnInit, Input, Output, ViewChild, Directive, EventEmitter } from '@angular/core';

import { BaseChartDirective } from 'ng2-charts/ng2-charts';
import { ChartsModule, Color } from 'ng2-charts/ng2-charts';

import * as _ from 'underscore';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  @ViewChild(BaseChartDirective) private baseChart;  
  @Input() rooms;
  @Output() filteredElement:EventEmitter<string> = new EventEmitter();
  Neighborhood = {};
  public xAxis:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public value:number[] = [65, 59, 80, 81, 56, 55, 40];
  public barChartData:any[] = [
    {data: this.value, label: 'Number'}
  ]; 
  // chart config.
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    maintainAspectRatio: false,
    responsive: true,
    barPercentage: 1.0,
    scales: {
        xAxes: [{
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                },
                position: 'bottom',
                ticks: {
                  fontSize: 10,
                  fontColor: '#000000',
                  fontFamily: 'Arial, sans-serif',
                  maxRotation: 90,
                  minRotation:90,
                  display: true
                },
                barPercentage: 1.0,
                categoryPercentage: 0.9, 
            }],
        yAxes: [{
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                },
            }],
        labelString: 'probability'
    }
  };
  public colorsOverride: Array<Color> = [
      { backgroundColor: _.range(32).map(function () { return '#2C81C0' })}
  ];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = false;
 
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    // Iterate data
    this.Neighborhood = {};
    this.rooms = this.rooms.sort(function(a,b){
      if (a.neighborhood > b.neighborhood) return 1;
      else if(a.neighborhood < b.neighborhood) return -1;
      else return 0;
    })

    if (this.rooms != null)
    {
      this.rooms.forEach(element => {
        if(this.Neighborhood[element.neighborhood] == null)
        {
          this.Neighborhood[element.neighborhood] = {};
          this.Neighborhood[element.neighborhood]['Count'] = 1;
          if (this.Neighborhood[element.neighborhood][element.roomType] == null)
              this.Neighborhood[element.neighborhood][element.roomType] = 1;
        }
        else
        {
          if (this.Neighborhood[element.neighborhood][element.roomType] == null)
              this.Neighborhood[element.neighborhood][element.roomType] = 1;
          else this.Neighborhood[element.neighborhood][element.roomType]++;
          this.Neighborhood[element.neighborhood]['Count']++;
        }
      });


      // Get data formate
      this.xAxis = [];
      this.value = [];
      for (var key in this.Neighborhood)
      {
        this.xAxis.push(key);
        this.value.push(this.Neighborhood[key]["Count"]);
      }
      this.barChartData = [
        {data: this.value, label: 'Number'}
      ]; 

      this.colorsOverride = [
        { backgroundColor: _.range(this.xAxis.length).map(function () { return '#2C81C0' })}
      ];
      this.forceChartRefresh();
      console.log(this.Neighborhood);
    }
    
  }
 
  // refresh the charts
  forceChartRefresh() {
      setTimeout(() => {
          this.baseChart.refresh();
      }, 10);
  }

  // events
  public chartClicked(e:any):void {
    var selectedElement = e.active[0]._model.label;
    this.filteredElement.emit(selectedElement);
    
  }


  
}
