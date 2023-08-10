import { Component, Input } from '@angular/core';
import { LoginDataService } from './services/login-data.service';
import {  ActivatedRoute, Router } from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstProject';
  Name: string = ""
  Students: Array<string> = new Array<string>();

  callFunction() {
    this.Students.push(this.Name)
    this.Name = "";
  }
}


@Component({
  selector: 'app-user',
  templateUrl: './hello.component.html',
  styleUrls: ['./app.component.css'],

})
export class UserComponent {
  currentDate: Date = new Date();
  constructor() {
    console.log('Constructor called');
  }

}

@Component({
  selector: 'app-user-HomeComponent',
  template: `
  <nav>
    <a routerLink="/">Logout</a>
    <a routerLink="./department">Departments</a>
    <a routerLink="./employee">Employees</a>
    <a routerLink="./student">Student</a>
  </nav>
  <router-outlet></router-outlet>
    <!-- <div class="inline-container">
      <h1>Home Component</h1>
    </div> -->
  `,
  styles: [`
    .inline-container {
      border: 1px solid #ddd;
      padding: 20px;
      background-color: #f5f5f5;
      text-align: center;
    }
    h1 {
      color: #333;
    }
    p {
      color: #666;
    }

        /* Apply styles to the entire navigation */
    nav {
      background-color: #333;
      padding: 10px 20px;
    }

    /* Style for the navigation links */
    nav a {
      color: white;
      text-decoration: none;
      margin-right: 20px;
      font-size: 16px;
    }

    /* Style for the active link */
    nav a.router-link-active {
      font-weight: bold;
    }

  `],
  providers:[LoginDataService]

})
export class HomeComponent {

  constructor(private loginService: LoginDataService, private router: Router, private route: ActivatedRoute,) {
    console.log('Constructor called');
    // const log = this.loginService.getUserLog()
    // console.log("USer", log)
    // if(!log){
    //   alert("Unauthoried user")
    //   this.router.navigate(['login']);

    // }

    console.log(this.loginService.getUserLog())

  }


}