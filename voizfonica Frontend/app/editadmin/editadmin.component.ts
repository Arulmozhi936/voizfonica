import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admins } from '../admin';
import { NgserviceService } from '../ngservice.service';
import{NgForm} from '@angular/forms';
@Component({
  selector: 'app-editadmin',
  templateUrl: './editadmin.component.html',
  styleUrls: ['./editadmin.component.css']
})
export class EditadminComponent implements OnInit {
  admins = new Admins();

  constructor(private _service :NgserviceService, private _router : Router, private _activatedroute : ActivatedRoute) { }

  ngOnInit() {
    let id = parseInt(this._activatedroute.snapshot.paramMap.get('id'));
    this._service.fetchAdminsByidFromRemote(id).subscribe(
      data =>
      {
   
        console.log("data added successfull");
        this.admins =data;
      },
      error => console.log("error")

    )
  }

  updateadminFormsubmit(){
      this._service.addadminToRemote(this.admins).subscribe(
        data =>
        {
   
        console.log("data added successfull");
        this._router.navigate(['adminlist']);
        },
        
   
      error => console.log("error")
      )
    }
  }