import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
 
export class UserregisterService {
  fetchUserListFromRemote() {
    throw new Error('Method not implemented.');
  }
  temp = '';
  temp1 = '';
  temp2 = '';
  temp3 = '';
  type = '';
  
  
  constructor(private _http :HttpClient) { }
  
  public loginUserFromRemote(user :User):Observable<any>{
     return this._http.post<any>("http://localhost:4433/login",user)
  }
 
 
  public registerUserFromRemote(user :User):Observable<any>{
    return this._http.post<any>("http://localhost:4433/registeruser" ,user);
  }
  public registerUserFromRemote1(user :User):Observable<any>{
    return this._http.post<any>("http://localhost:4433/forpassword" ,user);
  }
  public getOtp(otp : string):Observable<any>{
    return this._http.get("http://localhost:4433/otp/"+otp);
  }
  public forgotpassword( user:User):Observable<any>{
    return this._http.put("http://localhost:4433/forgotpassword",user);
  }
  fetchUserByidFromRemote(id : number):Observable<any>{
    return this._http.get<any>("http://localhost:4433/userbyid/"+id);
  }
  public getemail( email: string):Observable<any>{
    return this._http.get("http://localhost:4433/email/"+email);
  }
  handelError(error: Response){

  }

}
