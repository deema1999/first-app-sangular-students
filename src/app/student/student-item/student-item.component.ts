import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.css']
})
export class StudentItemComponent implements OnInit {

  @Input() student: any;
  @Output() messageToEmit = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  sendMessageToParent(message: string) {
    this.messageToEmit.emit(message)
}
}
