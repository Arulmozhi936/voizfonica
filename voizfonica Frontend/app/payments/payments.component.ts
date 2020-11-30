import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Payment } from '../payment';
import { Prepaid } from '../prepaid';
import { PaymentService } from '../regi.service';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import { UserregisterService } from '../userregister.service';


@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  payment = new Payment;
  user = new User();
  prepaid=new Prepaid;
  planid:number;

  pid:string;
  mes="";
  msg="";
  submitted = false;
  public firstName = '';
  public lastName = '';
  public type = '';

  constructor(private _service:RegistrationService,private _ser1: UserregisterService,
    private paymentService: PaymentService,private _activatedRoute:ActivatedRoute,
    private router: Router) { 
      this.firstName = this._ser1.temp;
      this._ser1.temp=this.firstName;
      this.lastName = this._ser1.temp1;
      this.firstName = localStorage["firstNameUser"];
      this.lastName = localStorage["lastNameUser"];
      this.type = this._ser1.type;
      this.type = localStorage["typeUser"];
      console.log("product"+this._ser1.temp);
    }

  ngOnInit() {
    let id= this._activatedRoute.snapshot.paramMap.get('emailId');
    this.mes=localStorage["emailUser"];
    let id1= parseInt(this._activatedRoute.snapshot.paramMap.get('id'));
    this.planid=id1;
    console.log(this.mes);
    this.getUser();
   
  }
getUser(){
  this.paymentService.getbyEmailId(this.mes).subscribe(
    data=> this.user=data
  )
}
  


  onPay(m:string) {
    this.submitted = true;
    this.paymentService.addpay(this.payment)
    .subscribe(data => console.log(data),
     error => console.log(error));
    this.payment = new Payment();
    this.router.navigate(['/paymentsuccess']);
  }

  // gototransaction(){
  //      this.router.navigate(['/transaction',this.mes])
  //    }
}
