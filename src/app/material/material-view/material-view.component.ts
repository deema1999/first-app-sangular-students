import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MaterialsService } from './../../materials.service';

@Component({
  selector: 'app-material-view',
  templateUrl: './material-view.component.html',
  styleUrls: ['./material-view.component.css']
})
export class MaterialViewComponent implements OnInit {

  @Input() public id;
  material;
  sub: any;
  materialss = [];
  constructor( private route: ActivatedRoute,
    private materials: MaterialsService) { }

  ngOnInit() {
 
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.material = this.materials.getMaterialById(this.id);
 }//find(material => material.name == this.name);
}
