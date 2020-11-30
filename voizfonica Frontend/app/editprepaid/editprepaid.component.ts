import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgserviceService } from '../ngservice.service';
import { Prepaid } from '../prepaid';

@Component({
  selector: 'app-editprepaid',
  templateUrl: './editprepaid.component.html',
  styleUrls: ['./editprepaid.component.css']
})
export class EditprepaidComponent implements OnInit {
  prepaid=new Prepaid();
  constructor(private _route:Router, private _service:NgserviceService , private _activatedRoute:ActivatedRoute) { }

  
  ngOnInit() {
    let id=parseInt(this._activatedRoute.snapshot.paramMap.get("id"));
    this._service.fetchProductByIdFromRemoteprepaid(id).subscribe
    (
      data=>{
        console.log("data received");
        this.prepaid=data;
      },
      error=>console.log("exception occured")    
    )
  }
  updatePrepaidformsubmit()
  {
    
    this._service.addproductToRemoteprepaid(this.prepaid).subscribe
    (
      data=>
      {
        console.log("data addded");
        this._route.navigate(["prepaidlist"]);  
      },
      error=>console.log("error")
    )
}
gotolistprepaid(){
  console.log("go back");
  this._route.navigate(["prepaidlist"]);

}
}

  