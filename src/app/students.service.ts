import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  students = [
    {
      name:"Deema",
      major:"IT",
      color:"#858185",
    },
    {
      name:"Lama",
      major:"CS",
      color:"#F4E444"
    }
  ]
  constructor() { }
  getStudents(){
    return this.students;
  }
}
