import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgserviceService } from '../ngservice.service';
import { Subscriber } from '../subscriber';

@Component({
  selector: 'app-editsubscriber',
  templateUrl: './editsubscriber.component.html',
  styleUrls: ['./editsubscriber.component.css']
})
export class EditsubscriberComponent implements OnInit {
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
    error=>console.log("exception occured")    
  )
}
updateSubscriberformsubmit()
{
  
  this._service.addproductToRemotesubscriber(this.subscriber).subscribe
  (
    data=>
    {
      console.log("data addded");
      this._route.navigate(["/subscriberlist"]);  
    },
    error=>console.log("error")
  )
}
gotolistsubscriber(){
console.log("go back");
this._route.navigate(["/subscriberlist"]);

}
}

