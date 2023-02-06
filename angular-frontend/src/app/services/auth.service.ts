
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AdminService } from './admin.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  constructor(private adminService: AdminService) {
    const token = localStorage.getItem('token');
    this._isLoggedIn$.next(!!token);
  }

  login(emailId: string, password: string) {
    return this.adminService.login(emailId, password).pipe(
      tap((response: any) => {
        this._isLoggedIn$.next(true);
        console.log(response)
        if(response && response.token){
          localStorage.setItem('token', response.token);
        }else{
          alert("Something wrong")
        }
      })
    );
  }
}


