import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
 import {HttpClient } from '@angular/common/http'
 import {observable} from 'rxjs';
import { Admins } from './admin';
import { Prepaid } from './prepaid';
import { Postpaid } from './postpaid';
import { Dongle } from './dongle';
import { Subscriber } from './subscriber';
import { Product } from './product';
@Injectable({
  providedIn: 'root'
})
export class NgserviceService {

  temp = '';
  getUserList: any;

  constructor(private http:HttpClient) { }

  fetchProductListFromRemote():Observable<any>
  {
      return this.http.get<any>("http://localhost:4433/users");
  }
  addproductToRemote(product: Product):Observable<any>{
    return this.http.post<any>("http://localhost:4433/registeruser",product);
  }
  fetchProductByIdFromRemote(id:number):Observable<any>{
    return this.http.get<any>("http://localhost:4433/edit/"+id);
  }
  deleteProductByIdFromRemote(id:number):Observable<any>{
    console.log(id);
    return this.http.delete<any>("http://localhost:4433/deletebyid/"+id);
   
  }

  fetchAdminsListFromRemote():Observable<any>{
    return this.http.get<any>("http://localhost:4433/adminlist");
  }
  addadminToRemote(admin : Admins):Observable<Admins[]>{
    return this.http.post<Admins[]>("http://localhost:4433/registeradmin",admin);
 
  }
  fetchAdminsByidFromRemote(id : number):Observable<any>{
     return this.http.get<any>("http://localhost:4433/adminbyid/"+id);
  }
  deleteAdminsByidFromRemote(id : number):Observable<any>{
   return this.http.delete<any>("http://localhost:4433/adminbyid/"+id);
  }
  fetchProductListFromRemoteprepaid():Observable<any>
  {
      return this.http.get<any>("http://localhost:4433/prepaidplans");
  }
  addproductToRemoteprepaid(prepaid:Prepaid):Observable<any>{
    return this.http.post<any>("http://localhost:4433/addplan",prepaid);
  }
  fetchProductByIdFromRemoteprepaid(id:number):Observable<any>{
    return this.http.get<any>("http://localhost:4433/editprepaid/"+id);
  }
  deleteProductByIdFromprepaid(id:number):Observable<any>{
    console.log(id);
    return this.http.delete<any>("http://localhost:4433/deletebyidprepaid/"+id);
   
  }
   //postpaid

   fetchProductListFromRemotepostpaid():Observable<any>
   {
       return this.http.get<any>("http://localhost:4433/prepaidplans2");
   }
   addproductToRemotepostpaid(postpaid:Postpaid):Observable<any>{
     return this.http.post<any>("http://localhost:4433/addplan2",postpaid);
   }
   fetchProductByIdFromRemotepostpaid(id:number):Observable<any>{
     return this.http.get<any>("http://localhost:4433/editprepaid2/"+id);
   }
   deleteProductByIdFrompostpaid(id:number):Observable<any>{
     console.log(id);
     return this.http.delete<any>("http://localhost:4433/deletebyidprepaid2/"+id);
    
   }
   //dongle
   fetchProductListFromRemotedongle():Observable<any>
   {
       return this.http.get<any>("http://localhost:4433/prepaidplans3");
   }
   addproductToRemotedongle(dongle:Dongle):Observable<any>{
     return this.http.post<any>("http://localhost:4433/addplan3",dongle);
   }
   fetchProductByIdFromRemotedongle(id:number):Observable<any>{
     return this.http.get<any>("http://localhost:4433/editprepaid3/"+id);
   }
   deleteProductByIdFromdongle(id:number):Observable<any>{
     console.log(id);
     return this.http.delete<any>("http://localhost:4433/deletebyidprepaid3/"+id);
    
   }
 //subscriber list
 fetchProductListFromRemotesubscriber():Observable<any>
   {
       return this.http.get<any>("http://localhost:4433/subscribers");
   }
   addproductToRemotesubscriber(subscriber:Subscriber):Observable<any>{
     return this.http.post<any>("http://localhost:4433/regsub",subscriber);
   }
   fetchProductByIdFromRemotesubscriber(id:number):Observable<any>{
     return this.http.get<any>("http://localhost:4433/editsub/"+id);
   }
   deleteProductByIdFromsubscriber(id:number):Observable<any>{
     console.log(id);
     return this.http.delete<any>("http://localhost:4433/deletebyidsub/"+id);
 }
 }
 
