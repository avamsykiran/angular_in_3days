import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountHolder } from '../models/account-holder';

@Injectable({
  providedIn: 'root'
})
export class AccountHolderService {

  apiUrl:string;

  constructor(private httpClient:HttpClient) {
   this.apiUrl="http://localhost:9999/accounts";
  }

  addAccount(ah:AccountHolder):Observable<AccountHolder>{
    return this.httpClient.post<AccountHolder>(this.apiUrl,ah);
  }

  updateAccount(ah:AccountHolder):Observable<AccountHolder>{
    return this.httpClient.put<AccountHolder>(this.apiUrl + "/" + ah.id,ah);
  }

  getAllAccounts():Observable<AccountHolder[]>{
    return this.httpClient.get<AccountHolder[]>(this.apiUrl);
  }

  getAccountById(id:number):Observable<AccountHolder>{
    return this.httpClient.get<AccountHolder>(this.apiUrl +"/" + id);
  }

  deleteAccountById(id:number):Observable<void>{
    return this.httpClient.delete<void>(this.apiUrl +"/" + id);
  }
}
