import { CreateLopComponent } from './create-lop/create-lop.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateLopComponent } from './update-lop/update-lop.component';

const routes: Routes = [
  { path: "students", component: StudentListComponent },
  { path: "create-student", component: CreateStudentComponent },
  { path: "update-student/:id", component: UpdateStudentComponent },
  { path: "student-detail/:id", component: StudentDetailsComponent },
  { path: "create-lop", component: CreateLopComponent },
  { path: "update-lop/:id", component: UpdateLopComponent },
  { path: "", redirectTo: "students", pathMatch: "full" }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
