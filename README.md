# Datagrid

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

    npm install -g @angular/cli
    ng new charts
    ng serve
    npm install amexio-ng-extensions --save

At first create a angular project and install the library amexio-ng-extensions. Import AmexioChartsModule, AmexioWidgetModule from this library in app.module.ts.

app.module.ts

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

    app.component.html

    <div class="container-fluid">

      <h1 align="center">Chart using Amexio Plugin</h1>
      <app-barchart></app-barchart>
      <app-piechart></app-piechart>
      <app-candlestickchart></app-candlestickchart>
      <app-donutchart></app-donutchart>
      <app-areachart></app-areachart>
      <app-scatterchart></app-scatterchart>
      <app-bubblechart></app-bubblechart>
      <app-combochart></app-combochart>

    </div>
    
Create a employee service and fetch the json data. Import the service in chart component.

employee.service.ts

    import { Injectable } from '@angular/core';
    import { HttpClient } from '@angular/common/http';
    import { Observable} from 'rxjs';

    @Injectable({
      providedIn: 'root'
    })
    export class EmployeeService {

      constructor(private http:HttpClient) { }

      url :string = "https://raw.githubusercontent.com/piyalidas10/Chart-Amexio/master/src/app/employee.json";

      allEmployees(): Observable<any>{
        return this.http.get(this.url);
      }


    }

employee.json

    {  
        "employees":[
          {  
              "preferredFullName":"Tom Hanks",
              "salary":14000000
           },
           {  
              "preferredFullName":"Ketan Gote",
              "salary":22000000
           },
           {  
              "preferredFullName":"Santosh Gawade",
              "salary":22000000
           },
           {  
              "preferredFullName":"Dattaram Gawas",
              "salary":1000000
           },
           {  
              "preferredFullName":"Pratik Kelwalkar",
              "salary":1500000
           }
        ]    
     }
     
  Convert JSON to JSON Array using the following function. You have to convert JSON to JSOn array to implement the chart.

    jsonToArray(val){
        var arr = [];
        var arrColumnLength = 0;
        if (val.length > 0){ 
            //get field/column name from JSON
            var arrColumn = [];
            for(var key in val[0]){
              arrColumn.push(key);
            } 
            arrColumnLength = Object.keys(val[0]).length;
           Object.keys(val).forEach(function(key) { 
            var arrVal = [];         
             for(var i=0;i<arrColumnLength;i++){
              arrVal.push(val[key][arrColumn[i]]);
             }              
             arr.push(arrVal);                
           }); 
           arr.unshift(arrColumn); 
        }
        return arr;
      }
