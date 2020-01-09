import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from './../../students.service';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';


@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit {

  public student;
  sub: any;
  public studentss = [];
  @Input() public name;
  
  constructor( private route: ActivatedRoute,
    private students: StudentsService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
    this.name = params['name'];
    this.studentss = this.students.getStudents();
    this.student = this.studentss.find(student => student.name === this.name);
    });
    
 }

}
