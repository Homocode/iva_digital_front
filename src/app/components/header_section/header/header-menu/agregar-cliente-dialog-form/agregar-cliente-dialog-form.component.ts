import { Component, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HeaderMenuComponent } from '../header-menu.component';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ICliente } from 'src/app/models';
import { ClientesService } from 'src/app/services/clientes/clientes.service';

@Component({
  selector: 'app-agregar-cliente-dialog-form',
  templateUrl: './agregar-cliente-dialog-form.component.html',
  styleUrls: ['./agregar-cliente-dialog-form.component.css'],
})
export class AgregarClienteDialogFormComponent {
  addClienteForm: FormGroup;
  cuitControl: FormControl<string | null>;
  razonSocialControl: FormControl<string | null>;
  @Input() dialogParent!: any;

  constructor(
    public dailogRef: MatDialogRef<HeaderMenuComponent>,
    private formBuilder: FormBuilder,
    private clientesService: ClientesService
  ) {
    this.addClienteForm = this.formBuilder.group({
      cuit: '',
      razonSocial: '',
    });
    this.cuitControl = this.addClienteForm.get('cuit') as FormControl;
    this.razonSocialControl = this.addClienteForm.get(
      'razonSocial'
    ) as FormControl;
  }

  _persistCliente(cliente: ICliente) {
    this.clientesService.postCliente(cliente);
  }

  onSubmit() {
    let cuit = this.cuitControl.value as string;
    let razonSocial = this.razonSocialControl.value as string;
    let cliente: ICliente = {
      cuit,
      razonSocial,
    };
    this.clientesService
      .postCliente(cliente)
      .subscribe((data) => console.log(data));

    this.dialogParent.close();
  }
}
