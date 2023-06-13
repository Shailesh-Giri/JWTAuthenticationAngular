import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {

  constructor(private authService : AuthService, private router : Router){

  }

  onSubmit(data :any)
  {
    console.log(data)
    this.authService.signIn(data)
    console.log("Submitted")
  }
}
