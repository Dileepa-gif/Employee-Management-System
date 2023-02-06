
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AdminService } from './admin.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  private readonly TOKEN_NAME = 'token';
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  get token(): any {
    return localStorage.getItem(this.TOKEN_NAME);
  }

  constructor(private adminService: AdminService) {
    this._isLoggedIn$.next(!!this.token);
  }

  login(emailId: string, password: string) {
    return this.adminService.login(emailId, password).pipe(
      tap((response: any) => {
        this._isLoggedIn$.next(true);
        console.log(response)
        if(response && response.token){
          localStorage.setItem(this.TOKEN_NAME, response.token);
        }else{
          alert("Something wrong")
        }
      })
    );
  }
}


