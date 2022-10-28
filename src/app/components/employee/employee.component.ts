import {Component, Input, OnInit} from '@angular/core';
import {IEmployee} from "../../Interfaces/IEmployee";
import {StateService} from "../../services/state.service";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  @Input() employee!:IEmployee

  constructor(private stateService: StateService) { }

  deleteEmployee(id: number| undefined) {
    if (id!==undefined) {
      this.stateService.deleteEmployeeById(id);
    }
  }

  ngOnInit(): void {
  }

}
