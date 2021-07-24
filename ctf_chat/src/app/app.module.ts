import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { BackendService } from './backend.service';
import {  FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './containers/chat/chat.component';
import { HomeComponent } from './home/home.component';


const routes: Routes =[
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path:'chat',
    component: ChatComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ChatComponent,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatSliderModule,
    CommonModule,
    RouterModule.forRoot(routes)
    
  ],
  
  bootstrap: [AppComponent],
 // exports:[RouterModule],
  providers: [BackendService]
})
export class AppModule { }
