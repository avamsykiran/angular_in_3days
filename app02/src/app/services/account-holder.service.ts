import { Injectable } from '@angular/core';
import { AccountHolder } from '../models/account-holder';

@Injectable({
  providedIn: 'root'
})
export class AccountHolderService {

  accounts:AccountHolder[];

  constructor() {
    this.accounts=[
      {id:1,firstName:"Vamsy Kiran",lastName:"Aripaka",mobile:"9052224753"},
      {id:2,firstName:"Sagar",lastName:"Aripaka",mobile:"9052224744"}
    ];
  }

  addAccount(ah:AccountHolder):void{
    this.accounts.push(ah);
  }

  updateAccount(ah:AccountHolder):void{
    let index = this.accounts.findIndex(a => a.id===ah.id);

    if(index>-1){
      this.accounts[index]=ah;
    }
  }

  getAllAccounts():AccountHolder[]{
    return [...this.accounts];
  }

  getAccountById(id:number):AccountHolder|undefined{
    return this.accounts.find(a => a.id==id);
  }

  deleteAccountById(id:number):void{
    let index = this.accounts.findIndex(a => a.id===id);
    
    if(index>-1){
      this.accounts.splice(index,1);
    }
  }
}
