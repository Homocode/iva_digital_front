import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { IProveedores } from 'src/app/models';
import { ProveedoresService } from 'src/app/services/proveedores/proveedores.service';
import { tipoDeComprobantes } from 'src/app/utils/tiposDeComprobantes';

@Component({
  selector: 'app-add-comprobante-dialog',
  templateUrl: './add-comprobante-dialog.component.html',
  styleUrls: ['./add-comprobante-dialog.component.css'],
})
export class AddComprobanteDialogComponent {
  tipoComprobantes = tipoDeComprobantes;
  grupoDeComprobantes: string[] = Object.keys(tipoDeComprobantes);
  proveedores$!: Subject<IProveedores[]>;

  constructor(
    private dialogRef: MatDialogRef<AddComprobanteDialogComponent>,
    private proveedoresService: ProveedoresService
  ) {
    this.proveedores$ = new Subject();
    this._getProveedores();
  }

  private _getProveedores() {
    this.proveedoresService.getProveedores().subscribe({
      next: (value) => {
        this.proveedores$.next(value);
      },
      error: console.log,
    });
  }
}
