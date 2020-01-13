import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsMaterialsService {

  constructor() { }
  studentsMaterials = [
    {
      sId: 1,
      mId: 1
    },
    {
      sId: 1,
      mId: 2
    },
    {
      sId: 1,
      mId: 4
    },
    {
      sId: 2,
      mId: 1
    },
    {
      sId: 3,
      mId: 3
    },
    {
      sId: 3,
      mId: 1
    },
    {
      sId: 4,
      mId: 2
    }
  ]

  getStudentsMaterials() {
    return this.studentsMaterials;
  }
}
