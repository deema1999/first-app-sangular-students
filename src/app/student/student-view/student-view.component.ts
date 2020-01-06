import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit {

  @Input() public name;
  sub: any;
 
  constructor( private route: ActivatedRoute) { }

  ngOnInit() {
 
    this.sub = this.route.params.subscribe(params => {
    this.name = params['name'];
    });
    //console.log(this.student.name);
 }
}
