import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from './../../students.service';

@Component({
  selector: 'app-material-view',
  templateUrl: './material-view.component.html',
  styleUrls: ['./material-view.component.css']
})
export class MaterialViewComponent implements OnInit {

  @Input() public name;
  material;
  sub: any;
 
  constructor( private route: ActivatedRoute,
    private materials: StudentsService) { }

  ngOnInit() {
 
    this.sub = this.route.params.subscribe(params => {
      this.name = params['name'];
    });
    this.material = this.materials.getMaterials().find(material => material.name == this.name);
    
 }
}
