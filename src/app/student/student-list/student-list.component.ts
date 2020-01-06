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
    color:"#eee"
  },
  {
    name:"Lama",
    major:"CS",
    color:"#FF0000"
  }
]

}
