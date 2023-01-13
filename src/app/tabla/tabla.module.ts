import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaComponent } from './tabla/tabla.component';
import { DetalleComponent } from './detalle/detalle.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TablaComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TablaComponent
  ]
})
export class TablaModule { }
