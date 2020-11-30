import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from './payment';

@Injectable({
  providedIn: 'root'
})
export class RegiService {

  constructor() { }
  
}
@Injectable()
export class PaymentService {
  constructor(private http: HttpClient) { }


  private baseUrl = 'http://localhost:4433/pay/payment/';
  

  getpay(): Observable<Object> {
    return this.http.get<Object>(this.baseUrl);
  }

  getPayById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + id);
  }
  public getbyEmailId(emailId:string):Observable<any>{
    return this.http.get<any>("http://localhost:4433/pay/payments/"+emailId);
      }

  addpay(pay: Payment): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, pay);
  }
}