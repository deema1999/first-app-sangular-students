import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentItemComponent } from './student-item/student-item.component';
import { StudentViewComponent } from './student-view/student-view.component';
import { AddStudentComponent } from './add-student/add-student.component';


@NgModule({
  declarations: [StudentListComponent, StudentItemComponent, StudentViewComponent, AddStudentComponent],
  imports: [
    CommonModule,
   
  ]
})
export class StudentModule { }
