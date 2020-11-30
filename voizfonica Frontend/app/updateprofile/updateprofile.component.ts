import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent implements OnInit {
  mes:string;
  use=new User;
  user=new User;

 id:number;
 id1:number;
// id2:string;
 msg="";
  constructor(private _service:RegistrationService,private _router : Router,private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  upUser(id2:string,pas:string){
      
    this._service.updateUserPasswordFromRemote(id2,pas).subscribe(
      data=>{console.log("response received");
    this.msg="response received";
    },
      error=>{console.log("exception occured");
      this.msg="some error occured";},
    )
    this._router.navigate(['/login'])
    }
}
