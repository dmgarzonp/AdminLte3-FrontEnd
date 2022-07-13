import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboarComponent } from './dashboar/dashboar.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProductosComponent } from './productos/productos.component';
import { PagesComponent } from './pages.component';
import { ClientesComponent } from './clientes/clientes.component';

const routes: Routes = [
  {path: 'dashboard', component: PagesComponent,
  children: [
      { path: '', component: DashboarComponent, data:{titulo: 'Dashboard'} },
      { path: 'usuarios', component: UsuariosComponent, data:{titulo: 'Usuarios'} },
      { path: 'productos', component: ProductosComponent, data:{titulo: 'Productos'} },
      { path: 'clientes', component: ClientesComponent, data:{titulo: 'Clientes'} }
  ]
}

]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
