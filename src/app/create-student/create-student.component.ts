import { LopService } from './../services/lop.service';
import { Student } from '../models/student';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../services/student.service';
import { Lop } from '../models/lop';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {  
  sinhVien: Student = new Student();
  danhSachLop: Lop[] = [];
  maLop: String = "";

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

  saveStudent() {
    this.studentService.addStudent(this.maLop, this.sinhVien).subscribe(
      () => {
        this.goToStudentList();
      },
      err => {
        console.log(err);
      }
    ); 
  }

  goToStudentList() {
    this.router.navigate(["/students"]);
  }

  onSubmit() {
    this.saveStudent();
  }

}
