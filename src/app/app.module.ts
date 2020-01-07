import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentItemComponent } from './student/student-item/student-item.component';
import { StudentViewComponent } from './student/student-view/student-view.component';
import { MaterialItemComponent } from './material/material-item/material-item.component';
import { MaterialViewComponent } from './material/material-view/material-view.component';
import { MaterialListComponent } from './material/material-list/material-list.component';

const appRoutes: Routes = [
  { path: 'studentlist', component: StudentListComponent },
  { path: 'studentitem', component: StudentItemComponent },
  { path: 'studentview/:name', component: StudentViewComponent },
  { path: 'materiallist', component: MaterialListComponent },
  { path: 'materialitem', component: MaterialItemComponent },
  { path: 'materialview/:name', component: MaterialViewComponent }
  
  
];
@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentItemComponent,
    StudentViewComponent,
    MaterialItemComponent,
    MaterialViewComponent,
    MaterialListComponent
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
