import { Component, OnInit, NgModule } from '@angular/core';
import { Admins } from '../admin';
//import { RegistrationService } from './../registration.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { RegistrationService } from './../registration.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  admins = new Admins();
  msg = "";
  name ="";
  constructor(private _service:RegistrationService, private _router : Router) { }

  ngOnInit(): void {
  }
  loginAdmin() {
    this._service.loginAdminFromRemote(this.admins).subscribe(
      data => {
        this._service.temp = data.firstName;
        this._service.temp1 = data.lastName;
        this._service.temp2 = data.email;
        this._service.temp3 = data.adminId;
        this._service.temp4 = data.mobileNumber;
        
        localStorage["firstName"] =  data.firstName;
        localStorage["lastName"] =data.lastName;
        localStorage["email"] = data.email;
        localStorage["adminId"] =data.adminId;
        localStorage["mobileNumber"]=data.mobileNumber;

        console.log("response recived");
        console.log(data.email);
        console.log(data.password);
        console.log(data.firstName);
        this._router.navigate(['/admindashboard'])

     } ,
     error => { 
      
      console.log("exception occureds");
     this.msg="Bad credential, please enter emailID and password";
    }
    )
  }
  gotologin() {
    this._router.navigate(['/admindashboard'])
  }
}
