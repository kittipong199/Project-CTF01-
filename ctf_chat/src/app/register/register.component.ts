import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataUser } from '../data-user';
import { Router } from '@angular/router';
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
  constructor(private backendService: BackendService, private router: Router) { }

  ngOnInit(): void {

  }

  

  save() {
    this.backendService.createUser(this.datUser).subscribe( data => {
      console.log(data);
      alert("ลงข้อมูลสำเร็จแล้ว");
      this.goToLogin();
    },
    error => console.log(error));
    alert("ไม่มีข้อมูล โปรดตรวจสอบข้อมูลอีกครั้ง");
  }

  goToLogin(){
    this.router.navigate(['/login']);
  }

  onSumbit() {
    console.log(this.datUser);
    this.save();
  }

}
