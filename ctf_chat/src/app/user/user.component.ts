import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

 
 // @Output() userNameEvent = new EventEmitter<string>();
  userName = '';

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  setUserName(): void {
   // this.setUserName.emit(this.userName)
  }

}
