import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NgserviceService } from '../ngservice.service';
import { Admins } from '../admin';
import { RegistrationService } from '../registration.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-adminlist',
  templateUrl: './adminlist.component.html',
  styleUrls: ['./adminlist.component.css']
})
export class AdminlistComponent implements OnInit {
  // admins: Observable<Admins[]>;
  admins: Admins[];
  public firstName = '';
  
  constructor(private _service: NgserviceService, private _router: Router, private _ser1: RegistrationService) { 
    this.firstName=this._ser1.temp;
    console.log("product"+this._ser1.temp);
  }

  ngOnInit(): void {
                 this._service.fetchAdminsListFromRemote().subscribe(
                   data => {
                     this.admins = data;
                     console.log("response received")
                   },
error=>console.log("exception occured")

)
  }

  gotoAddAdmin(){
    this._router.navigate(['/addadmin']);
  }
  gotoeditadmin(id : number){
console.log("id"+id);
this._router.navigate(['/editadmin',id]);
  }
  deleteAdmin(id : number){
    this._service.deleteAdminsByidFromRemote(id).subscribe(
      data => {
        console.debug("deleted sucessfully");
        this._router.navigate(['/adminlist']);
      },
      error => console.log("exception occured")
        )

  }
}
 
  