import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css'],
})
export class LibrosComponent {
  constructor(private router: Router) {}

  navToCompras() {
    this.router.navigate(['/libro-compras']);
  }
  navToVentas() {
    this.router.navigate(['/libro-ventas']);
  }

  openLiquidacionDialog() {}
}
