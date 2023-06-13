import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient, private router : Router) { }

  signIn(data : any)
  {
    return this.http.post('https://localhost:7094/api/Auth/SignIn', data)
    .subscribe((response : any)=>{
      console.log(response.token)
      localStorage.setItem('token',response.token);
      this.router.navigate([''])

    });
  }

  register(data : any)
  {
    return this.http.post('https://localhost:7094/api/Auth/Register', data, {responseType : 'text'});
  }
}
