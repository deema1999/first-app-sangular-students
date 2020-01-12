import { Component, OnInit, Input, Output, EventEmitter, Host } from '@angular/core';

@Component({
  selector: '[app-student-item]',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.css'],
  styles: [
  ]
})
export class StudentItemComponent implements OnInit {

  @Input() student: any;
  @Output() public messageToEmit = new EventEmitter();
  birth = new Date(1999,1,22);
  sMat = [];
  
  constructor() { }

  ngOnInit() {
    this.sMat = this.student.mat;
}
  sendMessageToParent() {
    this.messageToEmit.emit(this.student.color)
}

}
