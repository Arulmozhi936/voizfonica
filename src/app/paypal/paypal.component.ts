import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.css']
})
export class PaypalComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  addScript: boolean=false;
  paypalLoad: boolean= true;
  finalAmount: number=1;
  paypalconfig ={
    env:'sandbox',
    client: {
         sandbox:'AdPM2qAK3ugywA178YVIfFy6WtBmsHsGtptHgtPyPTKRWnBHF5Oalp91-7_kFsRl8IDamtFUWPvBgLK2',
         production:''
    },
    commit: true,
    payment:(data, actions)=> {
        return actions.payment.create({
          payment:{
        transactions:[
        { amount :{total : this.finalAmount, currency:'INR'}  }
      ]
      }
      });
  },

  onAuthorize: (data,actions)=> {
    return actions.payment.execute().then((payment)=>{
//payment successfull
    })
  }
};
ngAfterViewChecked(): void{
  if(!this.addScript)
  {
    this.addpaypalScript().then(()=>{
//paypal.Button.render(this.paypalconfig,'#paypal-checkout-btn');
this.paypalLoad = false;
    })
  }

}
addpaypalScript()
{
  this.addScript=true;
  return new Promise((resolve, reject)=>{
    let scripttagElement =document.createElement('script');
    scripttagElement.src ='http://www.paypalobjects.com/api/checkout.js';
    scripttagElement.onload = resolve;
    document.body.appendChild(scripttagElement);
  })
}
  
}

