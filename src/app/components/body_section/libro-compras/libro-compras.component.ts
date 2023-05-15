import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImportComprobantesComponent } from './import-comprobantes/import-comprobantes.component';

@Component({
  selector: 'app-libro-compras',
  templateUrl: './libro-compras.component.html',
  styleUrls: ['./libro-compras.component.css'],
})
export class LibroComprasComponent {
  constructor(public dialog: MatDialog) {}

  importCsv() {
    this.dialog.open(ImportComprobantesComponent);
  }

  openDialogCompFis() {}

  openDialogCompPerAnt() {}

  exportTable() {}
}
