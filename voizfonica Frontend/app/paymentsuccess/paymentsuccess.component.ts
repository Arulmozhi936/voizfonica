import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentService } from '../regi.service';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-paymentsuccess',
  templateUrl: './paymentsuccess.component.html',
  styleUrls: ['./paymentsuccess.component.css']
})
export class PaymentsuccessComponent implements OnInit {
  mes="";
  constructor(private _service:RegistrationService,
    private paymentService: PaymentService,private _activatedRoute:ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    
    let id= this._activatedRoute.snapshot.paramMap.get('emailId');
    this.mes=id;
  }
  // gototransaction(){
  //   this.router.navigate(['/transaction',this.mes])
  // }
}
