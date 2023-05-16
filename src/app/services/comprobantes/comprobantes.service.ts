import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IClienteState, IComprobanteCompra } from 'src/app/models';
import { ClientesService } from '../clientes/clientes.service';

@Injectable({
  providedIn: 'root',
})
export class ComprobantesService {
  private baseUrl = 'http://localhost:3000';
  private selectedCliente$: BehaviorSubject<IClienteState>;

  constructor(private http: HttpClient, clientesService: ClientesService) {
    this.selectedCliente$ = clientesService.selectedCliente$;
  }

  getComprobantesCompras(): Observable<IComprobanteCompra[]> {
    let cuitCliente = this.selectedCliente$.getValue().selectedCliente
      ?.cuit as string;

    let queryParams = new HttpParams();
    queryParams.append('cuit', cuitCliente);

    return this.http.get<IComprobanteCompra[]>(
      `${this.baseUrl}/comprobantesCompras`,
      {
        params: queryParams,
      }
    );
  }
}
