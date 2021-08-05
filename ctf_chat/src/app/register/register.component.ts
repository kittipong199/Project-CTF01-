import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataUser } from '../data-user';
import { BackendService } from '../backend.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  datUser: DataUser = new DataUser();

  isAdded = false;

  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
  }

  newDataUser(): void{
    this.isAdded = false;
    this.datUser = new DataUser();
  }

  save() {
    this.backendService.createUser(this.datUser)
    .subscribe(
      data => {
        console.log(data);
        this.isAdded = true;
      },
      error => console.error(error));
      this.datUser = new DataUser();
   
  }

  onSumbit() {
    this.save();
  }

}
