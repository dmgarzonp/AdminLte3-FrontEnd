import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesComponent } from './pages.component';
import { DashboarComponent } from './dashboar/dashboar.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProductosComponent } from './productos/productos.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ClientesComponent } from './clientes/clientes.component';



@NgModule({
  declarations: [
    PagesComponent,
    DashboarComponent,
    UsuariosComponent,
    ProductosComponent,
    ClientesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    DashboarComponent,
    UsuariosComponent,
    ProductosComponent,
    ClientesComponent
  ]
})
export class PagesModule { }
