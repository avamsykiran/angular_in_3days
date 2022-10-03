import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  brandTitle:string;

  constructor() {
    this.brandTitle="IncomeStatement";
  }

  ngOnInit(): void {
  }

}
