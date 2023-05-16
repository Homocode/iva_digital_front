import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImportComprobantesDialogComponent } from './import-comprobantes-dialog/import-comprobantes-dialog.component';
import { AddComprobanteDialogComponent } from './add-comprobante-dialog/add-comprobante-dialog.component';

@Component({
  selector: 'app-libro-compras',
  templateUrl: './libro-compras.component.html',
  styleUrls: ['./libro-compras.component.css'],
})
export class LibroComprasComponent {
  constructor(public dialog: MatDialog) {}

  importCsv() {
    this.dialog.open(ImportComprobantesDialogComponent);
  }

  openDialogCompFis() {
    this.dialog.open(AddComprobanteDialogComponent);
  }

  openDialogCompPerAnt() {}

  exportTable() {}
}
