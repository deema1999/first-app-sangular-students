import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  materials = [
    {
      name : "book",
      price: "5$",
      color: "#eee"
    },
    {
      name : "bag",
      price: "20$",
      color: "#F444E7"
    }
    
  ]
  public message = "";

}
