import { Component, OnInit, SimpleChanges } from '@angular/core';
import { StudentsService } from './../../students.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(private students: StudentsService) { }
  studentss;
  ngOnInit() {
    //console.log("deema on init");
    this.studentss = this.students.getStudents();
  }
  /*ngAfterContentInit() {
    console.log("deema on content");
  }

  ngDoCheck() {
    console.log("deema on change check");
  }

  
  ngOnChanges(changes: SimpleChanges ) {
    console.log("deema on change");
  }*/
  
/*students = [
  {
    name:"Deema",
    major:"IT",
    color:"#858185"
  },
  {
    name:"Lama",
    major:"CS",
    color:"#F4E444"
  }
]*/

public message = "";

}
