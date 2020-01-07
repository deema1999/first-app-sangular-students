import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
students = [
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
]

public message = "";

}
