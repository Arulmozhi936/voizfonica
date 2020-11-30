import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
//import { error } from 'console';
//import { RegistrationService } from '../registration.service';
import { User } from '../user';
import { UserregisterService } from './../userregister.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  msg = '';
  name ="";

  constructor(private _service : UserregisterService, private _router : Router) { }

  ngOnInit() {
  }

  loginUser(){
    
     this._service.loginUserFromRemote(this.user).subscribe(
       data => {
        // this.name = data.firstName;
         localStorage["firstNameUser"] = data.firstName;
         this._service.temp = data.firstName;
         localStorage["lastNameUser"] = data.lastName;
         this._service.temp1 = data.lastName;
         localStorage["emailUser"] = data.email;
         this._service.temp2 = data.mobileNumber;
         localStorage["mobileNumberUser"] = data.mobileNumber;
         localStorage["typeUser"] = data.type;
         localStorage["adharNumberUser"] = data.adharNumber;
         this._service.type = data.type;
         //this._service.temp3 = data.email;

         console.log("response recived");
         console.log(data.email);
         console.log(data.password);
         console.log(data.firstName);
         console.log(data.type);
         this._router.navigate(['/loginsuccess'])

      } ,
      error => { 
       
       console.log("exception occureds");
      this.msg="Bad credential, please enter emailID and password";
     }
      
    )
  }
  gotoregistration(){
    this._router.navigate(['/registration'])

  }


}
