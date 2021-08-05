import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { CommonModule } from '@angular/common';


import { AppComponent } from './app.component';
import { BackendService } from './backend.service';
import {  FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './containers/chat/chat.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';


/*const routes: Routes =[
  {
    path: '',
    component: HomeComponent
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
*/
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ChatComponent,
    HomeComponent,
    UserComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatSliderModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule
    
    
  ],
  
  bootstrap: [AppComponent],
 // exports:[RouterModule],
  providers: [BackendService]
})
export class AppModule { }
