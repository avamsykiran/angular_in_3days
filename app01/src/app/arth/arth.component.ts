import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arth',
  templateUrl: './arth.component.html',
  styleUrls: ['./arth.component.css']
})
export class ArthComponent implements OnInit {

  n1:number;
  n2:number;

  constructor() { 
    this.n1=0;
    this.n2=0;
  }

  ngOnInit(): void {
  }

}
