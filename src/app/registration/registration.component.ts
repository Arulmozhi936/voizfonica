import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { Admins } from '../admin';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
admins = new Admins();
msg='';
  constructor(private _service : RegistrationService, private _router : Router) { }

  ngOnInit() {
  }
  registerAdmin(){
    this._service.registerAdminFromRemote(this.admins).subscribe(
      data => {
       localStorage["firstName"]=data.firstName;
        this._service.temp = data.firstName;
        localStorage["lastName"]=data.lastName;
        this._service.temp1 = data.lastName;
        localStorage["email"]=data.email;
        this._service.temp2 = data.email;
        localStorage["adminId"]=data.adminId;
        this._service.temp3 = data.adminId;
        localStorage["mobileNumber"]=data.mobileNumber;
        this._service.temp4 = data.mobileNumber;
        
        localStorage["type"] = data.type;
        this._service.type = data.type;
        //  this._service.temp1 = data.lastName;
        //  this._service.temp2 = data.mobileNumber;
        console.log(data.firstName);
        console.log("response recieved");
        this.msg = "Registration Sucessful";
        this._router.navigate(['/admindashboard'])
      },
      error =>{
        console.log("exception occured");
        this.msg=error.error;
      }

    )
  }
  gotoadmindashboard() {
    this._router.navigate(['/admindashboard'])
  }

}
