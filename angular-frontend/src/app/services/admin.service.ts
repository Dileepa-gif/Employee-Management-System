import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private baseURL = "http://localhost:8000/api/v1/admin";
  constructor(private httpClient: HttpClient) {}

  login(emailId: string, password: string) {
    return this.httpClient.post(`${this.baseURL}` + "/authenticate", { emailId, password });
  }

}
