import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgserviceService } from '../ngservice.service';
import { Prepaid } from '../prepaid';

@Component({
  selector: 'app-viewprepaid',
  templateUrl: './viewprepaid.component.html',
  styleUrls: ['./viewprepaid.component.css']
})
export class ViewprepaidComponent implements OnInit {
  prepaid=new Prepaid();
  constructor(private _route:Router, private _service:NgserviceService , private _activatedRoute:ActivatedRoute) { }
  ngOnInit() {
    let id=parseInt(this._activatedRoute.snapshot.paramMap.get("id"));
    this._service. fetchProductByIdFromRemoteprepaid(id).subscribe
    (
      data=>{
        console.log("data received");
        this.prepaid=data;
      },
      error=>console.log("exception occured")    
    )
  }
  
  gotoprepaidlist(){
  console.log("go back");
  this._route.navigate(["prepaidlist"]);

}
}
