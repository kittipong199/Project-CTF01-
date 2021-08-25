import { Component, OnInit , } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BackendService } from '../backend.service';
import { DataUser } from '../data-user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  islogin: DataUser = new DataUser();

  
  invalidLogin = false;
  loginSuccess = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private backendService: BackendService
    ) {   }

  ngOnInit() {
  //   this.backendService = this.route.snapshot.params['backendService']
    
  //   this.backendService.loginUserByEmail(this.backendService).subscribe( data => {
  //     console.log(data);
      
     
  //   },
  //   error => console.log(error));
  
  // }

  // Login() {
  //   this.backendService.loginUserByEmail(this.backendService, this.islogin).subscribe(data => {
  //     this.islogin = data;
  //   }
  //   , error => console.log(error));
    
   }
}
