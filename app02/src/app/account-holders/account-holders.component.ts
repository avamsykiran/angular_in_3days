import { Component, OnInit } from '@angular/core';
import { AccountHolder } from '../models/account-holder';
import { AccountHolderService } from '../services/account-holder.service';

@Component({
  selector: 'app-account-holders',
  templateUrl: './account-holders.component.html',
  styleUrls: ['./account-holders.component.css']
})
export class AccountHoldersComponent implements OnInit {

  accounts:AccountHolder[];

  constructor(private ahService:AccountHolderService) {
    this.accounts=ahService.getAllAccounts();
  }

  ngOnInit(): void {
  }

  del(id:number){
    if(window.confirm("Are you sure of deleting account#"+id+"?")){
      this.ahService.deleteAccountById(id);
      this.accounts=this.ahService.getAllAccounts();
    }
  }
}
