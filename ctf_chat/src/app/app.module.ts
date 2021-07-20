import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { BackendService } from './backend.service';
import { RouterModule, Routes } from '@angular/router';
import {  FormsModule } from '@angular/forms';
import { ChatComponent } from './containers/chat/chat.component';
import { UserComponent } from './user/user.component';

const routes: Routes =[
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
   
    RegisterComponent,
    LoginComponent,
    ChatComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatSliderModule,
    RouterModule.forRoot(routes)
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
