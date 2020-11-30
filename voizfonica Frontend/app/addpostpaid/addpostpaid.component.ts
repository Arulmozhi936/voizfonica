import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgserviceService } from '../ngservice.service';
import { Postpaid } from '../postpaid';

@Component({
  selector: 'app-addpostpaid',
  templateUrl: './addpostpaid.component.html',
  styleUrls: ['./addpostpaid.component.css']
})
export class AddpostpaidComponent implements OnInit {
  postpaid=new Postpaid();
  constructor(private _route:Router, private _service:NgserviceService) { }

  ngOnInit(): void {
  }

//postpaid
addPostpaidformsubmit()
  {
    this._service.addproductToRemotepostpaid(this.postpaid).subscribe
    (
      data=>
      {
        console.log("data addded");
        this._route.navigate(["/prepaidlist"]);  
      },
      error=>console.log("error")
    )
}
gotolistpostpaid(){
  console.log("go back");
  this._route.navigate(["/prepaidlist"]);

}
}
