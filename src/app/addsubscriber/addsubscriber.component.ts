import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgserviceService } from '../ngservice.service';
import { Subscriber } from '../subscriber';

@Component({
  selector: 'app-addsubscriber',
  templateUrl: './addsubscriber.component.html',
  styleUrls: ['./addsubscriber.component.css']
})
export class AddsubscriberComponent implements OnInit {
subscriber= new Subscriber();
constructor(private _route:Router, private _service:NgserviceService) { }
ngOnInit(): void {
}
//prepaid
addSubscriberformsubmit()
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