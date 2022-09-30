import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountHolder } from '../models/account-holder';
import { AccountHolderService } from '../services/account-holder.service';

@Component({
  selector: 'app-account-holder-form',
  templateUrl: './account-holder-form.component.html',
  styleUrls: ['./account-holder-form.component.css']
})
export class AccountHolderFormComponent implements OnInit {

  account:AccountHolder;
  isEditing:boolean;

  constructor(private ahService:AccountHolderService,private activatedRoute:ActivatedRoute,private router:Router) {
    this.account={id:0,firstName:'',lastName:'',mobile:''};
    this.isEditing=false;
  }

  ngOnInit(): void {
    let id:number = this.activatedRoute.snapshot.params["id"];

    if(id){
      this.isEditing=true;
      this.account=this.ahService.getAccountById(id)??{id:0,firstName:'',lastName:'',mobile:''};
    }
  }

  save(){
    if(this.isEditing){
      this.ahService.updateAccount(this.account);
    }else{
      this.ahService.addAccount(this.account);
    }
    this.router.navigateByUrl("/accounts");
  }  
}
