import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { LoginComponent } from './login/login.component';
import { IsAuthenticatedGuard } from './is-authenticated.guard';

const routes: Routes = [
  { path: 'employees', component: EmployeeListComponent, canActivate: [IsAuthenticatedGuard]},
  { path: 'create-employee', component: CreateEmployeeComponent, canActivate: [IsAuthenticatedGuard] },
  { path: 'update-employee/:id', component: UpdateEmployeeComponent,canActivate: [IsAuthenticatedGuard] },
  { path: 'employee-details/:id', component: EmployeeDetailsComponent,canActivate: [IsAuthenticatedGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
