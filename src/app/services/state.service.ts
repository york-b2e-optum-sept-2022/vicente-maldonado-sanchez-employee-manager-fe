import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {IEmployee} from "../Interfaces/IEmployee";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StateService {

  employeeList!: IEmployee[];

  constructor(private httpService: HttpService) {

  }

  // whenEmployeeListUpdates(): Observable<IEmployee[]> {
    // return this.httpService.getEmployeeList()

  // }

  getEmployeeList() {
    this.httpService.getEmployeeList()
  }
}
