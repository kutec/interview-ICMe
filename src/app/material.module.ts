import { NgModule } from "@angular/core";

import { MatButtonToggleModule } from "@angular/material/button-toggle";
import {MatTableModule} from '@angular/material/table'; 
import {MatPaginatorModule} from '@angular/material/paginator'; 

@NgModule({
  imports: [
    MatButtonToggleModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [
    MatButtonToggleModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class MaterialModule {}
