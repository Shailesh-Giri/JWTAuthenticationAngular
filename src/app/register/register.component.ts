import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private authService : AuthService, private router : Router)
  {

  }

  register = new FormGroup({
    userName : new FormControl(''),
    email : new FormControl(''),
    phoneNumber : new FormControl(''),
    password : new FormControl(''),
    confirmPassword : new FormControl('')
  });

  onSubmit(data : any)
  {
    console.log(data);
    this.authService.register(data).subscribe((response)=>{
      console.log(response);
      this.router.navigate(["login"])

    });
  }


}
