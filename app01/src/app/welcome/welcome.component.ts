import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  firstName: string;
  lastName: string;

  constructor() {
    this.firstName = "Vamsy Kiran";
    this.lastName = "Aripaka";
  }

  ngOnInit(): void {
  }

}
