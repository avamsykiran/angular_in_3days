import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Txn } from '../models/txn';

@Component({
  selector: 'app-txn-form-row',
  templateUrl: './txn-form-row.component.html',
  styleUrls: ['./txn-form-row.component.css']
})
export class TxnFormRowComponent implements OnInit,OnChanges {

  @Input()
  txn!:Txn;

  ledger:FormControl;
  amount:FormControl;
  txnDate:FormControl;

  txnForm:FormGroup;
  txnType:string;

  @Output()
  formSubmitted:EventEmitter<Txn>;

  @Output()
  formResetted:EventEmitter<void>;

  constructor() { 
    this.ledger=new FormControl('',[Validators.required]);
    this.amount=new FormControl(0,[Validators.required,Validators.min(1)]);
    this.txnDate=new FormControl(new Date().toISOString().substring(0,10),[Validators.required]);

    this.txnType="CREDIT";
    this.formSubmitted=new EventEmitter<Txn>();
    this.formResetted=new EventEmitter<void>();

    this.txnForm = new FormGroup({
      ledger:this.ledger,
      amount:this.amount,
      txnDate:this.txnDate
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.txnForm.reset({
      ledger:this.txn.ledger,
      amount:this.txn.amount,
      txnDate:new Date(this.txn.txnDate).toISOString().substring(0,10)
    });    
    this.txnType=this.txn.type;
  }

  ngOnInit(): void {
  }

  changeType(type:string){
    this.txnType=type;
  }

  raiseFormSubmited(){
    let formData = this.txnForm.value;
    
    if(!this.txn){
      this.txn = {
        id:0,
        ledger:formData.ledger,
        amount:formData.amount,
        ahId:0,
        txnDate:new Date(formData.txnDate),
        type:this.txnType
      };
    }else{
      this.txn.ledger=formData.ledger;
      this.txn.amount=formData.amount;
      this.txn.txnDate=new Date(formData.txnDate);
      this.txn.type=this.txnType;
    }

    this.formSubmitted.emit(this.txn);
    this.txnForm.reset();
  }

  raiseFormResetted(){
    this.txnForm.reset();
    if(this.txn){
      this.formResetted.emit();
    }
  }
}
