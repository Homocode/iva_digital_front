import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProveedores } from 'src/app/models';
import { Subject, tap, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProveedoresService {
  private baseUrl = 'http://localhost:3000';

  private _refresh$ = new Subject<IProveedores[]>();

  constructor(private http: HttpClient) {}

  getProveedores() {
    return this.http.get<IProveedores[]>(`${this.baseUrl}/proveedores`);
  }

  postProveedor(proveedor: IProveedores): Observable<IProveedores[]> {
    return this.http
      .post<IProveedores[]>('http://localhost:8080/clientes', proveedor)
      .pipe(tap((proveedores) => this._refresh$.next(proveedores)));
  }

  get refresh$() {
    return this._refresh$;
  }
}
