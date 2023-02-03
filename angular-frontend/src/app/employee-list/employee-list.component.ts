import { Component } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  employees: Employee[] | undefined;

  constructor() { }
  ngOnInit(): void {
    this.employees = [
      {
        "id": 1,
        "firstName": "Dileepa",
        "lastName": "Jayaweera",
        "emailId": "dileepa@gmail.com"
      },
      {
        "id": 2,
        "firstName": "Malaka",
        "lastName": "Jayaweera",
        "emailId": "malaka@gmail.com"
      }
    ];
  }
}
