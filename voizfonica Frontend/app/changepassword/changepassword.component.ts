import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
//import { RegistrationComponent } from './../registration/registration.component';
//import { RegistrationService } from './../registration.service';

import { UserregisterService } from './../userregister.service';
@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  user = new User();
  firstName = '';
  password = '';
  newpassword = '';
  msg = '';
  constructor(private _service: UserregisterService, private _router: Router) { }

  
  ngOnInit(): void {
    this.firstName = localStorage["firstName"];
  }
  // updatePassword() {
  //   this._service.updateUserFromRemote(this.password, this.newpassword).subscribe(
  //     data => {
  //       console.log(data.password);
  //       console.log(data.newpassword);

  //       console.log("response received");
  //       this.msg = "response received";
  //     },
  //     error => {
  //       console.log("exception occured");
  //       this.msg = "some error";
  //     }

  //   )
    
  // }

  updatepwd() { }
  //   {
  //     this._service.update(this.user.password,this.user.newpassword).subscribe(
  //       data => {
  //         console.log(data.user.password);
  //         console.log(data.user.newpassword);
  //         console.log("successfully uploaded")
  //       },
  //       error=>{
  //         console.log("error occured while updateing")
  //       }
  //     );
  //   
}
