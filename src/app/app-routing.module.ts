import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComputerDept, DepartmentListComponent, MechanicalDept } from './department-list/department-list.component';
import { SecondAppComponent } from './second-app/second-app.component';
import { HomeComponent, UserComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StudentsComponent } from './students/students.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    canActivate: [authGuard],
    component: HomeComponent, children: [
      {
        path: 'department', component: DepartmentListComponent, children: [
          { path: 'compDept/:dept', component: ComputerDept },
          { path: 'mechDept/:dept', component: MechanicalDept },
        ]
      },
      { path: 'employee', component: SecondAppComponent },
      { path: 'student', component: StudentsComponent },
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: "**", pathMatch: 'full', component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DepartmentListComponent, SecondAppComponent, HomeComponent, LoginComponent]

