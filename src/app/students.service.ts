import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IStudent } from './students';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  students = [
    {
      id: 1,
      mat :[],
      name:"Deema",
      major:"IT",
      color:"#858185",
    },
    {
      id: 2,
      mat :[],
      name:"Lama",
      major:"CS",
      color:"#F4E444"
    },
    {
      id: 3,
      mat :[],
      name:"Ahmad",
      major:"IS",
      color:"#321AC8"
    },
    {
      id: 4,
      mat :[],
      name:"Nana",
      major:"IT",
      color:"#F03822"
    }
  ]
  /*materials = [
    {
      name : "book",
      price: "5$",
      color: "#eee"
    },
    {
      name : "bag",
      price: "20$",
      color: "#F444E7"
    }
    
  ]*/
  /*private url = "/assets/data/students.json";
  constructor(private http: HttpClient) { }
  getStudents(): Observable<IStudent[]>{
    return this.http.get<IStudent[]>(this.url);
  }*/
  getStudents(){
    return this.students;
  }
  getStudentById(id) {
    for(let student of this.students)
      if(student.id == id)
        return student;
  }
  
}
