import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialItemComponent } from './material-item/material-item.component';
import { MaterialListComponent } from './material-list/material-list.component';
import { MaterialViewComponent } from './material-view/material-view.component';



@NgModule({
  declarations: [MaterialItemComponent, MaterialListComponent, MaterialViewComponent],
  imports: [
    CommonModule
  ]
})
export class MaterialModule { }
