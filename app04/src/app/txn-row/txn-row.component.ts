import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Txn } from '../models/txn';

@Component({
  selector: 'app-txn-row',
  templateUrl: './txn-row.component.html',
  styleUrls: ['./txn-row.component.css']
})
export class TxnRowComponent implements OnInit {

  @Input()
  txn!:Txn;

  @Output()
  deleteBtnClicked:EventEmitter<number>;

  constructor() {
    this.deleteBtnClicked = new EventEmitter<number>();
  }

  ngOnInit(): void {
  }

  raiseDeleteBtnClicked(){
    this.deleteBtnClicked.emit(this.txn.id);
  }
}
