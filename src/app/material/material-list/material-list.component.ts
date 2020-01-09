import { Component, OnInit } from '@angular/core';
import { StudentsService } from './../../students.service';

@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit {

  constructor(private materials : StudentsService) { }
  materialss;
  ngOnInit() {
    this.materialss = this.materials.getMaterials();
  }
 
 
  
  public message = "";

}
