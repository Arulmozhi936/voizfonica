import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgserviceService } from '../ngservice.service';
import { Postpaid } from '../postpaid';

@Component({
  selector: 'app-viewpostpaid',
  templateUrl: './viewpostpaid.component.html',
  styleUrls: ['./viewpostpaid.component.css']
})
export class ViewpostpaidComponent implements OnInit {
postpaid=new Postpaid();
constructor(private _route:Router, private _service:NgserviceService , private _activatedRoute:ActivatedRoute) { }
ngOnInit() {
  let id=parseInt(this._activatedRoute.snapshot.paramMap.get("id"));
  this._service. fetchProductByIdFromRemotepostpaid(id).subscribe
  (
    data=>{
      console.log("data received");
      this.postpaid=data;
    },
    error=>console.log("exception occured")    
  )
}

gotopostpaidlist(){
console.log("go back");
this._route.navigate(["prepaidlist"]);

}
}
