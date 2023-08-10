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

  constructor(private loginService: LoginDataService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit():void{
    if(this.loginService.isLoggedIn()){
      this.router.navigate(['home'])
    }
  } 

  login(): void {
    const data = {
      username: 'Yogesh',
      password: '123'
    }


    this.loginService.LoginApi(data)
      .then((response) => {
        console.log(response)
        this.router.navigate(['home']);
      })
      .catch((error) => {
        console.error('Error:', error);

      });
  }
}
