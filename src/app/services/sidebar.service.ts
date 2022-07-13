import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [{
    titulo: 'Dashboard',
    icono: 'nav-icon fas fa-tachometer-alt',
    submenu: [
      { titulo: 'Usuarios', url: 'usuarios', icono: 'fa fa-users nav-icon'},
      { titulo: 'Productos', url: 'productos', icono: 'fa fa-cubes nav-icon'},
      { titulo: 'Clientes', url: 'clientes', icono: 'fa fa-user-circle nav-icon'},
    ]
  }]
}
