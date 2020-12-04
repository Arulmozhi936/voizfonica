import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import { UserregisterService } from '../userregister.service';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  user = new User();
  msg = '';
  constructor(private _service: UserregisterService, private _router: Router) { }

  
  ngOnInit() {
    
  }
  registerUser(){
    this._service.registerUserFromRemote1(this.user).subscribe(
      data =>{
        console.log("response recieved");
        this.msg="Registration Sucessful";
      },
      error =>{
        console.log("exception occured");
        this.msg=error.error;
      }
      
    )
    this._router.navigate(['/home'])
  }
  
}
