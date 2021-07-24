/*import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {  FormsModule } from '@angular/forms';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './containers/chat/chat.component';


const routes: Routes =[
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'root'
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
    
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CommonModule,
   
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})*/
export class AppRoutingModule { }
