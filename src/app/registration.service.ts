import { Injectable } from '@angular/core';
import {User} from './user';
import { Observable } from 'rxjs';
import {HttpClient} from'@angular/common/http';
import { Admins } from './admin';



@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  temp = '';
  getUsersList: any;
  type='';
  temp1= '';
  temp2= '';
  temp3 = '';
  temp4 = '';
  temp5 = '';
  constructor(private _http :HttpClient) { }

  public registerAdminFromRemote(admin :Admins):Observable<any>{
    return this._http.post<any>("http://localhost:4433/registeradmin" ,admin);
  }
  handelError(error: Response){

  }

  public loginAdminFromRemote(admin: Admins): Observable<any>{
    return this._http.post<any>("http://localhost:4433/adminlogin", admin);
  }
  handleError(error: Response) {
    
  }
  public updateUserFromRemote(password: string, newpassword: string): Observable<any>{
    return this._http.put<any>("http://localhost:4433/updateprofile/" + password, newpassword);
  }

  public updateUserPasswordFromRemote(id4:string,pass:string):Observable<any>{
    return this._http.put<any>("http://localhost:4433/updatepassword/"+id4, pass)
      }
      public getByEmailId(emailId:string):Observable<any>{
        return this._http.get<any>("http://localhost:4433/pay/payments/"+emailId)
          }
          // public getpaymentbyId(emailId:string):Observable<any>{
          //   return this._http.get<any>("http://localhost:4433/pay/payments/"+emailId);
          //     }
          public fetchUserByIdFromRemote(email:string):Observable<any>{
            return this._http.get<any>("http://localhost:4433/userbyid/"+email)
              } 
              // public getByIdFromRemote(em:String):Observable<any>{
              //   return this._http.get<any>("http://localhost:4433/users/"+em)
              //     }
              public getByIdFromRemote(em:String):Observable<any>{
                return this._http.get<any>("http://localhost:4433/users/"+em)
                  }
}