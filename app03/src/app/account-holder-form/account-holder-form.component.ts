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
  errMsg!:string

  constructor(private ahService:AccountHolderService,private activatedRoute:ActivatedRoute,private router:Router) {
    this.account={id:0,firstName:'',lastName:'',mobile:''};
    this.isEditing=false;
  }

  ngOnInit(): void {
    let id:number = this.activatedRoute.snapshot.params["id"];

    if(id){
      this.isEditing=true;
      this.ahService.getAccountById(id).subscribe({
        next: data => this.account=data,
        error: err => {console.error(err);this.errMsg="Unable to load data!";}
      });
    }
  }

  save(){
    let ob = null;
    if(this.isEditing){
      ob = this.ahService.updateAccount(this.account);
    }else{
      ob = this.ahService.addAccount(this.account);
    }

    ob.subscribe({
      next: data =>this.router.navigateByUrl("/accounts"),
      error: err => {console.error(err);this.errMsg="Unable to save data!";}
    })
    
  }  
}
