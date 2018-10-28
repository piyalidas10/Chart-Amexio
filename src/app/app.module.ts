import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './employee.service';

// Import your library
import { AmexioChartsModule, AmexioWidgetModule } from 'amexio-ng-extensions';
import { BarchartComponent } from './barchart/barchart.component';
import { PiechartComponent } from './piechart/piechart.component';
import { CandlestickchartComponent } from './candlestickchart/candlestickchart.component';
import { DonutchartComponent } from './donutchart/donutchart.component';
import { AreachartComponent } from './areachart/areachart.component';
import { ScatterchartComponent } from './scatterchart/scatterchart.component';
import { CombochartComponent } from './combochart/combochart.component';
import { BubblechartComponent } from './bubblechart/bubblechart.component';


@NgModule({
  declarations: [
    AppComponent,
    BarchartComponent,
    PiechartComponent,
    CandlestickchartComponent,
    DonutchartComponent,
    AreachartComponent,
    ScatterchartComponent,
    CombochartComponent,
    BubblechartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AmexioChartsModule,
    AmexioWidgetModule
    ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
