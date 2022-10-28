import { Component, OnInit } from '@angular/core';
import {IEmployee} from "../../Interfaces/IEmployee";
import {StateService} from "../../services/state.service";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeeList!: IEmployee[];

  constructor(private stateService: StateService) {

  }

  ngOnInit(): void {
  }

}
