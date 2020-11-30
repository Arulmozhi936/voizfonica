import { Component, OnInit } from '@angular/core';
import { UserregisterService } from '../userregister.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  public firstName = '';
  
  constructor(private _ser1: UserregisterService) {
    this.firstName = localStorage["firstName"];
    this.firstName = this._ser1.temp;
    console.log("product"+this._ser1.temp);
   }

   ngOnInit(): void {
    this.firstName = localStorage["firstName"];
  }

}
