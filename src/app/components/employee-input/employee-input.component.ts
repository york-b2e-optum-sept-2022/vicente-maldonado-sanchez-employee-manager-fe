import { Component, OnInit } from '@angular/core';
import {StateService} from "../../services/state.service";
import {IEmployee} from "../../Interfaces/IEmployee";

@Component({
  selector: 'app-employee-input',
  templateUrl: './employee-input.component.html',
  styleUrls: ['./employee-input.component.css']
})
export class EmployeeInputComponent implements OnInit {

  employee!: IEmployee;

  constructor(private stateService: StateService) { }

  addEmployee(employee: IEmployee) {
    this.employee = employee
  this.stateService.addEmployee(this.employee);
    this.toggleInput(false)
  }

  toggleInput(key: boolean){
    this.stateService.toggleInput(key)
  }

  ngOnInit(): void {
  }

}
