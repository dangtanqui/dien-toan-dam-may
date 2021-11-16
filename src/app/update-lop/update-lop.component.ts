import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Lop } from '../models/lop';
import { LopService } from '../services/lop.service';

@Component({
  selector: 'app-update-lop',
  templateUrl: './update-lop.component.html',
  styleUrls: ['./update-lop.component.css']
})
export class UpdateLopComponent implements OnInit {
  
  lop: Lop = new Lop();
  
  constructor(private lopService: LopService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let malop = this.activatedRoute.snapshot.params['id'];
    this.lopService.layLopBangMaLop(malop).subscribe(
      lop => {
        this.lop = lop;
      },
      err => {
        console.log(err);
      }
    );
  }

  updateStudent(lop: Lop) {    
    if(confirm("Bạn có chắc chắn muốn cập nhật lớp " + lop.tenLop + " này không?")) {
      this.lopService.capNhatTenLopBangMaLop(lop.maLop, lop).subscribe(
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
    this.updateStudent(this.lop);
  }

}
