import { NgModule } from "@angular/core";

import { MatButtonToggleModule } from "@angular/material/button-toggle";
import {MatTableModule} from '@angular/material/table'; 

@NgModule({
  imports: [
    MatButtonToggleModule,
    MatTableModule
  ],
  exports: [
    MatButtonToggleModule,
    MatTableModule
  ]
})
export class MaterialModule {}
