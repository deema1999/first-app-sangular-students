import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from './../../students.service';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit {

  public student;
  sub: any;
  studentss = [];
  @Input() public name;
  
  constructor( private route: ActivatedRoute,
    private students: StudentsService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
    this.name = params['name'];
    });
    this.students.getStudents().subscribe(data => this.studentss = data);
    console.log(this.studentss);
    this.student = this.studentss.find(student => student.name === this.name);
 }
  
}
