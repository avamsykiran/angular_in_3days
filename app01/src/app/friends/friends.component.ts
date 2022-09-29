import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  friendNames:string[];
  friendName:string;

  constructor() {
    this.friendNames=[];
    this.friendName="";
  }

  ngOnInit(): void {
  }

  add(){
    this.friendNames.push(this.friendName);
    this.friendName="";
  }
}
