import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountHolder } from '../models/account-holder';
import { Txn } from '../models/txn';
import { AccountHolderService } from '../services/account-holder.service';
import { TxnsService } from '../services/txns.service';

@Component({
  selector: 'app-txns',
  templateUrl: './txns.component.html',
  styleUrls: ['./txns.component.css']
})
export class TxnsComponent implements OnInit {

  txns!:Txn[];
  errMsg!:string;
  account!:AccountHolder;

  constructor(private txnsService:TxnsService,private ahService:AccountHolderService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    let ahId = this.activatedRoute.snapshot.params["ahId"];

    this.ahService.getAccountById(ahId).subscribe({
      next: data => {this.account=data; this.loadTxns(); },
      error: err => {console.error(err); this.errMsg="Unable to read the account!"}
    });
  }

  loadTxns(){
    this.txnsService.getAllTxnByAccunt(this.account.id).subscribe({
      next: data => this.txns=data,
      error: err => {console.error(err); this.errMsg="Unable to load txns!"}
    });
  }

  deleteTxn(id:number){
    if(window.confirm("Are you sure to delete the transaction?")){
      this.txnsService.deleteTxnById(id).subscribe({
        next: () => this.loadTxns(),
        error: err => {console.error(err); this.errMsg="Unable to delete!"}
      });
    }
  }
}

