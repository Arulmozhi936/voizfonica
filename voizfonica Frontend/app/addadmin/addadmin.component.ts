import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import{NgForm} from '@angular/forms';
import { NgserviceService } from '../ngservice.service';
import { Admins } from '../admin';

@Component({
  selector: 'app-addadmin',
  templateUrl: './addadmin.component.html',
  styleUrls: ['./addadmin.component.css']
})
export class AddadminComponent implements OnInit {
admins = new Admins();
  constructor(private _service :NgserviceService, private _router : Router) { }

  ngOnInit() {
  }

  addadminFormsubmit(){
    this._service.addadminToRemote(this.admins).subscribe(
      data =>
      {
 
      console.log("data added successfull");
      this._router.navigate(['/userlist']);
      },
      
 
    error => console.log("error")
    )
    
  }
 }
