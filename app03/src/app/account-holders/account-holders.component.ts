import { Component, OnInit } from '@angular/core';
import { AccountHolder } from '../models/account-holder';
import { AccountHolderService } from '../services/account-holder.service';

@Component({
  selector: 'app-account-holders',
  templateUrl: './account-holders.component.html',
  styleUrls: ['./account-holders.component.css']
})
export class AccountHoldersComponent implements OnInit {

  accounts!:AccountHolder[];
  errMsg!:string;

  constructor(private ahService:AccountHolderService) { 
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    let ob = this.ahService.getAllAccounts();
    ob.subscribe({
      next: data => this.accounts=data,
      error: err => { console.error(err); this.errMsg="Unable to load! Please retry later!"; }
    });
  }

  del(id:number){
    if(window.confirm("Are you sure of deleting account#"+id+"?")){
      let ob = this.ahService.deleteAccountById(id);
      ob.subscribe({
        next: () => this.loadData(),
        error: err => { console.error(err); this.errMsg="Unable to delete! Please retry later!"; }
      })
    }
  }
}
