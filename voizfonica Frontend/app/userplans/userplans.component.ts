import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dongle } from '../dongle';
import { NgserviceService } from '../ngservice.service';
import { Postpaid } from '../postpaid';
import { Prepaid } from '../prepaid';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-userplans',
  templateUrl: './userplans.component.html',
  styleUrls: ['./userplans.component.css']
})
export class UserplansComponent implements OnInit {
  _prepaidlist :Prepaid[];//to show prepaid class
  _postpaidlist :Postpaid[];//to show postpaid class 
  _donglelist: Dongle[];//to show dongle list
  
  mailUser = '';
  constructor(private _service: NgserviceService, private _route: Router,private _ser1:RegistrationService) {
 
    this.mailUser = localStorage["emailUser"];
  }

  ngOnInit(): void {
    this._service.fetchProductListFromRemoteprepaid().subscribe(
      data => {this. _prepaidlist =data,
      
      console.log("response recieved",data);
      },
      error => console.log("response not recieved")

    ),
    this._service.fetchProductListFromRemotepostpaid().subscribe(
      data => {this. _postpaidlist =data,
      
      console.log("response recieved",data);
      },
      error => console.log("response not recieved")

    ),
    this._service.fetchProductListFromRemotedongle().subscribe(
      data => {this. _donglelist =data,
      
      console.log("response recieved",data);
      },
      error => console.log("response not recieved")

    );

    
  }
//prepaid
  goToAddPrepaid() {
    this._route.navigate(['/addprepaid']);
  }
  goToEditPrepaid(id: number) {
    console.log("id" + id);
    this._route.navigate(["/editprepaid", id]);
  }
  goToViewPrepaid(id: number) {
    console.log("id" + id);
    this._route.navigate(["/viewprepaid", id]);
  }

  deletePrepaid(id: number) {
   
    this._service.deleteProductByIdFromprepaid(id).subscribe(
      data => {
        console.log("deleted");
        this._route.navigate(['/prepaidlist']);
      },
      error => 
      
      {
        this._route.navigate(['prepaidlist']),
        console.log("exception")
      
      });
  }

//postapid
goToAddPostpaid() {
  this._route.navigate(['/addpostpaid']);
}
goToEditPostpaid(id: number) {
  console.log("id" + id);
  this._route.navigate(["/editpostpaid", id]);
}
goToViewPostpaid(id: number) {
  console.log("id" + id);
  this._route.navigate(["/viewpostpaid", id]);
}

deletePostpaid(id: number) {
 
  this._service.deleteProductByIdFrompostpaid(id).subscribe(
    data => {
      console.log("deleted");
      this._route.navigate(['/prepaidlist']);
    },
    error => 
    
    {
      this._route.navigate(['prepaidlist']),
      console.log("exception")
    
    });

}
//dongle
goToAddDongle() {
  this._route.navigate(['/adddongle']);
}
goToEditDongle(id: number) {
  console.log("id" + id);
  this._route.navigate(["/editdongle", id]);
}
goToViewDongle(id: number) {
  console.log("id" + id);
  this._route.navigate(["/viewdongle", id]);
}

deleteDongle(val) {
  console.log(val);
  localStorage["planId"] = val;
  this._route.navigate(["/payments"]);
  }
  deleteDongle1(val) {
    console.log(val);
    localStorage["planId"] = val;
    this._route.navigate(["/payment"]);
    }
  trans() {
  console.log(this.mailUser);
  this._route.navigate(['/transaction/'+this.mailUser]);
}
}
