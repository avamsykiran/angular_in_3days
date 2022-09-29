import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css']
})
export class PipesDemoComponent implements OnInit {

  strData:string;
  numData:number;
  dateData:Date;

  constructor() {
    this.strData="hello ALL! How are you?";
    this.numData=23.456;
    this.dateData=new Date();
  }

  ngOnInit(): void {
  }

}
