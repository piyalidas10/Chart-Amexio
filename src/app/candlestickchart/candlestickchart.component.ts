import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candlestickchart',
  templateUrl: './candlestickchart.component.html',
  styleUrls: ['./candlestickchart.component.css']
})
export class CandlestickchartComponent implements OnInit {

  chartData: any;
  constructor() {
    this.chartData=[
      ['Mon',20,28,38,45],
      ['Tue',31,38,55,66],
      ['Wed',50,55,77,80],
      ['Fri',77,77,66,50],
      ['Sat',68,66,22,15],
      ['Sun',20,30,40,35]
    ]
   }

  ngOnInit() {
  }

}
