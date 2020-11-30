import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dongle } from '../dongle';
import { NgserviceService } from '../ngservice.service';

@Component({
  selector: 'app-adddongle',
  templateUrl: './adddongle.component.html',
  styleUrls: ['./adddongle.component.css']
})
export class AdddongleComponent implements OnInit {
dongle=new Dongle();
constructor(private _route:Router, private _service:NgserviceService) { }

  ngOnInit(): void {
  }
  addDongleformsubmit()
  {
    this._service.addproductToRemotedongle(this.dongle).subscribe
    (
      data=>
      {
        console.log("data addded");
        this._route.navigate(["/prepaidlist"]);  
      },
      error=>console.log("error")
    )
}
gotolistdongle(){
  console.log("go back");
  this._route.navigate(["/prepaidlist"]);

}
}
