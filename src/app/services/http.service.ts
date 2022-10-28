import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IEmployee} from "../Interfaces/IEmployee";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }


  getEmployeeList() {
    return this.httpClient.get("http://localhost:8080/api/employee")
  }
}
