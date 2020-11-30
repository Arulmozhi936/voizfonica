import { Component, OnInit } from '@angular/core';
import { UserregisterService } from '../userregister.service';

@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.css']
})
export class RechargeComponent implements OnInit {

  public firstName = '';
  public lastName = '';
  constructor(private _ser1: UserregisterService) {

    
    
    this.firstName = this._ser1.temp;
    this._ser1.temp=this.firstName;
    this.lastName = this._ser1.temp1;
    this.firstName= localStorage["firstName"]
    console.log("product"+this._ser1.temp);
   }
  ngOnInit(): void {
  }

}
