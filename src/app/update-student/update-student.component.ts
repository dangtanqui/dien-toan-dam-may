import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../services/student.service';
import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  sinhVien: Student = new Student();
  
  constructor(private studentService: StudentService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let masv = this.activatedRoute.snapshot.params['id'];
    this.studentService.getStudentByMasv(masv).subscribe(
      sinhVien => {
        this.sinhVien = sinhVien;
      },
      err => {
        console.log(err);
      }
    );
  }

  updateStudent(sinhVien: Student) {
    if(confirm("Bạn có chắc chắn muốn cập nhật sinh viên " + sinhVien.hoTen + " này không?")) {
      this.studentService.updateStudent(sinhVien.masv, sinhVien).subscribe(
        () => {
          this.goToStudentList();
        },
        err => {
          console.log(err);        
        }
      );
    }
  }

  goToStudentList() {
    this.router.navigate(["/students"]);
  }

  onSubmit() {
    this.updateStudent(this.sinhVien);
  }

}
