import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultBodyComponent } from './components/body_section/default-body/default-body.component';
import { LibrosComponent } from './components/body_section/libros/libros.component';
import { LibroComprasComponent } from './components/body_section/libro-compras/libro-compras.component';
import { LibroVentasComponent } from './components/body_section/libro-ventas/libro-ventas.component';
import { NotFoundComponent } from './components/body_section/not-found/not-found.component';
import { ClienteGuard } from './guards/cliente.guard';

const routes: Routes = [
  { path: '', component: DefaultBodyComponent },
  {
    path: 'libros',
    component: LibrosComponent,
    canActivate: [ClienteGuard],
  },
  {
    path: 'libro-ventas',
    component: LibroVentasComponent,
    canActivate: [ClienteGuard],
  },
  {
    path: 'libro-compras',
    component: LibroComprasComponent,
    canActivate: [ClienteGuard],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
