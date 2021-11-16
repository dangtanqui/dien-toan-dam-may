import { StudentService } from './services/student.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateStudentComponent } from './create-student/create-student.component';
import { FormsModule } from '@angular/forms';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { CreateLopComponent } from './create-lop/create-lop.component';
import { UpdateLopComponent } from './update-lop/update-lop.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    CreateStudentComponent,
    UpdateStudentComponent,
    StudentDetailsComponent,
    CreateLopComponent,
    UpdateLopComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
