import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminuserService } from '../adminuser.service';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import { UserregisterService } from '../userregister.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  // user: User[];
  customer:Observable<User>
  user = new User();
  
  public firstName = '';
  public lastName = '';
  public email = '';
  public adharNumber = '';
  public mobileNumber = '';
  public type = '';
  constructor(private _service: AdminuserService,private _ser2: UserregisterService, private _router: Router, private _ser1: RegistrationService) { 
    this.firstName = this._ser1.temp;
    this.firstName = localStorage["firstNameUser"]; 
    this.lastName = localStorage["lastNameUser"]; 
    this.email = localStorage["emailUser"]; 
    this.mobileNumber = localStorage["mobileNumberUser"]; 
    this.adharNumber = localStorage["adharNumberUser"]; 
    this.type = localStorage["typeUser"];
    console.log("product"+this._ser1.temp);
  }

  ngOnInit() {
    // this._service.fetchUserListFromRemote().subscribe(
    //   data => {
    //     this.user = data;
    //     this.firstName = data.firstName;
    //     this.lastName = data.lastName;
    //     this.email = data.email;
    //     this.adharNumber = data.adharNumber;
    //     this.mobileNumber = data.moblieNumber;
       
    //     console.log("response recived", data);
    //     console.log(data.firstName);
    //   },
    //   error =>
    //   console.log("Exception Occured")
    // )
      
  }
  update()
  {
    return this._service.update(this.user).subscribe();
  }
  

//   gotoAddUser(){
//     this._router.navigate(['/adduser']);
//   }
//   gotoedituser(id : number){
// console.log("id"+id);
// this._router.navigate(['/edituser',id]);
//   }
//   deleteUser(id : number){
//     this._service.deleteUserByidFromRemote(id).subscribe(
//       data => {
//         console.log("deleted sucessfully");
//         this._router.onSameUrlNavigation = 'reload';
//         this._router.navigate(['/userlist']);
//       },
//       error => {
//         this._router.navigate(['/userlist']);
//         console.log("exception occured");
        
//       }
//         )

//   }
}