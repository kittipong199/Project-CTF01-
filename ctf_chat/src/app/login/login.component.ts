import { Component, OnInit , NgZone} from '@angular/core';
import { Router,  } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private ngZone: NgZone
  ) { 

  }

  ngOnInit(): void {
  }
  onRegister(): any {
    
    this.ngZone.run(() => this.router.navigateByUrl('./register'));
  } 
}
