import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { RegistrationService } from '../registration.service';
import { User } from '../user';
import { UserregisterService } from './../userregister.service';

@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserregistrationComponent implements OnInit {
  user = new User();
  msg = '';
  invalid = false;

  constructor(private _service : UserregisterService, private _router : Router) { }

  ngOnInit() {
  }
  gotologin() {
    this._router.navigate(['/login'])
    
  }
  registerUser(){
    this._service.registerUserFromRemote(this.user).subscribe(
      data =>{
        console.log("response recieved");
        this.msg="Registration Sucessful";
      },
      error =>{
        console.log("exception occured");
        this.msg=error.error;
      }
      
    )
    this._router.navigate(['/loginsuccess'])
  }

}