import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lop } from '../models/lop';
import { LopService } from '../services/lop.service';

@Component({
  selector: 'app-create-lop',
  templateUrl: './create-lop.component.html',
  styleUrls: ['./create-lop.component.css']
})
export class CreateLopComponent implements OnInit {  
  lop: Lop = new Lop();

  constructor(private lopService: LopService, private router: Router) { }

  ngOnInit(): void {
  }

  saveLop() {
    this.lopService.themLop(this.lop).subscribe(
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
    this.saveLop();
  }


}
