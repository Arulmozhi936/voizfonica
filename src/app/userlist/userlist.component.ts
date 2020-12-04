import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminuserService } from '../adminuser.service';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
//import { AdduserComponent } from '../adduser.component';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  user : User[];
 // user1 = new User();
  public firstName = '';
  constructor(private _service: AdminuserService, private _router: Router, private _ser1: RegistrationService) { 
    this.firstName=this._ser1.temp;
    console.log("product"+this._ser1.temp);
  }

  ngOnInit() {
    this._service.fetchUserListFromRemote().subscribe(
      data => {
        this.user = data;
      console.log("response recived",data)},
      error =>
      console.log("Exception Occured")
    )
      
  }
  gotoAddUser(){
    this._router.navigate(['/adduser']);
  }
  gotoedituser(id : number){
console.log("id"+id);
this._router.navigate(['/edituser',id]);
  }
  deleteUser(id : number){
    this._service.deleteUserByidFromRemote(id).subscribe(
      data => {
        console.log("deleted sucessfully");
        this._router.onSameUrlNavigation = 'reload';
        this._router.navigate(['/userlist']);
      },
      error => {
        this._router.navigate(['/userlist']);
        console.log("exception occured");
        
      }
        )

  }
  remainder(email : string) {
    this._service.remainderUserFromRemote(email).subscribe(
      data =>{
        console.log("response recieved");
        //this.msg="Registration Sucessful";
      },
      error =>{
        console.log("exception occured");
       // this.msg=error.error;
      }
      
    )
  }
  billing(email, firstName, lastName, mobileNumber, type) {
    localStorage["firstNameBill"] = firstName;
    localStorage["lastNameBill"] = lastName;
    localStorage["emailBill"] = email;
    localStorage["mobileNumberBill"] = mobileNumber;
    localStorage["typeBill"] = type;

    
  }
}

