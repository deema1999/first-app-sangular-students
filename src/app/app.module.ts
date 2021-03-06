import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentItemComponent } from './student/student-item/student-item.component';
import { StudentViewComponent } from './student/student-view/student-view.component';
import { MaterialItemComponent } from './material/material-item/material-item.component';
import { MaterialViewComponent } from './material/material-view/material-view.component';
import { MaterialListComponent } from './material/material-list/material-list.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { SearchPipe } from './search.pipe';
import {HttpClientModule} from '@angular/common/http'

const appRoutes: Routes = [
  { path: 'studentlist', component: StudentListComponent },
  { path: 'studentitem', component: StudentItemComponent },
  { path: 'studentview/:id', component: StudentViewComponent },
  { path: 'materiallist', component: MaterialListComponent },
  { path: 'materialitem', component: MaterialItemComponent },
  { path: 'materialview/:id', component: MaterialViewComponent },
  { path: 'addstudent', component: AddStudentComponent }
  
  
];
@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentItemComponent,
    StudentViewComponent,
    MaterialItemComponent,
    MaterialViewComponent,
    MaterialListComponent,
    AddStudentComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
