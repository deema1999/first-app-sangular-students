import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.css']
})
export class StudentItemComponent implements OnInit {

  @Input() student: any;
  @Output() public messageToEmit = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  sendMessageToParent() {
    this.messageToEmit.emit(this.student.color)
}
}
