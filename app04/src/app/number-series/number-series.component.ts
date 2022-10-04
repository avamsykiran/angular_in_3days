import { Component, OnInit } from '@angular/core';
import { NumberSeriesService } from '../services/number-series.service';

@Component({
  selector: 'app-number-series',
  templateUrl: './number-series.component.html',
  styleUrls: ['./number-series.component.css']
})
export class NumberSeriesComponent implements OnInit {

  lb:number;
  ub:number;

  errMsg!:string|null;
  results!:number[];
  isJobInProgress!:boolean;

  constructor(private nss:NumberSeriesService) {
    this.lb=0;
    this.ub=0;
  }

  ngOnInit(): void {
  }

  start(){
    this.results=[];
    this.errMsg=null;
    this.isJobInProgress=true;

    let ob = this.nss.generateSeries(this.lb,this.ub);

    ob.subscribe({
      next: data => this.results.push(data),
      error: err => { this.errMsg=err; this.isJobInProgress=false;},
      complete: () => this.isJobInProgress=false
    })
  }
}
