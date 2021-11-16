import { Lop } from './../models/lop';
import { Router } from '@angular/router';
import { StudentService } from '../services/student.service';
import { Component, OnInit } from '@angular/core';
import { LopService } from '../services/lop.service';
import { Student } from '../models/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  danhSachLop: Lop[] = [];

  constructor(private studentService: StudentService, private lopService: LopService, private router: Router) { }

  ngOnInit(): void {
    this.layTatCaLop();
  }

  private layTatCaLop() {
    this.lopService.layTatCaLop().subscribe(
      danhSachLop => {
        this.danhSachLop = danhSachLop;
      },
      err => {
        console.log(err);
      }
    );
  }

  updateStudent(masv: String) {
    this.router.navigate(["update-student", masv]);
  }

  deleteStudent(sinhVien: Student) {
    if(confirm("Bạn có chắc chắn muốn xóa sinh viên " + sinhVien.hoTen + " này không?")) {
      this.studentService.deleteStudent(sinhVien.masv).subscribe(
        () => {
          this.layTatCaLop();
        },
        err => {
          console.log(err);        
        }
      );
    }
  }

  studentDetail(masv: String) {
    this.router.navigate(["student-detail", masv]);
  }

  capNhatTenLopBangMaLop(maLop: String, lop: Lop) {
    this.router.navigate(["update-lop", maLop]);
  }

  xoaLopBangMaLop(lop: Lop) {
    if(confirm("Bạn có chắc chắn muốn xóa lớp " + lop.tenLop + " này không?")) {
      this.lopService.xoaLopBangMaLop(lop.maLop).subscribe(
        () => {
          this.layTatCaLop();
        },
        err => {
          console.log(err);        
        }
      );
    }
  }

}
