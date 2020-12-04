import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Payment } from '../payment';
import { PaymentService } from '../regi.service';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  mes="";
  use=new User;
  emp =new User();
  payments: Observable<any>;
  payment: Payment = new Payment();
  firstName = '';
  lastName = '';
  constructor(private _service:RegistrationService,private _router : Router,
    private paymentService: PaymentService, private _activatedRoute: ActivatedRoute) { 
      this.firstName = localStorage["firstNameUser"];
      this.lastName = localStorage["lastNameUser"];
    }

  ngOnInit(): void {

    let id= this._activatedRoute.snapshot.paramMap.get('emailId');
    this.mes=id;
    console.log("payment"+this.mes);
    // this.getUser();

    this.payments = this.paymentService.getpay();

  }
  getUser(){
   console.log("inside getUser"+this.mes);
   this._service.getByIdFromRemote(this.mes).subscribe(
    data=>this.use=data
   )
   console.log("user"+this.use.email);
   }


}
