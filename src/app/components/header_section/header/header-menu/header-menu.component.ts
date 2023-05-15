import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AgregarClienteDialogFormComponent } from './agregar-cliente-dialog-form/agregar-cliente-dialog-form.component';
import { LocalStorageService } from 'src/app/services/local_storage/local-storage.service';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { ClientesService } from 'src/app/services/clientes/clientes.service';
import { IClienteState } from 'src/app/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css'],
})
export class HeaderMenuComponent {
  selectedCliente$: BehaviorSubject<IClienteState>;

  constructor(
    public dialog: MatDialog,
    private localStore: LocalStorageService,
    private clienteService: ClientesService,
    private router: Router
  ) {
    this.selectedCliente$ = this.clienteService.selectedCliente$;
  }

  addCliente() {
    this.dialog.open(AgregarClienteDialogFormComponent);
  }

  exitCliente() {
    this.localStore.removeData('cliente');
    this.clienteService.setSelectedCliente({
      selectedCliente: null,
      isSelected: false,
    });

    this.router.navigate(['/']);
  }
}
