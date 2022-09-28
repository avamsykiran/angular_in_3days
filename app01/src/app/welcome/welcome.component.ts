import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  firstName: string;
  lastName: string;

  logos:string[];
  logoIndex:number;
  logoWidth:number;

  applyBorder:boolean;
  applyCenter:boolean;

  constructor() {
    this.firstName = "Vamsy Kiran";
    this.lastName = "Aripaka";
    this.logoIndex=0;
    this.logoWidth=250;
    this.logos=[
      "assets/imgs/n1.png",
      "assets/imgs/n2.png",
      "assets/imgs/n3.png",
      "assets/imgs/n4.png"
    ];
    this.applyBorder=true;
    this.applyCenter=true;
  }

  ngOnInit(): void {
  }

  toggle(){
    this.logoIndex++;
    if(this.logoIndex===this.logos.length){
      this.logoIndex=0;
    }
  }

}
