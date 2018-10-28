import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }
  
  url :string = "https://raw.githubusercontent.com/piyalidas10/Chart-Amexio/master/package.json";

  allEmployees(): Observable<any>{
    return this.http.get(this.url);
  }


}

