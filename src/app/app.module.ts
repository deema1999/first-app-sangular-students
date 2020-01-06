import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentItemComponent } from './student/student-item/student-item.component';
import { StudentViewComponent } from './student/student-view/student-view.component';

const appRoutes: Routes = [
  { path: 'studentlist', component: StudentListComponent },
  { path: 'studentitem', component: StudentItemComponent },
  { path: 'studentview', component: StudentViewComponent }
  
];
@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentItemComponent,
    StudentViewComponent
  ],
  imports: [
    BrowserModule,
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
