import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ICliente } from 'src/app/models';
import { ClientesService } from 'src/app/services/clientes/clientes.service';
import { LocalStorageService } from 'src/app/services/local_storage/local-storage.service';
import { IClienteState } from 'src/app/models';

@Component({
  selector: 'app-select-cliente-form',
  templateUrl: './select-cliente-form.component.html',
  styleUrls: ['./select-cliente-form.component.css'],
})
export class SelectClienteFormComponent {
  @Input() dialogParent!: any;

  selectClienteForm: FormGroup;
  inputControl: FormControl<string | null>;

  @Input() clientes!: ICliente[];
  filteredOptions$!: Observable<ICliente[]>;
  selectedCliente!: ICliente;
  selectedCliente$: BehaviorSubject<IClienteState>;

  constructor(
    private formBuilder: FormBuilder,
    private localStore: LocalStorageService,
    private clientesService: ClientesService,
    private router: Router
  ) {
    this.selectClienteForm = this.formBuilder.group({ cliente: '' });
    this.inputControl = this.selectClienteForm.get('cliente') as FormControl<
      string | null
    >;

    this.selectedCliente$ = clientesService.selectedCliente$;
  }

  ngOnInit() {
    this.filteredOptions$ = this.inputControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  private _filter(value: string): ICliente[] {
    const filterValue = value.toLowerCase();
    return this.clientes.filter((cliente) =>
      cliente.razonSocial.toLowerCase().includes(filterValue)
    );
  }

  onSubmit(): void {
    this.selectedCliente = this.clientes.find(
      (cliente) => cliente.razonSocial === this.inputControl.value
    ) as ICliente;

    this.localStore.saveData('cliente', JSON.stringify(this.selectedCliente));

    this.clientesService.setSelectedCliente({
      selectedCliente: this.selectedCliente,
      isSelected: true,
    });

    this.dialogParent.close();

    this.router.navigate(['/libros']);
  }
}
/* import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ICliente } from 'src/app/models';
import { ClientesService } from 'src/app/services/clientes/clientes.service';
import { LocalStorageService } from 'src/app/services/local_storage/local-storage.service';

@Component({
  selector: 'app-select-cliente-form',
  templateUrl: './select-cliente-form.component.html',
  styleUrls: ['./select-cliente-form.component.css'],
})
export class SelectClienteFormComponent {
  @Input() dialogParent!: any;

  selectClienteForm: FormGroup;
  inputControl: FormControl<string | null>;

  @Input() clientes!: ICliente[];
  filteredOptions$!: Observable<ICliente[]>;
  selectedCliente!: ICliente;
  @Output() selectedClienteEvent = new EventEmitter<ICliente>();

  constructor(
    private formBuilder: FormBuilder,
    private localStore: LocalStorageService,
    private clienteService: ClientesService,
    private router: Router
  ) {
    this.selectClienteForm = this.formBuilder.group({ cliente: '' });
    this.inputControl = this.selectClienteForm.get('cliente') as FormControl<
      string | null
    >;
  }

  ngOnInit() {
    this.filteredOptions$ = this.inputControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  private _filter(value: string): ICliente[] {
    const filterValue = value.toLowerCase();
    return this.clientes.filter((cliente) =>
      cliente.razonSocial.toLowerCase().includes(filterValue)
    );
  }

  private _sendMessage() {
    this.selectedClienteEvent.emit(this.selectedCliente);
  }

  onSubmit(): void {
    this.selectedCliente = this.clientes.find(
      (cliente) => cliente.razonSocial === this.inputControl.value
    ) as ICliente;

    this.localStore.saveData('cliente', JSON.stringify(this.selectedCliente));

    this._sendMessage();

    this.dialogParent.close();

    this.router.navigate(['/libros']);
  }
} */
