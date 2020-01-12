import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from './../../students.service';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit {

  
  sub: any;
  studentss = [];
  student;
  @Input() public id;
  
  constructor( private route: ActivatedRoute,
    private students: StudentsService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
    this.id = params['id'];
    });
    this.student = this.students.getStudentById(this.id);
    //.subscribe(data => this.studentss = data);
    //console.log(this.studentss);
    //this.student = this.studentss.find(student => student.name === this.name);
 }
  
}
