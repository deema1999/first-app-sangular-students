import { Component, OnInit, Input , Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-material-item',
  templateUrl: './material-item.component.html',
  styleUrls: ['./material-item.component.css']
})
export class MaterialItemComponent implements OnInit {

  @Input() material: any;
  @Output() public messageToEmit = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  sendMessageToParent() {
    this.messageToEmit.emit(this.material.color)
}

}
