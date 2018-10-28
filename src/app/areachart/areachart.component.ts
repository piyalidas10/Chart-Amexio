import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-areachart',
  templateUrl: './areachart.component.html',
  styleUrls: ['./areachart.component.css']
})
export class AreachartComponent implements OnInit {

  employeeList: any[] = [];

  constructor(private employee : EmployeeService){}

  ngOnInit() {
    this.getDetails();
  }

  getDetails(){
    this.employee.allEmployees().
    subscribe(
      data => {
        this.employeeList=this.jsonToArray(data.employees);        
        console.log(this.employeeList);
      },
      err => console.log(err),
      () => console.log('complete')
    )
  }


  //JSON to JSON Array conversion
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

}
