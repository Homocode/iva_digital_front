import { Injectable } from '@angular/core';
import { Subject, Observable, tap, BehaviorSubject } from 'rxjs';
import { ICliente, IClienteState } from '../../models';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from '../local_storage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  private _refresh$ = new Subject<ICliente[]>();

  selectedCliente$: BehaviorSubject<IClienteState>;

  constructor(private http: HttpClient, localStore: LocalStorageService) {
    const initialLocalStoreCliente = JSON.parse(
      localStore.getData('cliente') as string
    );

    let isSelected = false;
    if (initialLocalStoreCliente !== null) isSelected = true;

    const initialState: IClienteState = {
      selectedCliente: initialLocalStoreCliente,
      isSelected,
    };

    this.selectedCliente$ = new BehaviorSubject(initialState);
  }

  setSelectedCliente(cliente: IClienteState) {
    this.selectedCliente$.next(cliente);
  }

  getClientes(): Observable<ICliente[]> {
    return this.http.get<ICliente[]>('http://localhost:8080/clientes');
  }

  postCliente(cliente: ICliente): Observable<ICliente[]> {
    return this.http
      .post<ICliente[]>('http://localhost:8080/clientes', cliente)
      .pipe(tap((clientes) => this._refresh$.next(clientes)));
  }

  get refresh$() {
    return this._refresh$;
  }
}
