import { Component, OnInit } from '@angular/core';
import { UserregisterService } from '../userregister.service';
import { HistoryService } from './../history.service';
import { History } from '../history';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.css']
})
export class LoginsuccessComponent implements OnInit {
  colrtime="text-success"
  msg="Your Current Plan Expires In ";
  planId;
  activeid:number;
  demo:any;
  pln=[]
  hist;
  activename:string;
  activevalidity:number;
  activeamount:number;
  activepack:number;
  activedate: Date;
  service = '';
  ress
  history: History[];
  public firstName = '';
  public lastName = '';
  public type = '';


  plan = '';
  rechargedate = '';
  price = '';
  id = '';

  mailUser = '';

  constructor(private _ser1: UserregisterService,private router: Router,private _service : HistoryService) {

    
    
    this.firstName = this._ser1.temp;
    this._ser1.temp=this.firstName;
    this.lastName = this._ser1.temp1;
    this.firstName = localStorage["firstNameUser"];
    this.lastName = localStorage["lastNameUser"];
    this.mailUser=localStorage["emailUser"];
    this.type = this._ser1.type;
    this.type = localStorage["typeUser"];
    console.log("product"+this._ser1.temp);
   }

   ngOnInit() {
    this._service.fetchHistoryListFromRemote().subscribe(
      data => {
        this.history = data;
        this.plan = data.plan;
        this.rechargedate = data.rechargeDate;
        this.price = data.price;
        this.id = data.id;
      console.log("response recived",data)},
      error =>
      console.log("Exception Occured")
    )
      
   }
  trans() {
    console.log(this.mailUser);
    this.router.navigate(['/transaction/'+this.mailUser]);
  }


  
}
