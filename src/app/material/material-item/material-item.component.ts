import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-material-item',
  templateUrl: './material-item.component.html',
  styleUrls: ['./material-item.component.css']
})
export class MaterialItemComponent implements OnInit {

  @Input() material: any;
  constructor() { }

  ngOnInit() {
  }

}
