import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseURL = "http://localhost:8000/api/v1/employees";
  constructor(private httpClient: HttpClient) { }

  getEmployeesList(): Observable<Employee[]>{
    console.log(this.httpClient.get<Employee[]>(`${this.baseURL}`))
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }
}
