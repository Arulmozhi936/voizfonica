import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminuserService } from '../adminuser.service';
import { User } from '../user';
import{NgForm} from '@angular/forms';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  user = new User();

  constructor(private _service :AdminuserService, private _router : Router, private _activatedroute : ActivatedRoute) { }
 

  ngOnInit(){
    let id = parseInt(this._activatedroute.snapshot.paramMap.get('id'));
    this._service.fetchUserByidFromRemote(id).subscribe(
      data =>
      {
   
        console.log("data added successfull");
        this.user =data;
      },
      error => console.log("error")

    )
  }

    updateuserFormsubmit(){
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