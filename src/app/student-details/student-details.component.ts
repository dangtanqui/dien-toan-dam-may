import { StudentService } from '../services/student.service';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../models/student';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  sinhVien: Student = new Student();
  
  constructor(private studentService: StudentService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params["id"];
    this.studentService.getStudentByMasv(id).subscribe(
      sinhVien => {
        this.sinhVien = sinhVien;
      },
      err => {
        console.log(err);        
      }
    );
  }

}
