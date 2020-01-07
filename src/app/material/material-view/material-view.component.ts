import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-material-view',
  templateUrl: './material-view.component.html',
  styleUrls: ['./material-view.component.css']
})
export class MaterialViewComponent implements OnInit {

  @Input() public name;
  sub: any;
 
  constructor( private route: ActivatedRoute) { }

  ngOnInit() {
 
    this.sub = this.route.params.subscribe(params => {
    this.name = params['name'];
    });
    
 }
}
