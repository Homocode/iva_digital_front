import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IComprobanteCompra } from 'src/app/models';
import { ComprobantesService } from 'src/app/services/comprobantes/comprobantes.service';

@Component({
  selector: 'app-comprobantes-compras-table',
  templateUrl: './comprobantes-compras-table.component.html',
  styleUrls: ['./comprobantes-compras-table.component.css'],
})
export class ComprobantesComprasTableComponent {
  displayedColumns: string[] = [
    'fechaEmision',
    'mesImputacion',
    'tipoComprobante',
    'numeroComprobante',
    'nombreProveedor',
    'cuitProvedor',
    'total',
    'toalNetosGravados',
    'totalIva',
    'ConceptosExentosNoGravados',
    'percepcionesIva',
    'percepcionesIibb',
  ];
  dataSource!: MatTableDataSource<IComprobanteCompra>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private comprobantesService: ComprobantesService) {
    this._getComprobantes();
  }

  private _getComprobantes() {
    this.comprobantesService.getComprobantesCompras().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: console.log,
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
