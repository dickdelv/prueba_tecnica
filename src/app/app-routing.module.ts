import { EditComponent } from './Factura/edit/edit.component';
import { AddComponent } from './Factura/add/add.component';
import { ListarComponent } from './Factura/listar/listar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path:'listar', component:ListarComponent},
{path:'add', component:AddComponent},
{path:'edit', component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
