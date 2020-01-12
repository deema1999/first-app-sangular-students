import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IStudent } from './students';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  /*students = [
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
  ]*/
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
  private url = "/assets/data/students.json";
  constructor(private http: HttpClient) { }
  getStudents(): Observable<IStudent[]>{
    return this.http.get<IStudent[]>(this.url);
  }
  
}
