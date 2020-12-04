import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgserviceService } from '../ngservice.service';
import { Postpaid } from '../postpaid';
import { Prepaid } from '../prepaid';

@Component({
  selector: 'app-addprepaid',
  templateUrl: './addprepaid.component.html',
  styleUrls: ['./addprepaid.component.css']
})
export class AddprepaidComponent implements OnInit {
  prepaid=new Prepaid();
  
  constructor(private _route:Router, private _service:NgserviceService) { }

 
  ngOnInit(): void {
  }
//prepaid
  addPrepaidformsubmit()
  {
    this._service.addproductToRemoteprepaid(this.prepaid).subscribe
    (
      data=>
      {
        console.log("data addded");
        this._route.navigate(["/prepaidlist"]);  
      },
      error=>console.log("error")
    )
}
gotolistprepaid(){
  console.log("go back");
  this._route.navigate(["/prepaidlist"]);

}
}