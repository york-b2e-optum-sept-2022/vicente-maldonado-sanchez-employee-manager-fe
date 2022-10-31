import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IEmployee} from "../Interfaces/IEmployee";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }


  getEmployeeList(): Observable<IEmployee[]> {
    return this.httpClient.get<IEmployee[]>("http://localhost:8080/api/employee")
  }

  deleteEmployeeById(id: number) {
    return this.httpClient.delete(`http://localhost:8080/api/employee/${id}`)
  }

  addEmployee(employee: IEmployee) {
    console.log(employee)
    return this.httpClient.post("http://localhost:8080/api/employee",employee)
  }

}
