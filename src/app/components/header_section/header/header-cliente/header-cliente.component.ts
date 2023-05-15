import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SelectClienteDialogComponent } from './select-cliente-dialog/select-cliente-dialog.component';
import { LocalStorageService } from 'src/app/services/local_storage/local-storage.service';
import { ICliente, IClienteState } from 'src/app/models';
import { BehaviorSubject } from 'rxjs';
import { ClientesService } from 'src/app/services/clientes/clientes.service';

@Component({
  selector: 'app-header-cliente',
  templateUrl: './header-cliente.component.html',
  styleUrls: ['./header-cliente.component.css'],
})
export class HeaderClienteComponent {
  clientes!: ICliente[];
  selectedCliente$: BehaviorSubject<IClienteState>;

  constructor(
    private dialog: MatDialog,
    private localStore: LocalStorageService,
    private clientesService: ClientesService
  ) {
    this.selectedCliente$ = clientesService.selectedCliente$;
    this._getClientes();
  }

  private _getClientes() {
    this.clientesService.getClientes().subscribe((c) => {
      this.clientes = c;
      console.log(this.clientes);
    });
  }

  openDialog(): void {
    this.dialog.open(SelectClienteDialogComponent, {
      data: this.clientes,
      width: '30%',
      height: '40%',
    });
  }
}
