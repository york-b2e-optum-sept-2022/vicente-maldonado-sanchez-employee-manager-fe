import { Injectable } from '@angular/core';
import {HttpService} from "./http.service";
import {IEmployee} from "../Interfaces/IEmployee";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StateService {

  employeeList!: IEmployee[];
  $employeeList = new Subject<IEmployee[]>()

  isCreating : boolean = false
  $isCreating = new Subject<boolean>();
  newEmployee!:String;

  constructor(private httpService: HttpService) {
  this.httpService.getEmployeeList().subscribe(employeeList => this.$employeeList.next(employeeList))
  }

  deleteEmployeeById(id: number) {
    this.httpService.deleteEmployeeById(id).subscribe((message)=>{this.httpService.getEmployeeList().subscribe(employeeList => this.$employeeList.next(employeeList))})
  }
  addEmployee(employee: IEmployee) {
    console.log(employee);
    // this.newEmployee = JSON.stringify(employee)
    this.httpService.addEmployee(employee).subscribe((message)=>{this.httpService.getEmployeeList().subscribe(employeeList => this.$employeeList.next(employeeList))})
  }

  toggleInput(key:boolean) {
    this.isCreating = key;
    this.$isCreating.next(this.isCreating)
  }

  whenListUpdates(): Observable<IEmployee[]> {
    return this.$employeeList
  }
}
