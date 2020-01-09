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
  materials = [
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
    
  ]
  constructor() { }
  getStudents(){
    return this.students;
  }
  getMaterials(){
    return this.materials;
  }
}
