import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';

import { Component ,OnInit, ViewChild} from '@angular/core';


import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {  BackendService } from './backend.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  constructor (private backendService: BackendService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
