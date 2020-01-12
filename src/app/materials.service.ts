import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MaterialsService {

  constructor() { }
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
  getMaterials(){
    return this.materials;
  }
}
