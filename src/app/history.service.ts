import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private http:HttpClient) { }

  fetchHistoryListFromRemote():Observable<any>
  {
      return this.http.get<any>("http://localhost:4433/rechargehistory");
  }
  handelError(error: Response){

  }

}
