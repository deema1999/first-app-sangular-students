import { Component, OnInit } from '@angular/core';
import { MaterialsService } from './../../materials.service';

@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit {

  constructor(private materials : MaterialsService) { }
  materialss;
  ngOnInit() {
    this.materialss = this.materials.getMaterials();
  }
 
  public message = "";

}
