import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dongle } from '../dongle';
import { NgserviceService } from '../ngservice.service';

@Component({
  selector: 'app-viewdongle',
  templateUrl: './viewdongle.component.html',
  styleUrls: ['./viewdongle.component.css']
})
export class ViewdongleComponent implements OnInit {
dongle=new Dongle();
constructor(private _route:Router, private _service:NgserviceService , private _activatedRoute:ActivatedRoute) { }
ngOnInit() {
  let id=parseInt(this._activatedRoute.snapshot.paramMap.get("id"));
  this._service. fetchProductByIdFromRemotedongle(id).subscribe
  (
    data=>{
      console.log("data received");
      this.dongle=data;
    },
    error=>console.log("exception occured")    
  )
}

gotodonglelist(){
console.log("go back");
this._route.navigate(["prepaidlist"]);

}
}
