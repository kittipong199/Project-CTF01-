import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataUser } from '../data-user';
// นำเข้า function เชื่อมต่อ api by BackendService
import { BackendService } from '../backend.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // ตัวแปรสำหรับเก็บข้อมูล จาก API
  datUser: DataUser = new DataUser();

  isAdded = false;

    //ใน constructor กำหนด ให้ apiService เป็นตัวแปรแบบ private และ เรียกใช้งาน backendService
  constructor(private backendService: BackendService) { }

  ngOnInit(): void {

  }

  newDataUser(): void{
    this.isAdded = false;
    this.datUser = new DataUser();
    this.datUser.f_Name = "art";
    this.datUser.l_Name = "hahaart";
    this.save();
  }

  save() {
    this.backendService.createUser(this.datUser)
    .subscribe(
      data => {
        console.log(data);
        this.isAdded = true;
      },
      error => console.error(error));
      console.log("test");
      this.datUser = new DataUser();
   
  }

  onSumbit() {
    this.save();
  }

}
