import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from './../../students.service';


@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit {

  student:any;
  @Input() public name;
  sub: any;
 
  constructor( private route: ActivatedRoute,
    private students: StudentsService) { }

  ngOnInit() {

    this.student = this.students.getStudents().find((item) => item.name === name);
    this.sub = this.route.params.subscribe(params => {
      this.name = params['name'];
    });
    
 }
}
