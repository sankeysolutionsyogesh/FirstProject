import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Register the service at the root level
})
export class EmployeeService {
  private employees: Employee[] = [
    { id: 1, name: 'John', role: 'Developer', isActive: true },
    { id: 2, name: 'Alice', role: 'Designer', isActive: false },
    // Add more employee data as needed
  ];

  getEmployees(): Employee[] {
    return this.employees;
  }
}

export interface Employee {
  id: number;
  name: string;
  role: string;
  isActive :boolean
}
