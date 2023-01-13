import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './tabla/detalle/detalle.component';
import { TablaComponent } from './tabla/tabla/tabla.component';

const routes: Routes = [
  {path:'home', component:TablaComponent},
  {path:'detalle/:id', component:DetalleComponent},
  {path:'**', redirectTo:'home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
