import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentItemComponent } from './student-item/student-item.component';
import { StudentViewComponent } from './student-view/student-view.component';


@NgModule({
  declarations: [StudentListComponent, StudentItemComponent, StudentViewComponent],
  imports: [
    CommonModule,
   
  ]
})
export class StudentModule { }
