import { Component, OnInit } from '@angular/core';
import { StudentsService } from './../../students.service';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private students: StudentsService) { }
  student = {
    name:"",
    major:"",
    color:""
  };
  ngOnInit() {
  }
  onClickSubmit(studentData) {
    alert('success');
    this.student.name = studentData.name;
    this.student.major = studentData.major;
    this.student.color = studentData.color;
    this.students.addStudent(this.student);
 }

}
