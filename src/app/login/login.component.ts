import { Component } from '@angular/core';
import { LoginDataService } from '../services/login-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginDataService]
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginError: boolean = false;

  constructor(private loginService: LoginDataService, private router: Router, private route: ActivatedRoute) {
  console.log("token - ", this.loginService.getToken())
  }

  ngOnInit():void{
    if(this.loginService.isLoggedIn()){
      this.router.navigate(['home'])
    }
  } 

  login(): void {
    const data = {
      username: this.username,
      password: this.password
    }


    this.loginService.LoginApi(data)
      .then((response) => {
        console.log(response)
        this.router.navigate(['home']);
        this.loginError = false;
      })
      .catch((error) => {
        console.log('Error:', error);
        this.loginError = true;

      });
  }
}
