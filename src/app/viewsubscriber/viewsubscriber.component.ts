import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgserviceService } from '../ngservice.service';
import { Subscriber } from '../subscriber';

@Component({
  selector: 'app-viewsubscriber',
  templateUrl: './viewsubscriber.component.html',
  styleUrls: ['./viewsubscriber.component.css']
})
export class ViewsubscriberComponent implements OnInit {
subscriber=new Subscriber();
constructor(private _route:Router, private _service:NgserviceService , private _activatedRoute:ActivatedRoute) { }

ngOnInit() {
  let id=parseInt(this._activatedRoute.snapshot.paramMap.get("id"));
  this._service.fetchProductByIdFromRemotesubscriber(id).subscribe
  (
    data=>{
      console.log("data received");
      this.subscriber=data;
    },
    
    error=>console.log("exception occured"),
        
  )
}

gotolist(){
console.log("go back");
this._route.navigate(["/subscriberlist"]);

}
}
