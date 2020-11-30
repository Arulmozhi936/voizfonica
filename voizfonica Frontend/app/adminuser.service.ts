import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
  
export class AdminuserService {

  
  constructor(private _http :HttpClient) { }
  remainderUserFromRemote(email: string): Observable<any>
  {
    return this._http.post<any>("http://localhost:4433/remainder/"+email,email);
  }
  fetchUserListFromRemote():Observable<any>{
     return this._http.get<any>("http://localhost:4433/userlist");
  }
 adduserToRemote(user : User):Observable<User[]>{
   return this._http.post<User[]>("http://localhost:4433/registeruser",user);

 }
 update(user:User):Observable<any>
 {
   return this._http.post<any>("http://localhost:4433/updateprofile",user);
 }
 fetchUserByidFromRemote(id : number):Observable<any>{
    return this._http.get<any>("http://localhost:4433/userbyid/"+id);
 }
 deleteUserByidFromRemote(id : number):Observable<any>{
  return this._http.delete<any>("http://localhost:4433/userbyid/"+id);
}
}
