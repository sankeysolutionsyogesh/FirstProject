import { Component, OnInit } from '@angular/core';
import { EmployeeService, Employee } from '../services/employee.service';

@Component({
  selector: 'app-second-app',
  templateUrl: './second-app.component.html',
  styleUrls: ['./second-app.component.css'],
  providers: [EmployeeService],
})
export class SecondAppComponent{

  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {
    this.employees = employeeService.getEmployees();
  }
}
