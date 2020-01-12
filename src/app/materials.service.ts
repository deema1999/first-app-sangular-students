import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MaterialsService {

  constructor() { }
  
  materials = [
    {
      id: 1,
      name : "book",
      price: "5$",
      color: "#eee"
    },
    {
      id: 2,
      name : "bag",
      price: "20$",
      color: "#F444E7"
    },
    {
      id: 3,
      name : "pin",
      price: "5$",
      color: "#321AC8"
    },
    {
      id: 4,
      name : "pincle",
      price: "3$",
      color: "#1AC8B8"
    }
    
  ]
  getMaterials(){
    return this.materials;
  }

  getMaterialById(id){
    for (let material of this.materials)
      if(material.id == id) {
        return material;
      }
  }
}
