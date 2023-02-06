import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form = new FormGroup({
    emailId: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    this.authService
      .login(this.form.get('emailId')?.value || "", this.form.get('password')?.value || "")
      .subscribe((response) => {
        if(response.token){
          this.router.navigate(['/employees']);
        }
      });
  }
}
