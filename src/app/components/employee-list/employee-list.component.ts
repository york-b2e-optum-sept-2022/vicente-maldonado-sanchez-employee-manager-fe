import { Component, OnInit } from '@angular/core';
import {IEmployee} from "../../Interfaces/IEmployee";
import {StateService} from "../../services/state.service";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  isCreating: boolean = false;

employeeList!:IEmployee[];
  constructor(private stateService: StateService) {
    this.stateService.whenListUpdates().subscribe(employeeList => this.employeeList = [...employeeList])
    this.stateService.$isCreating.subscribe(value =>this.isCreating=value)
  }

  toggleInput(key :boolean) {
    this.stateService.toggleInput(key)

  }

  ngOnInit(): void {
  }

}
