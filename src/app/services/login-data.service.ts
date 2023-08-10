import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginDataService {
  private data: any[] = [{
    username: 'Yogesh',
    password: '123'
  }, {
    username: 'admin',
    password: 'admin'
  }];

  private LoggedUser: boolean = false

  constructor(private http: HttpClient, private router: Router) { }


  LoginApi(data:any) {


    let url = "http://127.0.0.1:8000/Hostel_Student/students_login/";

    return new Promise((resolve, reject) => {
      this.http.post(url, JSON.stringify(data)).subscribe(
        (response) => {
          this.setToken('abcdefghijklmnopqrstuvwxyz');
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });

  }


  getUserLog(): boolean {
    return this.LoggedUser
  }


  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

}
