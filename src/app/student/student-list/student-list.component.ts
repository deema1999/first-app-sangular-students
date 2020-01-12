import { Component, OnInit, SimpleChanges } from '@angular/core';
import { StudentsService } from './../../students.service';
import { MaterialsService } from './../../materials.service';
import { StudentsMaterialsService } from './../../students-materials.service';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor(private students : StudentsService,
    private materials : MaterialsService,
    private sMaterials : StudentsMaterialsService) { }
    studentss = [];
    materialss = [];
    sMaterialss = [];
    viewedMaterials = [];
  name:string;
  ngOnInit() {
    //console.log("deema on init");
    this.studentss = this.students.getStudents();
    //subscribe(data => this.studentss = data);
    this.studentss = this.students.getStudents();
    this.materialss = this.materials.getMaterials();
    this.sMaterialss = this.sMaterials.getStudentsMaterials();

    for(let student of this.studentss) {
      for(let material of this.materialss) {
        for(let sMaterial of this.sMaterialss) {
            if(student.id == sMaterial.sId && material.id == sMaterial.mId) {
                student.mat.push(material);
            }
          }
        }
      }
    }
  /*ngAfterContentInit() {
    console.log("deema on content");
  }

  ngDoCheck() {
    console.log("deema on change check");
  }

  
  ngOnChanges(changes: SimpleChanges ) {
    console.log("deema on change");
  }*/
  
/*students = [
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
]*/

public message = "";

}
