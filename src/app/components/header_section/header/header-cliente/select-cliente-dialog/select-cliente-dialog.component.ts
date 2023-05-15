import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HeaderClienteComponent } from '../header-cliente.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ICliente } from 'src/app/models';

@Component({
  selector: 'app-select-cliente-dialog',
  templateUrl: './select-cliente-dialog.component.html',
  styleUrls: ['./select-cliente-dialog.component.css'],
})
export class SelectClienteDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ICliente[],
    public dialogRef: MatDialogRef<HeaderClienteComponent>
  ) {}
}
