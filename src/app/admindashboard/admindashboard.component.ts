import { Component, OnInit } from '@angular/core';
import { RegistrationService } from './../registration.service';
@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  public firstName = localStorage["firstName"];
  public lastName = '';
  public email = '';
  public adminId = '';
  public mobileNumber = '';
  constructor(private _ser1: RegistrationService) {
   
    this.firstName = localStorage["firstName"];
    
    this.lastName = localStorage["lastName"];
    
    this.email =localStorage["email"];
    
    this.adminId = localStorage["adminId"];
   
    this.mobileNumber = localStorage["mobileNumber"];
   
    
    console.log(this.firstName);
    console.log("product"+this._ser1.temp);
   }


  ngOnInit(): void {
  }

}
