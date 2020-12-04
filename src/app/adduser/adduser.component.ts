import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminuserService } from '../adminuser.service';
import{NgForm} from '@angular/forms';
import { User } from '../user';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  user = new User();

  constructor(private _service :AdminuserService, private _router : Router) { }

  ngOnInit() {
  }
 adduserFormsubmit(){
   this._service.adduserToRemote(this.user).subscribe(
     data =>
     {

     console.log("data added successfull");
     this._router.navigate(['userlist']);
     },
     

   error => console.log("error")
   )
 }
}
