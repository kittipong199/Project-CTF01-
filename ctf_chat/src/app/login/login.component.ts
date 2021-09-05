import { Component, OnInit , } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BackendService } from '../backend.service';
import { AuthService } from './auth.service';
import { DataUser } from '../data-user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  dataUser: DataUser = new DataUser();


  
  invalidLogin = false;
  loginSuccess = false;

  constructor(
   
    private router: Router,
    private backendService: BackendService
    ) {   }

  ngOnInit() {
    
   }
  // Verstion 1 from พี่กิต 
   login() {
    this.backendService.loginUserByEmail(this.dataUser).subscribe( data => {
      
          console.log(data);
          this.router.navigate(['/chat']);
          alert("loginpass");
        }, 
        error => {
            console.log(error);
            alert('ไม่สามารถ login ได้ ตรวจ E-mail and Password');
        });
  }
  
}
